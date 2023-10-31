document.addEventListener('DOMContentLoaded', e => { productos() });

const productos = async() => {
    try {
        const res = await fetch('productos.json');
        const data = await res.json();
        const allP = document.querySelectorAll('.productos td');
        allP.forEach((element) => {
            for(let i=0; i<data.length; i++){
            if(data[i].pdt === element.textContent) {
                element.textContent = data[i].nombre.toUpperCase()
                const precio = document.createTextNode(data[i].precio)
                const src = data[i].img;
                const img = document.createElement('img');
                img.setAttribute('src', src);
                img.setAttribute('title', 'Buena elección');
                img.setAttribute('alt', 'Imagen de una prenda o accesorio');
                element.appendChild(img);
                element.appendChild(precio)
            }
        }});
    } catch (error) {
        console.log(error);
    }
}

const logo = document.getElementById('logo');
    logo.addEventListener('click', function(){
        window.open("principal.HTML", "_self");
    })




const allP = () => {
    document.querySelectorAll('.productos td')
    console.log('Hola')
    for(let i=0; i<allP.length; i++){
    if(allP[i].textContent ==='pantalones') window.onload(pantalones.html)
    }
}
    
// allP.addEventListener('click', allP);
    
//Si event.target es igual a la id del producto, le abrimos la página correspondiente
    
const produc = async() => {
    try {
        const res = await fetch("productos.json");
        const dato = res.json();
        return dato;       
    } catch(error){
        console.log(error)
    }
}

const dato = produc().then(dato => {function1(dato)})



const function1 = (dato) => {
    console.log(Object.keys(dato))
    console.log(Object.values(dato))
}