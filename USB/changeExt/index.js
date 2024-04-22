const fs = require('fs');
const path = require('path');

const directorio = 'E:/Ariel/Los anios maravillosos';

// Leer el contenido del directorio
fs.readdir(directorio, (err, archivos) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    // Iterar sobre cada archivo
    archivos.forEach(archivo => {
        const nombreArchivo = path.parse(archivo).name;
        const extensionActual = path.parse(archivo).ext;

        // Solo procesar archivos sin extensión o con extensión diferente a mp4
        if (!extensionActual || extensionActual !== '.mp4') {
            const nuevoNombre = nombreArchivo + '.mp4';
            const rutaArchivo = path.join(directorio, archivo);
            const nuevaRutaArchivo = path.join(directorio, nuevoNombre);

            // Renombrar el archivo
            fs.rename(rutaArchivo, nuevaRutaArchivo, err => {
                if (err) {
                    console.error(`Error al renombrar el archivo ${archivo}:`, err);
                } else {
                    console.log(`Se cambió la extensión del archivo ${archivo} a .mp4`);
                }
            });
        }
    });
});
