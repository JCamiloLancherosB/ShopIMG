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
                // Buscar la carpeta de destino (con "(2)" al final)
                const nombreCarpetaNueva = carpeta + ' (2)';
                const carpetaDestino = path.join(directorioOrigen, nombreCarpetaNueva);

                // Leer archivos de la carpeta de destino
                fs.readdir(carpetaDestino, (err, archivos) => {
                    if (err) {
                        console.error(`Error al leer archivos de ${carpetaDestino}:`, err);
                        return;
                    }

                    // Mover los archivos de vuelta a la carpeta original
                    archivos.forEach(archivo => {
                        const origen = path.join(carpetaDestino, archivo);
                        const destino = path.join(carpetaOrigen, archivo);

                        fs.rename(origen, destino, err => {
                            if (err) {
                                console.error(`Error al mover el archivo ${archivo} de vuelta a ${carpetaOrigen}:`, err);
                            } else {
                                console.log(`Se movió el archivo ${archivo} de vuelta a ${carpetaOrigen}`);
                            }
                        });
                    });

                    // Eliminar la carpeta de destino
                    fs.rmdir(carpetaDestino, err => {
                        if (err) {
                            console.error(`Error al eliminar la carpeta ${carpetaDestino}:`, err);
                        } else {
                            console.log(`Se eliminó la carpeta ${carpetaDestino}`);
                        }
                    });
                });
            }
        });
    });
});
