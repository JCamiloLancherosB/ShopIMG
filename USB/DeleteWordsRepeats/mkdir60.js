/* -Empezar a recorrer los archivos de un directorio, crear una nueva carpeta (génerica cambiando por número) e ir 
agregando cada archivo que se recorrió a esta nueva carpeta, hacer esto con todos los archivos hasta llegar al archivo
número 60, si llega al 60 creamos una nueva carpeta y continuamos el mismo bucle con los demás archivos hasta que todos
hayan quedado en sus respectivas carpetas. */
import rename from 'C:/Users/Camilo/Desktop/Workspace/DeleteWordsRepeats/movedir'

const fs = require('fs');
const path = require('path');

const directorio = 'C:/Users/Camilo/Desktop/TXT';

fs.readdir(directorio, (err, archivos) => {
    fs.mkdir(directorio, (err) => {
        if(err) {
            console.log('No fue posible crear el nuevo directorio.');
            return;
        }
        else console.log('Directorio creado con éxito')
    })
})