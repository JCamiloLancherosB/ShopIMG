const fs = require('fs');
const path = require('path');

// async function buscarYCopiarCarpetas(directorioOrigen, nombresABuscar, directorioDestino, espacioDisponible) {
//     try {
//         // Recorremos cada género que se quiere buscar
//         for (const genero of nombresABuscar) {
//             // Creamos una carpeta para el género en el directorio de destino
//             const carpetaGenero = path.join(directorioDestino, nombresABuscar[0]); // Utilizamos el nombre del arreglo
//             await fs.promises.mkdir(carpetaGenero, { recursive: true });

//             // Buscamos carpetas que contengan al menos una palabra del género en la lista nombresABuscar
//             const carpetas = await fs.promises.readdir(directorioOrigen, { withFileTypes: true });

//             // Filtramos las carpetas que coinciden con los nombres a buscar
//             for (const carpeta of carpetas) {
//                 if (carpeta.isDirectory()) {
//                     const nombreCarpeta = carpeta.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                     const nombreGenero = genero.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                     if (nombreCarpeta.includes(nombreGenero)) {
//                         // Copiamos la carpeta dentro de la carpeta del género
//                         const origenCarpeta = path.join(directorioOrigen, carpeta.name);
//                         const destinoCarpeta = path.join(carpetaGenero, carpeta.name);
//                         await copiarCarpeta(origenCarpeta, destinoCarpeta, espacioDisponible, espacioDisponible);
//                     }
//                 }
//             }
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
async function buscarYCopiarCarpetas(directorioOrigen, nombresABuscar, directorioDestino, espacioDisponible) {
    try {
        // Recorremos cada género que se quiere buscar
        for (const genero of nombresABuscar) {
            // Creamos una carpeta para el género en el directorio de destino
            const carpetaGenero = path.join(directorioDestino, genero);
            await fs.promises.mkdir(carpetaGenero, { recursive: true });

            // Buscamos carpetas que contengan al menos una palabra del género en la lista nombresABuscar
            const carpetas = await fs.promises.readdir(directorioOrigen, { withFileTypes: true });

            // Filtramos las carpetas que coinciden con los nombres a buscar
            for (const carpeta of carpetas) {
                if (carpeta.isDirectory()) {
                    if (genero === 'merengue') {
                        // Verificar si el nombre de la carpeta está en el array del género merengue
                        if (merengue.includes(carpeta.name)) {
                            const origenCarpeta = path.join(directorioOrigen, carpeta.name);
                            const destinoCarpeta = path.join(carpetaGenero, carpeta.name);
                            await copiarCarpeta(origenCarpeta, destinoCarpeta, espacioDisponible, espacioDisponible);
                        }
                    } else {
                        const nombreCarpeta = carpeta.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        const nombreGenero = genero.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        if (nombreCarpeta.includes(nombreGenero)) {
                            const origenCarpeta = path.join(directorioOrigen, carpeta.name);
                            const destinoCarpeta = path.join(carpetaGenero, carpeta.name);
                            await copiarCarpeta(origenCarpeta, destinoCarpeta, espacioDisponible, espacioDisponible);
                        }
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


async function calcularTamanoCarpeta(ruta) {
    let tamano = 0;
    const archivos = await fs.promises.readdir(ruta, { withFileTypes: true });
    for (const archivo of archivos) {
        const rutaArchivo = path.join(ruta, archivo.name);
        const stats = await fs.promises.stat(rutaArchivo);
        if (archivo.isDirectory()) {
            tamano += await calcularTamanoCarpeta(rutaArchivo);
        } else {
            tamano += stats.size;
        }
    }
    return tamano;
}

// async function copiarCarpeta(origen, destino, espacioCarpeta, espacioTotalDisponible) {
//     try {
//         // Verificar si el destino ya existe, si no, se crea
//         if (!fs.existsSync(destino)) {
//             await fs.promises.mkdir(destino, { recursive: true });
//         }

//         const archivos = await fs.promises.readdir(origen, { withFileTypes: true });
//         let espacioRestante = espacioCarpeta;
//         let espacioAsignado = 0;

//         const carpetas = archivos.filter(archivo => archivo.isDirectory());
//         const archivosNormales = archivos.filter(archivo => !archivo.isDirectory());
//         const espacioPorCarpeta = Math.floor(espacioCarpeta / carpetas.length);

//         for (const archivo of archivosNormales) {
//             const tamanoArchivo = (await fs.promises.stat(path.join(origen, archivo.name))).size;
//             if (espacioRestante >= tamanoArchivo) {
//                 await fs.promises.copyFile(path.join(origen, archivo.name), path.join(destino, archivo.name));
//                 espacioRestante -= tamanoArchivo;
//                 espacioAsignado += tamanoArchivo;
//             }
//         }

//         for (const carpeta of carpetas) {
//             const origenCarpeta = path.join(origen, carpeta.name);
//             const destinoCarpeta = path.join(destino, carpeta.name);
//             const tamanoCarpeta = await calcularTamanoCarpeta(origenCarpeta);
//             const espacioCarpetaActual = Math.min(espacioPorCarpeta, Math.floor((espacioCarpeta / tamanoCarpeta) * espacioTotalDisponible));
//             const espacioCarpetaCopiado = await copiarCarpeta(origenCarpeta, destinoCarpeta, espacioCarpetaActual, espacioTotalDisponible);
//             espacioAsignado += espacioCarpetaCopiado;
//         }

//         console.log(`Carpeta ${origen} copiada con éxito. Espacio asignado: ${espacioAsignado} bytes.`);
//         return espacioAsignado;
//     } catch (error) {
//         console.error(`Error al copiar la carpeta ${origen}:`, error);
//         return 0;
//     }
// }

async function copiarCarpeta(origen, destino, espacioCarpeta, espacioTotalDisponible) {
    try {
        // Verificar si el destino ya existe, si no, se crea
        if (!fs.existsSync(destino)) {
            await fs.promises.mkdir(destino, { recursive: true });
        }

        const archivos = await fs.promises.readdir(origen, { withFileTypes: true });
        let espacioAsignado = 0;
        let espacioPorCarpeta = espacioCarpeta; // Inicialmente, asignamos espacio igual a cada carpeta

        for (const archivo of archivos) {
            const rutaArchivo = path.join(origen, archivo.name);
            const stats = await fs.promises.stat(rutaArchivo);
            if (archivo.isDirectory()) {
                // Copiar subcarpeta
                const tamanoCarpeta = await calcularTamanoCarpeta(rutaArchivo);
                const espacioCarpetaActual = Math.min(espacioPorCarpeta, Math.floor((espacioCarpeta / tamanoCarpeta) * espacioTotalDisponible));
                const espacioCarpetaCopiado = await copiarCarpeta(rutaArchivo, path.join(destino, archivo.name), espacioCarpetaActual, espacioTotalDisponible);
                espacioAsignado += espacioCarpetaCopiado;
                espacioPorCarpeta -= espacioCarpetaActual; // Actualizamos el espacio restante para otras carpetas
            } else {
                // Copiar archivo
                const tamanoArchivo = stats.size;
                if (espacioPorCarpeta >= tamanoArchivo) {
                    await fs.promises.copyFile(rutaArchivo, path.join(destino, archivo.name));
                    espacioAsignado += tamanoArchivo;
                    espacioPorCarpeta -= tamanoArchivo;
                }
            }
        }

        console.log(`Carpeta ${origen} copiada con éxito. Espacio asignado: ${espacioAsignado} bytes.`);
        return espacioAsignado;
    } catch (error) {
        console.error(`Error al copiar la carpeta ${origen}:`, error);
        return 0;
    }
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
        let nombresABuscar = ['salsa', 'vallenato', 'merengue', 'norteña', 'ranchera', 'popular', 'pop', 'rock', 'electronica', 'bailable'];
    
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
        buscarYCopiarCarpetas(directorioOrigen, nombresABuscar, directorioDestino, espacioDisponible);
    } catch (error) {
        console.error('Error al parsear el JSON:', error);
    }
    
});
