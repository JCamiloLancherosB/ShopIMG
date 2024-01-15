// Crear una lista de todas las canciones, pasar los nombres a un archivo txt y preguntar que canciones son repetidas (buscar coincidencias entre los nombres), luego se eliminarian. 
// ¿Qué hacer para eliminar las canciones repetidas? ¿De que manera lograrlo? R= Buscar el nombre en string y concatenar los números que indican que una canción se está repitiendo, ej:
// (1), (2), (3), etc.

// Método 1: Usar OCR con el nombre de todas las canciones (tomar el pantallazo viendo los iconos pequeños).
// Método 1: Manipulando el sistema operativo con Node.js o con cualquier otro lenguaje.

// Realizar método uno y una vez completado aprender Node.js, luego intentarlo accediendo a las carpetas del sistema operativo con Node.js.

//Preguntar si hay algún nombre igual al de algún otro nombre, crearía un bucle que organice en orden del abecedario y me devuelva los nombres en un array, (((voy preguntando de a 3 o 4 (según sea necesario))))
//Si elimino el segundo repetido me quedarían el 1 y 3, volver a preguntar con uno y si es identico al siguiente seguir eliminando hasta que no sean identicos entonces el 1 pasaría a ser el siguiente nombre dentro 
//del array (1 mas una posición adelante)

//Problema 1: Pueden haber canciones repetidas pero el primer algoritmo no lo detectaría si primero que la canción estuviera el nombre del artista, recursión --- las primeras tres letras de una palabra (comparador1)
//con las otras 3 letras de la otra palabra (comparador2) si son iguales preguntar con las otras tres letras de los dos a comparar, es decir, concatenar el primer grupo de tres letras con el segundo grupo de tres 
//letras y volver a preguntar, si coinciden eliminar el comparador en segunda posición repetido y seguir con el bucle inicial, (si eliminamos el 2 comparamos nuevamente el 1 con el siguiente (+1) hasta que no sean
//iguales)

//Esto también se podría implementar para usar con cualquier otro dato (productos con la página de ropa por ejemplo)
//Para esto no se debería señalar un archivo en especifico (como los nombres solamente), mas bien crear la función con variables que reciban cualquier tipo de dato (datos disponibles: nombres de productos en un 
//archivo JSON y un archivo TXT, para un archivo JSON se debe iterar sobre un objeto, y con el archivo TXT se pueden utilizar los elementos directamente con un array o (como manipular un archivo TXT desde visual 
//studio hacia mi archivo js?)) crear de alguna manera un algoritmo que ponga todos los nombres en un array. (buscar otras maneras)


//Si se lee de a tres grupos de letras eliminaría todas las canciones de un cantante pero solo dejaría una canción, porque el nombre del artista siempre va a coincidir dejando solamente una canción ENCONTRAR LA 
//SOLUCION Y APRENDER Node.js