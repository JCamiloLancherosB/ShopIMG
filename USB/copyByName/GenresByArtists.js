const fs = require('fs');
const path = require('path');

async function buscarYCopiarCarpetas(directorioOrigen, nombresABuscar, directorioDestino, espacioDisponible) {
    try {
        let artistasNoEncontrados = []; // Arreglo para almacenar los artistas no encontrados

        // Recorremos cada género que se quiere buscar
        for (const genero of nombresABuscar) {
            // Creamos una carpeta para el género en el directorio de destino
            const carpetaGenero = path.join(directorioDestino, genero);
            await fs.promises.mkdir(carpetaGenero, { recursive: true });

            // Buscamos carpetas que contengan al menos una palabra del género en la lista nombresABuscar
            const carpetas = await fs.promises.readdir(directorioOrigen, { withFileTypes: true });

            // Filtramos las carpetas que coinciden con los nombres a buscar
            let archivosEncontrados = false; // Variable para controlar si se encontraron archivos para el artista
            for (const carpeta of carpetas) {
                if (carpeta.isDirectory()) {
                    // Verificamos si la carpeta coincide exactamente con el nombre del género
                    if (carpeta.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === genero) {
                        continue; // Saltamos esta iteración si es una coincidencia directa con el nombre del género
                    }

                    // Verificamos si la carpeta contiene el nombre del género
                    const nombreCarpeta = carpeta.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const nombreGenero = genero.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (nombreCarpeta.includes(nombreGenero)) {
                        archivosEncontrados = true; // Se encontraron archivos para el artista
                        // Copiamos el contenido de la carpeta (artistas) dentro de la carpeta del género
                        const origenCarpeta = path.join(directorioOrigen, carpeta.name);
                        const destinoCarpeta = carpetaGenero; // La carpeta de destino es la carpeta del género
                        const artistasNoEncontradosEnCarpeta = await copiarContenidoCarpeta(origenCarpeta, destinoCarpeta, espacioDisponible);
                        if (artistasNoEncontradosEnCarpeta.length === 0) {
                            // Si no se encontraron archivos para el artista en esta carpeta, agregar al arreglo
                            artistasNoEncontrados.push(carpeta.name);
                        }
                    }
                }
            }

            // Si no se encontraron archivos para el artista en ninguna carpeta, agregar al arreglo
            if (!archivosEncontrados) {
                artistasNoEncontrados.push(genero);
            }
        }

        return artistasNoEncontrados;
    } catch (error) {
        console.error('Error:', error);
        return []; // En caso de error, devolvemos un arreglo vacío
    }
}


async function copiarContenidoCarpeta(origen, destino, espacioDisponible) {
    try {
        // Obtener el listado de archivos y carpetas en el origen
        const archivos = await fs.promises.readdir(origen, { withFileTypes: true });

        // Verificar si hay archivos o carpetas en el origen
        if (archivos.length === 0) {
            console.error(`La carpeta de origen "${origen}" está vacía.`);
            return [];
        }

        let artistasNoEncontradosEnCarpeta = [];

        // Copiar archivos y carpetas dentro de la carpeta de destino
        for (const archivo of archivos) {
            const rutaOrigen = path.join(origen, archivo.name);

            // Verificar si el nombre del archivo contiene caracteres no legibles
            // if (!isReadable(archivo.name)) {
            //     console.log(`No se puede copiar el archivo ${rutaOrigen} porque contiene caracteres no legibles.`);
            //     artistasNoEncontradosEnCarpeta.push(archivo.name);
            //     continue;
            // }

            const rutaDestino = path.join(destino, archivo.name);

            if (archivo.isDirectory()) {
                // Si es una carpeta, copiamos su contenido recursivamente
                const subArtistasNoEncontrados = await copiarContenidoCarpeta(rutaOrigen, rutaDestino, espacioDisponible);
                artistasNoEncontradosEnCarpeta = artistasNoEncontradosEnCarpeta.concat(subArtistasNoEncontrados);
            } else {
                // Si es un archivo, lo copiamos
                try {
                    await fs.promises.copyFile(rutaOrigen, rutaDestino);
                } catch (error) {
                    console.error(`Error al copiar el archivo ${rutaOrigen}:`, error);
                    artistasNoEncontradosEnCarpeta.push(archivo.name);
                }
            }
        }

        return artistasNoEncontradosEnCarpeta;
    } catch (error) {
        console.error(`Error al copiar el contenido de la carpeta ${origen} a ${destino}:`, error);
        return [];
    }
}

// Función para verificar si un nombre de archivo contiene caracteres no legibles
function isReadable(name) {
    const pattern = /^[a-zA-Z0-9\s.-]+$/; // Expresión regular para caracteres legibles
    return pattern.test(name);
}

// Ruta al archivo JSON y sus géneros
const rutaArchivoJSON = '../copyByGenre/genres.json';
let salsa;
let rock;
let electronica;
let pop;
let merengue;
let norteñas;
let rancheras;
let popular;

// Leer el contenido del archivo JSON
fs.readFile(rutaArchivoJSON, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo JSON:', err);
        return;
    }

    try {
        const genres = ['salsa', 'vallenato', 'merengue', 'norteña', 'ranchera', 'popular', 'pop', 'rock', 'electronica', 'llanera', 'pa planchar', 'bailable']
        // Parsear el contenido del archivo como JSON
        const datosJSON = JSON.parse(data);
        // Funciona correctamente, hace falta crear la nueva carpeta con el nombre del genero (pruebas) y dentro de esa carpeta copiar todas las otras carpetas que coincidan con los nombres dentro del arreglo perteneciente a 'pruebas'
        let nombresABuscar = ['salsa', 'vallenato', 'merengue', 'norteña', 'ranchera', 'popular', 'pop', 'electronica', 'llanera', 'bailable'];
    
        // Asignar los datos a las variables
        salsa = datosJSON.salsa;
        rock = datosJSON.rock;
        pop = datosJSON.pop;
        electronica = datosJSON.electronica;
        merengue = datosJSON.merengue;
        norteñas = datosJSON.norteñas;
        rancheras = datosJSON.rancheras;
        popular = datosJSON.popular;
    
        // Modify nombresABuscar to include artists from the pruebas category
        for(let i = 0; i < genres.length; i++) {
            if (nombresABuscar.includes(genres[i])) {
                // If a genre from the 'genres' array is found in 'nombresABuscar',
                // append the artists of that genre to 'nombresABuscar'
                nombresABuscar = nombresABuscar.concat(datosJSON[genres[i]]);
            }
        }
    
        // Llamamos a la función para buscar y copiar las carpetas
        const directorioOrigen = 'E:\\MP3';
        const directorioDestino = 'G:\\';
        const espacioDisponible = 28000000000; // Espacio disponible en bytes
        buscarYCopiarCarpetas(directorioOrigen, nombresABuscar, directorioDestino, espacioDisponible)
            .then(artistasNoEncontrados => {
                console.log('Artistas no encontrados:', artistasNoEncontrados);
            })
            .catch(error => {
                console.error('Error al buscar y copiar carpetas:', error);
            });
    } catch (error) {
        console.error('Error al parsear el JSON:', error);
    }
    
});
