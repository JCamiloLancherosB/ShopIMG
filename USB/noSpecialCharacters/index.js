const fs = require('fs');
const path = require('path');

const directorioOrigen = 'E:\\MP3'; // Directorio de origen

try {
    const archivos = fs.readdirSync(directorioOrigen);

    archivos.forEach(archivo => {
        const rutaArchivo = path.join(directorioOrigen, archivo);

        // Verificar si el archivo existe
        try {
            const stats = fs.statSync(rutaArchivo);

            if (stats.isFile()) {
                // Renombrar el archivo eliminando caracteres especiales
                const nuevoNombre = archivo
                    .normalize("NFD") // Normalizar caracteres Unicode (quitar diacríticos y descomposición)
                    .replace(/[\u0300-\u036f]/g, '') // Reemplazar diacríticos
                    .replace(/[^\w\d]/g, '') // Eliminar caracteres que no sean alfanuméricos
                    .replace(/ñ/g, 'n') // Reemplazar ñ por n
                    .replace(/[-]/g, '') // Elimina guiones
                    .replace(/[']/g, '') // Elimina guiones
                    .replace(/\\[\\]/g, '') // Elimina corchetes
                    .replace(/[^a-zA-Z0-9]/g, ''); // Eliminar caracteres que no sean alfanuméricos

                const nuevaRutaArchivo = path.join(directorioOrigen, nuevoNombre);

                if (nuevoNombre !== archivo) {
                    fs.renameSync(rutaArchivo, nuevaRutaArchivo);
                    console.log(`Archivo ${rutaArchivo} renombrado a ${nuevaRutaArchivo}`);
                }
            }
        } catch (err) {
            console.error(`Error al obtener información sobre el archivo ${archivo}:`, err);
        }
    });
} catch (err) {
    console.error('Error al leer el directorio:', err);
}
