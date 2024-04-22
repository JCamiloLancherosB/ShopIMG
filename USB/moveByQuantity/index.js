const fs = require('fs');
const path = require('path');

const directorioOrigen = 'E:/MP4/Yon Fierro';

// Leer el contenido del directorio
fs.readdir(directorioOrigen, (err, carpetas) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    // Iterar sobre cada carpeta
    carpetas.forEach(carpeta => {
        const carpetaOrigen = path.join(directorioOrigen, carpeta);

        // Verificar si es una carpeta
        fs.stat(carpetaOrigen, (err, stats) => {
            if (err) {
                console.error(`Error al obtener información de ${carpetaOrigen}:`, err);
                return;
            }

            if (stats.isDirectory()) {
                // Leer archivos de la carpeta
                fs.readdir(carpetaOrigen, (err, archivos) => {
                    if (err) {
                        console.error(`Error al leer archivos de ${carpetaOrigen}:`, err);
                        return;
                    }

                    // Tomar solo los primeros 20 archivos
                    const archivosAMover = archivos.slice(0, 20);

                    // Crear el nuevo nombre para la carpeta destino
                    const nombreCarpetaNueva = carpeta + ' (2)';
                    const carpetaDestino = path.join(directorioOrigen, nombreCarpetaNueva);

                    // Crear el directorio destino dentro de la carpeta original
                    fs.mkdir(carpetaDestino, { recursive: true }, err => {
                        if (err) {
                            console.error(`Error al crear el directorio destino ${carpetaDestino}:`, err);
                            return;
                        }

                        // Mover los archivos a la carpeta destino
                        archivosAMover.forEach(archivo => {
                            const origen = path.join(carpetaOrigen, archivo);
                            const destino = path.join(carpetaDestino, archivo);

                            fs.rename(origen, destino, err => {
                                if (err) {
                                    console.error(`Error al mover el archivo ${archivo}:`, err);
                                } else {
                                    console.log(`Se movió el archivo ${archivo} a ${carpetaDestino}`);
                                }
                            });
                        });
                    });
                });
            }
        });
    });
});
