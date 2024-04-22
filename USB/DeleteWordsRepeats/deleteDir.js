const fs = require('fs');
const path = require('path');

const directorio = 'E:/Japson';
const stringNo = 'This Is';

// Leer los nombres de archivo actuales en el directorio
fs.readdir(directorio, (err, archivos) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    archivos.forEach((archivo) => {
        // Verificar si el archivo comienza con la cadena especificada
        if (archivo.startsWith(stringNo)) {
            // Eliminar la parte inicial de la cadena y obtener el nuevo nombre
            const nuevoNombre = archivo.substring(stringNo.length);
            const rutaAntigua = path.join(directorio, archivo);
            const rutaNueva = path.join(directorio, nuevoNombre);

            // Renombrar el archivo
            fs.rename(rutaAntigua, rutaNueva, (err) => {
                if (err) {
                    console.error(`Error al renombrar ${archivo}:`, err);
                } else {
                    console.log(`${archivo} ha sido renombrado a ${nuevoNombre}`);
                }
            });
        }
    });
});
