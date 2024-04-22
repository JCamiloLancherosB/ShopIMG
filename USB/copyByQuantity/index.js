const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

async function copiarArchivosEquitativamente(directorioOrigen, directorioDestino, tamanoLimite) {
    let espacioUsado = 0;

    async function copiarRecursivo(directorio, destino) {
        const archivos = await fs.readdir(directorio);

        for (const archivo of archivos) {
            const rutaArchivo = path.join(directorio, archivo);
            const rutaDestino = path.join(destino, archivo);
            const stats = await fs.stat(rutaArchivo);

            if (stats.isDirectory()) {
                const nuevaCarpeta = path.join(destino, archivo);
                await fs.ensureDir(nuevaCarpeta);
                await copiarRecursivo(rutaArchivo, nuevaCarpeta);
            } else if (stats.isFile()) {
                const tamanoArchivo = stats.size;
                if (espacioUsado + tamanoArchivo <= tamanoLimite) {
                    await fs.copyFile(rutaArchivo, rutaDestino);
                    espacioUsado += tamanoArchivo;
                    console.log(`Copiando ${rutaArchivo} a ${rutaDestino}`);
                } else {
                    console.log("Tamaño límite alcanzado. No se pueden copiar más archivos.");
                    return;
                }
            }
        }
    }

    await copiarRecursivo(directorioOrigen, directorioDestino);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Directorio base donde se encuentra la estructura de carpetas: ', (directorioOrigen) => {
    rl.question('Directorio de salida para los archivos copiados: ', (directorioDestino) => {
        rl.question('Tamaño límite en bytes permitido en la USB: ', async (tamanoLimite) => {
            await copiarArchivosEquitativamente(directorioOrigen, directorioDestino, parseInt(tamanoLimite));
            rl.close();
        });
    });
});
