// document.addEventListener('DOMContentLoaded', e => { productos() });

// const productos = async() => {
//     try {
//         const res = await fetch('productos.json');
//         const data = await res.json();
//         const allP = document.querySelectorAll('.productos td');
//         allP.forEach((element) => {
//             for(let i=0; i<data.length; i++){
//             if(data[i].pdt === element.textContent) {
//                 element.textContent = data[i].nombre.toUpperCase()
//                 const precio = document.createTextNode(data[i].precio)
//                 const src = data[i].img;
//                 const img = document.createElement('img');
//                 img.setAttribute('src', src);
//                 img.setAttribute('title', 'Buena elección');
//                 img.setAttribute('alt', 'Imagen de una prenda o accesorio');
//                 element.appendChild(img);
//                 element.appendChild(precio)
//             }
//         }});
//     } catch (error) {
//         console.log(error);
//     }
// }

// const logo = document.getElementById('logo');
//     logo.addEventListener('click', function(){
//         window.open("principal.HTML", "_self");
//     })




// const allP = () => {
//     document.querySelectorAll('.productos td')
//     console.log('Hola')
//     for(let i=0; i<allP.length; i++){
//     if(allP[i].textContent ==='pantalones') window.onload(pantalones.html)
//     }
// }
    
// // allP.addEventListener('click', allP);
    
// //Si event.target es igual a la id del producto, le abrimos la página correspondiente
    
// const produc = async() => {
//     try {
//         const res = await fetch("productos.json");
//         const dato = res.json();
//         return dato;       
//     } catch(error){
//         console.log(error)
//     }
// }

// const dato = produc().then(dato => {function1(dato)})



// const function1 = (dato) => {
//     console.log(Object.keys(dato))
//     console.log(Object.values(dato))
// }



//Crear un objeto que reciba de keys camisas, camisetas, pantalones, chaquetas, zapatos, dentro de cada uno pondremos una categoria que especifique que es para hombre/mujer/niño/niña/bebé
//Puedo crear un array que tenga como elementos pantalones, camisas, sombreros, chaquetas, abrigos, zapatos, sudaderas, camisetas, bermudas, relojes, guantes, joyeria > collares, accesorio mas, bufanda, cartera, anillos, gafas, pulseras


const productos = ["pantalones", "camisas", "sombreros", "chaquetas", "abrigos", "zapatos", "sudaderas", "camisetas", "bermudas", "relojes", "guantes", "joyeria", "collares", "gorras", "bufanda", "cartera", "anillos", "gafas", "pulseras"]
const productosObj = {};

productos.forEach(element => {
    //Para cada producto disponibles le ponemos los dos generos y caracteristicas globales.
    productosObj[element] = {"hombre": {"color": 0, "material": 0, "precio": 0, "disponibles": 0}, "mujer": {"color": 0, "material": 0, "precio": 0, "disponibles": 0}}
    //Las referencias van por individual, no podría incluirlas directamente en el primer objeto //, "ref": 10044
})

console.log(productosObj)

//Si la key del objeto tiene como nombre pantalones, a cada value dentro del objeto pantalón (Que sería "hombre" "mujer") le vamos a añadir los values faltantes (las especificaciones correspondientes, como tela, tubo, color )
//pantalones > obj > hombre, mujer > a cada uno añadir tubo, tela, 
//Hacer esto por cada producto separado dependiendo del tipo que sea 

const keys = Object.keys(productosObj);

for(let i=0; i<keys.length; i++) {
    if(keys[i] === "pantalones") {
         //Si es de tipo de pantalón, tendría que clasificar todos los tipos de pantalones y luego de esto preguntar por cada grupo de pantalones
        productosObj[keys[i]].hombre.bota = 'Largo';
        productosObj[keys[i]].hombre.tallas = '28 A 34';
        productosObj[keys[i]].mujer.bota = 'Largo';
        productosObj[keys[i]].mujer.tallas = '28 A 34';
        console.log(productosObj[keys[i]])
    }
}
console.log(productosObj)
for(let element in productosObj) {
    console.log(element)
}

const datos = async() => {
    try {
        const pantalones = await fetch("../JSON/pantalones.json");
        const pant = await pantalones.json();
        return pant
    } catch (error) {
        console.log(error);
    }

}
