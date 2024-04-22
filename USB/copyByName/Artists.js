const fs = require('fs');
const path = require('path');

async function buscarYCopiarCarpetas(directorioOrigen, nombresABuscar, directorioDestino, espacioDisponible) {
    try {

        // Buscamos carpetas que contengan al menos una palabra de la lista nombresABuscar
        const carpetas = await fs.promises.readdir(directorioOrigen, { withFileTypes: true });
        let carpetasCoincidentes = [];

        // Filtramos las carpetas que coinciden con los nombres a buscar
        for (const carpeta of carpetas) {
            if (carpeta.isDirectory()) {
                const nombreCarpeta = carpeta.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                for (const nombre of nombresABuscar) {
                    const nombreComparar = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (nombreCarpeta.includes(nombreComparar)) {
                        carpetasCoincidentes.push(path.join(directorioOrigen, carpeta.name));
                        break;
                    }
                }
            }
        }

        // Calculamos el tamaño total de todas las carpetas coincidentes
        let tamanoTotal = 0;
        for (const carpeta of carpetasCoincidentes) {
            tamanoTotal += await calcularTamanoCarpeta(carpeta);
        }

        // Copiamos cada carpeta, asignándole un espacio proporcional
        for (const carpeta of carpetasCoincidentes) {
            const tamanoCarpeta = await calcularTamanoCarpeta(carpeta);
            const espacioCarpeta = Math.floor((tamanoCarpeta / tamanoTotal) * espacioDisponible);
            await copiarCarpeta(carpeta, path.join(directorioDestino, path.basename(carpeta)), espacioCarpeta, espacioDisponible);
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

async function copiarCarpeta(origen, destino, espacioCarpeta, espacioTotalDisponible) {
    try {
        await fs.promises.mkdir(destino, { recursive: true });
        const archivos = await fs.promises.readdir(origen, { withFileTypes: true });
        let espacioRestante = espacioCarpeta;
        let espacioAsignado = 0;
        for (const archivo of archivos) {
            const origenArchivo = path.join(origen, archivo.name);
            const destinoArchivo = path.join(destino, archivo.name);
            const stats = await fs.promises.stat(origenArchivo);
            if (archivo.isDirectory()) {
                const tamanoCarpeta = await calcularTamanoCarpeta(origenArchivo);
                const espacioCarpeta = Math.min(espacioRestante, tamanoCarpeta);
                const espacioPorArchivo = Math.floor((espacioCarpeta / tamanoCarpeta) * espacioTotalDisponible);
                await copiarCarpeta(origenArchivo, destinoArchivo, espacioPorArchivo, espacioTotalDisponible);
                espacioRestante -= espacioCarpeta;
            } else {
                const tamanoArchivo = stats.size;
                if (espacioRestante >= tamanoArchivo) {
                    await fs.promises.copyFile(origenArchivo, destinoArchivo);
                    espacioRestante -= tamanoArchivo;
                    espacioAsignado += tamanoArchivo;
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

// Uso
const directorioOrigen = 'E:\\MP3';
const nombresABuscar = ['Vicente Fernandez', 'El caballero gaucho', 'Romulo Caicedo', 'Dario Gomez', 'Charrito negro', 'Luis Alberto Posada', 'Los tigres del norte', 'Anthony Zambrano', 'Antonio Aguilar', 'Pedro Fernandez', 'Galy Galiano', 'Dany Moreno', 'Oscar Agudelo', 'orlando contreras', 'Jessi uribe', 'Las heremanasa calle', 'Arelys Henao', 'Angelica Maria', 'Ana Gabriel', 'Los rayos', 'Los hermanos Ariza', 'El rilcario', 'las estrellas', 'las mirlas', 'Alzate', 'El chico jaramillo', 'javier solis', 'Alejandro fernandez', 'Paola jara', 'Pipe bueno', 'Cornelio reina', 'Cuco sanchez', 'Yolanda del rio', 'Jenni Rivera', 'Julio Jaramillo', 'Yovanny Ayala', 'Paquita la del barrio', 'Uriel henao', 'Los bacanes del sur', 'Leo dan', 'Raul Santi', 'Rodolfo Icardi', 'Jose jose', 'Helio Roca', 'Rocio durcal', 'Roberto carlos', 'Jose luis perales', 'Marbelle', 'Nino bravo', 'Francy', 'Franco de vita', 'Diango', 'Amanda miguel', 'Alejandro guzman', 'los carnales', 'feid', 'karol g', 'raw alejandro', 'shakira', 'young miko', 'grupo firme', 'grupo frontera', 'fuerzaa regida', 'ozuna', 'anuel', 'maluma', 'blessed', 'manuel turizo', 'xavi', 'hadrian', 'bad bunny', 'bizarrap', 'la banda', 'nicky nicole', 'santa fe clan', 'yandel', 'daddy yankee', 'j balvin', 'fredy burbano', 'francisco gomez', 'el gato negro', 'charrito negro', 'los dos carnales', 'los rayos', 'los patricks', 'uiky', 'los inquietos', 'otto serge', 'los chiches', 'los diablitos', 'fernando burbano', 'el andariego', 'sebastian ayala', 'jose rueda', 'yeison jimenez', 'olider', 'grupo miramar', 'jose luis ortua', 'hernan gomez', 'pastro lopez', 'grupo san miguelito', 'guayaba orquesta', 'las chicas del can', 'las diosas del vallenato', 'los 50 de joselito', 'llanera', 'trovas llaneras', 'trovas antioqueñas', 'baladas', 'boleros', 'ranchera', 'norteña', 'tropical', 'vallenato', 'folclore'];
const directorioDestino = 'F:\\';
const espacioDisponible = 10000000000; // Espacio disponible en bytes

buscarYCopiarCarpetas(directorioOrigen, nombresABuscar, directorioDestino, espacioDisponible);
