// const fs = require('fs');
// const readline = require('readline');

// // Array con los nombres de las carpetas que quieres verificar
// const nombresCarpetas = ["Artistas", "Anthony Zambrano", "Yessi Uribe", "Vicente Fernández", "Antonio Aguilar", "Darío Gómez", "Yeison Giménez", "John Alex castaño", "Jony Rivera", "Fernando Burbano", "José mogollón",
//     "Luis Alberto Posada", "charrito negro", "Arelis henao", "Juan Carlos Zarabanda", "Alam Ramírez", "Fredy Burbano", "Luis Alfonso", "Luisito Muñoz", "cari leon", "Julio Miranda", "Ricardo Arjona", "franco de Vita",
//     "Camilo sesto", "Bukis", "José José", "Rocío Dúrcal", "Roberto Carlos", "Juan Gabriel", "Marisela", "Pandora", "Raúl Santi", "gali Galeano", "Johan Sebastián", "Ana Gabriel", "inquietos", "diablitos", "Miguel Morales",
//     "Diomedes Díaz", "silvestre Dangond", "binomio", "gigantes", "Miguel moli", "Roberto Antonio", "banda fiesta", "Tupamaros", "la línea", "rica arena", "Wilfredo Vargas", "melódicos", "Guayacán", "Niche", "fruco", 
//     "Jerry Rivera", "Franky Ruiz", "Eddi Santiago", "don Omar", "DJ Mario", "wish y Yandel", "Ozuna", "daddy yankee", "los tigres del norte", "rayos", "Uriel henao", "tucanes", "hermanos Ariza", "calibre 50", 
//     "grupo exterminador"];

// // Función para verificar si existe una carpeta
// function verificarCarpeta(nombreCarpeta) {
//     return new Promise((resolve, reject) => {
//         fs.access(nombreCarpeta, fs.constants.F_OK, (err) => {
//             if (err) {
//                 resolve(false); // La carpeta no existe
//             } else {
//                 resolve(true); // La carpeta existe
//             }
//         });
//     });
// }

// // Función para escribir en el archivo de texto
// function escribirArchivo(nombresFaltantes) {
//     fs.writeFile('carpetas_faltantes.txt', nombresFaltantes.join('\n'), (err) => {
//         if (err) {
//             console.error('Error al escribir en el archivo:', err);
//         } else {
//             console.log('Archivo "carpetas_faltantes.txt" creado con éxito.');
//         }
//     });
// }

// async function main() {
//     const nombresFaltantes = [];

//     // Verificar cada carpeta
//     for (const nombreCarpeta of nombresCarpetas) {
//         const existe = await verificarCarpeta(nombreCarpeta);
//         if (!existe) {
//             nombresFaltantes.push(nombreCarpeta);
//         }
//     }

//     // Si hay carpetas faltantes, escribir en el archivo
//     if (nombresFaltantes.length > 0) {
//         escribirArchivo(nombresFaltantes);
//     } else {
//         console.log('Todas las carpetas fueron encontradas.');
//     }
// }

// main();


const fs = require('fs');
const path = require('path');

const nombresCarpetas = ["Artistas", "Anthony Zambrano", "Yessi Uribe", "Vicente Fernández", "Antonio Aguilar", "Darío Gómez", "Yeison Giménez", "John Alex castaño", "Jony Rivera", "Fernando Burbano", "José mogollón",
    "Luis Alberto Posada", "charrito negro", "Arelis henao", "Juan Carlos Zarabanda", "Alam Ramírez", "Fredy Burbano", "Luis Alfonso", "Luisito Muñoz", "cari leon", "Julio Miranda", "Ricardo Arjona", "franco de Vita",
    "Camilo sesto", "Bukis", "José José", "Rocío Dúrcal", "Roberto Carlos", "Juan Gabriel", "Marisela", "Pandora", "Raúl Santi", "gali Galeano", "Johan Sebastián", "Ana Gabriel", "inquietos", "diablitos", "Miguel Morales",
    "Diomedes Díaz", "silvestre Dangond", "binomio", "gigantes", "Miguel moli", "Roberto Antonio", "banda fiesta", "Tupamaros", "la línea", "rica arena", "Wilfredo Vargas", "melódicos", "Guayacán", "Niche", "fruco", 
    "Jerry Rivera", "Franky Ruiz", "Eddi Santiago", "don Omar", "DJ Mario", "wish y Yandel", "Ozuna", "daddy yankee", "los tigres del norte", "rayos", "Uriel henao", "tucanes", "hermanos Ariza", "calibre 50", 
    "grupo exterminador"];
const directorio = 'E:/MP4'; // Ruta del directorio a verificar

function verificarCarpeta(rutaCompleta) {
    return new Promise((resolve, reject) => {
        fs.access(rutaCompleta, fs.constants.F_OK, (err) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

function escribirArchivo(nombresFaltantes) {
    fs.writeFile('carpetas_faltantes.txt', nombresFaltantes.join('\n'), (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
        } else {
            console.log('Archivo "carpetas_faltantes.txt" creado con éxito.');
        }
    });
}

async function main() {
    const nombresFaltantes = [];

    for (const nombreCarpeta of nombresCarpetas) {
        const rutaCarpeta = path.join(directorio, nombreCarpeta);
        const encontrado = await verificarCarpeta(rutaCarpeta);
        if (!encontrado) {
            nombresFaltantes.push(nombreCarpeta);
        }
    }

    if (nombresFaltantes.length > 0) {
        escribirArchivo(nombresFaltantes);
    } else {
        console.log('Todas las carpetas fueron encontradas.');
    }
}

main();
