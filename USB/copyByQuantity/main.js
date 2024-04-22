const fs = require('fs-extra');
const path = require('path');

async function copiarCarpetasEquitativamente(directorioOrigen, directorioDestino, tamanoMaximo) {
    let espacioUsado = 0;

    async function copiarRecursivo(directorio, destino) {
        const carpetas = await fs.readdir(directorio);

        for (const carpeta of carpetas) {
            const rutaCarpeta = path.join(directorio, carpeta);
            const rutaDestino = path.join(destino, carpeta);
            const stats = await fs.stat(rutaCarpeta);

            if (stats.isDirectory()) {
                await fs.ensureDir(rutaDestino);
                await copiarRecursivo(rutaCarpeta, rutaDestino);
            } else if (stats.isFile()) {
                const tamanoArchivo = stats.size;
                if (espacioUsado + tamanoArchivo <= tamanoMaximo) {
                    await fs.copyFile(rutaCarpeta, rutaDestino);
                    espacioUsado += tamanoArchivo;
                    console.log(`Copiando ${rutaCarpeta} a ${rutaDestino}`);
                } else {
                    console.log("Tamaño límite alcanzado en la carpeta. No se pueden copiar más archivos en esta carpeta.");
                    return;
                }
            }
        }
    }

    await copiarRecursivo(directorioOrigen, directorioDestino);
}

const directorioOrigen = 'E:/Jose';
const directorioDestino = 'F:/';
const tamanoMaximoPorCarpeta = 1.3 * 1024 * 1024 * 1024; // 1.3 GB en bytes

copiarCarpetasEquitativamente(directorioOrigen, directorioDestino, tamanoMaximoPorCarpeta)
    .then(() => console.log('Copiado exitoso.'))
    .catch(error => console.error('Error:', error));
