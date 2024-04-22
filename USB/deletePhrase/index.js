const fs = require('fs');
const path = require('path');

function eliminarTextoEnArchivos(directorioRaiz, textoABuscar) {
    // Leer el contenido del directorio
    fs.readdir(directorioRaiz, (err, archivos) => {
        if (err) {
            console.error('Error al leer el directorio:', err);
            return;
        }

        // Iterar sobre cada archivo
        archivos.forEach(archivo => {
            const rutaArchivo = path.join(directorioRaiz, archivo);

            // Verificar si es un archivo
            fs.stat(rutaArchivo, (err, stats) => {
                if (err) {
                    console.error(`Error al obtener información de ${rutaArchivo}:`, err);
                    return;
                }

                if (stats.isFile()) {
                    // Buscar la cadena de texto en el nombre del archivo
                    if (archivo.includes(textoABuscar)) {
                        const nuevoNombre = archivo.replace(textoABuscar, '');
                        const nuevaRutaArchivo = path.join(directorioRaiz, nuevoNombre);

                        // Renombrar el archivo
                        fs.rename(rutaArchivo, nuevaRutaArchivo, err => {
                            if (err) {
                                console.error(`Error al renombrar el archivo ${rutaArchivo}:`, err);
                            } else {
                                console.log(`Se eliminó la cadena de texto '${textoABuscar}' del nombre del archivo ${rutaArchivo}`);
                            }
                        });
                    }
                } else if (stats.isDirectory()) {
                    // Si es un directorio, recurrir de forma recursiva
                    eliminarTextoEnArchivos(rutaArchivo, textoABuscar);
                }
            });
        });
    });
}

// Llamar a la función para eliminar el texto en los nombres de archivos
const directorioRaiz = 'E:/Ariel/Everwood';
const textoABuscar = '[pasateatorrent.com]';
eliminarTextoEnArchivos(directorioRaiz, textoABuscar);
