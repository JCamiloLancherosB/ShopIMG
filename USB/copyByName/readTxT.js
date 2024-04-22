const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
const stat = promisify(fs.stat);

async function exploreDirectories(sourceDir) {
    const directories = fs.readdirSync(sourceDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    const subDirectories = [];
    for (const directory of directories) {
        const subDirPath = path.join(sourceDir, directory);
        const subDirs = fs.readdirSync(subDirPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => path.join(directory, dirent.name));
        subDirectories.push(...subDirs);
    }

    return subDirectories;
}

async function copyFiles(sourceDir, destDir, directoryNames, limitStorage) {
    let remainingSpace = limitStorage;
    let numFilesCopied = 0;
    const notFoundArtists = [];

    for (const directoryName of directoryNames) {
        try {
            const directoryPath = path.join(sourceDir, directoryName);
            const files = fs.readdirSync(directoryPath);

            for (const file of files) {
                const filePath = path.join(directoryPath, file);
                const destFilePath = path.join(destDir, directoryName, file);

                try {
                    const stats = fs.statSync(filePath);

                    // Calcular espacio para este archivo y ver si queda espacio suficiente
                    const spaceNeeded = stats.size * files.length;
                    if (spaceNeeded > remainingSpace) {
                        console.log(`No hay suficiente espacio para copiar el archivo '${file}'.`);
                        continue;
                    }

                    // Copiar el archivo al directorio destino
                    await copyFile(filePath, destFilePath);

                    // Actualizar el espacio restante y el contador de archivos copiados
                    remainingSpace -= stats.size;
                    numFilesCopied++;

                } catch (err) {
                    console.log(`No se pudo copiar el archivo '${file}': ${err.message}.`);

                    // Si no se puede copiar, intentamos copiarlo a un directorio especial para archivos no legibles
                    const unreadableDir = path.join(destDir, 'archivos_no_legibles');
                    const unreadableDestFilePath = path.join(unreadableDir, directoryName, file);
                    await copyFile(filePath, unreadableDestFilePath);
                }
            }
        } catch (err) {
            console.log(`No se pudo procesar el directorio '${directoryName}': ${err.message}. Se omitirá.`);
            notFoundArtists.push(directoryName);
        }
    }

    return { numFilesCopied, notFoundArtists };
}

async function main() {
    const sourceDir = 'E:\\MP3';
    const destDir = 'F:\\';
    const limitStorage = 10000000000;

    const directoryNames = await exploreDirectories(sourceDir);

    const { numFilesCopied, notFoundArtists } = await copyFiles(sourceDir, destDir, directoryNames, limitStorage);
    console.log(`Se copiaron ${numFilesCopied} archivos.`);

    if (notFoundArtists.length > 0) {
        console.log("Carpetas no encontradas:", notFoundArtists);
    }
}

main().catch(err => console.error(err));