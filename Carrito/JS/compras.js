document.addEventListener("DOMContentLoaded", () => {produc()});
// import {valor} from "./modules.js";
// console.log(valor)
let dato

const produc = async() => {
    try {
        const res = await fetch("../JSON/productos.json");
        dato = await res.json();
        return dato;
    } catch(error){
        console.log(error)
    }
}

// console.time("Contador");
produc().then(dato => {
    productos(dato);
    push(dato);
});
// console.timeEnd("Contador");
const btnLupa = document.getElementById("btn-search"), lupa = document.getElementById("lupa"), buscador = document.getElementById("buscador"), lupaImg = document.querySelector("#lupa img"), barra = document.getElementById("bar-search"); 
const seleccion = document.getElementById("selecciona"), listaProd = document.querySelector("#selecciona ul");
const nombres = [], pdt = [];
const desDer = document.getElementsByClassName("desDer");
const complementar = document.getElementById("complementar");
const fragmentoAcc = document.createDocumentFragment(), fragmentoProd = document.createDocumentFragment();
const opac = document.body.firstChild, opacImg = document.querySelector("#opac img");
const botonesOver = document.getElementsByClassName("overlay");
const lat = document.getElementById("barLat"), seeingOne = document.getElementById("seeing");
let counterBtn1 = 0;

function removeAttributes(element, attribute) {
    const atributos = element.attributes;

    for(let i = atributos.length - 1; i >= 0; i--) {
        if(atributos[i].nodeName === attribute) element.removeAttribute(attribute);
    }    

}

const creaTd = (elementos, fragmento) => { //Crea los productos de las tablas, adjuntando imagenes, precios, botones de visualizar, favorito... También añade la función de overlay cuando se hace clic sobre botón de visualizar imagen en grande
    const td = document.createElement("td"), img = document.createElement("img"), div = document.createElement("div"), name = document.createElement("span");
    const name2 = document.createTextNode(elementos.nombre.toUpperCase());
    name.appendChild(name2);
    name.setAttribute("class", "name");
    td.appendChild(name);
    // td.textContent = elementos.nombre.toUpperCase();
    const precio = document.createTextNode(elementos.precio), precio2 = document.createElement("span");
    precio2.setAttribute("class", "precio");
    precio2.appendChild(precio);
    td.appendChild(precio2);
    // const src = elementos.img;
    img.setAttribute("src", elementos.img);
    console.log("la dirección es: " + elementos.img)
    img.setAttribute("alt", "Imagen de una prenda o un accesorio");
    const divBtn = document.createElement("div"), boton1 = document.createElement("button"), boton2 = document.createElement("button"), boton3 = document.createElement("button"), boton4 = document.createElement("button");
    boton1.setAttribute("class", "btnView");
    boton2.setAttribute("class", "btnDetails");
    boton3.setAttribute("class", "btnCart");
    boton4.setAttribute("class", "btnFavorite");
    const img1 = document.createElement("img"), img2 = document.createElement("img"), img3 = document.createElement("img"), img4 = document.createElement("img");
    img1.setAttribute("src", "../IMGSFirst/expandir2.png");
    img1.setAttribute("title", "View");
    img2.setAttribute("src", "../IMGSFirst/details.png");
    img2.setAttribute("title", "View Details");
    img3.setAttribute("src", "../IMGSFirst/carrito2.png");
    img3.setAttribute("title", "Add to cart");
    img4.setAttribute("src", "../IMGSFirst/favorite.png");
    img4.setAttribute("title", "Add to favorites");
    divBtn.setAttribute("class", "divBtn");
    boton1.appendChild(img1);
    boton2.appendChild(img2);
    boton3.appendChild(img3);
    boton4.appendChild(img4);
    divBtn.appendChild(boton1);
    divBtn.appendChild(boton2);
    divBtn.appendChild(boton3);
    divBtn.appendChild(boton4);    
    div.setAttribute("class", "overlay");
    div.setAttribute("title", elementos.nombre.toUpperCase());
    divBtn.style.visibility = "hidden";
    td.appendChild(divBtn);
    td.appendChild(div);
    td.appendChild(img);
    td.addEventListener("click", function(e){open(`../HTML/ProdyAcc/${elementos.nombre}.html`, "_blank");});
    td.addEventListener("mouseover", function(){
        enfocado(img, div);
        divBtn.style.visibility = "visible";
    });
    td.addEventListener("mouseout", function(){desenfocado(img, div)
        divBtn.style.visibility = "hidden";
    });
    boton1.addEventListener("click", function(e) {
        e.stopPropagation();

        //Eliminamos todos los atributos del <section> que vamos a reutilizar, haremos esto cada vez que lo necesitemos, para agregar la nueva información sin necesidad de utilizar 
        //nuevos contenedores, opac podría tener el atributo style para que aparezca opaca la pantalla y enfocada la información que queremos destacar.
        removeAttributes(opac, "id");
        removeAttributes(opac, "class");
        
        // if(!opac.getAttribute("id")) { //YA NO ES NECESARIO UTILIZAR ESTE IF YA QUE SIEMPRE QUE EJECUTEMOS LA FUNCIÓN NO TENDRÁ NINGÚN ATRIBUTO ID O CLASS O CUALQUIER OTRO QUE PONGAMOS EN LA FUNCION REMOVEATTRIBUTES
        // const div = document.createElement("div");
        const img = document.createElement("img");
        const pa = boton1.parentNode.parentNode.lastChild.getAttribute("src");
        // div.setAttribute("class", "");
        img.setAttribute("src", pa);
        img.setAttribute("id", "overlapping");
        // img.style.transition = "transform: scale(1.4)"
        opac.setAttribute("id", "opacoE");
        if(counterBtn1 === 0) {
        document.body.appendChild(img);
        counterBtn1 = 1;
        }
    // }

    if(opac.getAttribute("id")) {
        const pa = boton1.parentNode.parentNode.lastChild.getAttribute("src");
        document.getElementById("overlapping").setAttribute("src", pa);
    }
        // img.style = "height: 400px; width: 400px; position: absolute; top: 50%; z-index: 3;" //Imagen que se debe eliminar con opacoE PARA AÑADIR LA IMAGEN TOMAR EL ID OPACO y ponerle opacoE, a opacoE añadirle la img
        //La idea es que solo tenga que eliminar el id opacoE y con eso se elimine también la imagen linea 344, si hacemos clic en cualquier parte de la ventana que no sea la imagen eliminamos el id a la section de
        //fondo y eliminamos la img hija que contiene, para solucionar que section tiene muchos hijos, deberemos crear un nuevo div donde vamos a meter la imagen que se visualizara en grande y en el centro de la ventana
        //y eliminar ese div que identificaremos de alguna manera, con clase o de alguna otra
        // opac.appendChild(div);
        // img.style.transform = "scale(1.5)"
        // img.style.objectFit = "none"
    });

    boton2.addEventListener("click", function(e) {
        e.stopPropagation();
        
        seeingOne.setAttribute("style", "visibility: visible");
        //Eliminamos todos los atributos del <section> que vamos a reutilizar, haremos esto cada vez que lo necesitemos, para agregar la nueva información sin necesidad de utilizar 
        //nuevos contenedores, opac podría tener el atributo style para que aparezca opaca la pantalla y enfocada la información que queremos destacar.
        removeAttributes(opac, "id");
        removeAttributes(opac, "class");
        //Luego de eliminar cualquier atributo de identificación debemos añadir el propio del botón para controlar las nuevas funciones que le vamos a asignar y la imagen que va a tener, en este caso, el nuevo orden
        //que tendrá el recuadro

        //ADEMÁS AÑADIR FUNCIÓN QUE SI SE TOCA CUALQUIER PARTE DE LA PANTALLA MENOS "OPAC" DEBEMOS VOLVER A LLAMAR A LA FUNCIÓN REMOVEATTRIBUTES(OPAC) PARA DEJAR OPAC LIBRE PARA USAR

        const contSeeing = document.getElementById("contImgS"), hermanos = e.target.parentNode.parentNode.parentNode.childNodes, img = document.createElement("img"); //img = seeingOne.firstChild.firstChild, ;
        
        for(let i=0; i<hermanos.length; i++) {
            if(hermanos[i].nodeName.toLowerCase() === "img") {                                
                const src = hermanos[i].getAttribute("src"); //Tomamos la url de la imagen para copiarla en el nuevo recuadro
                img.setAttribute("src", src);                
                //Creamos el recuadro a la izquierda, en este inicialmente pondremos la imagen en un tamaño reducido con todos sus detalles técnicos debajo. También crearemos botón para añadir al carrito de compras,
                //botón para cerrar el recuadro, (¿y debajo de la imagen tendremos el botón para añadir a favoritos?)

                //Si no se encuentra entre los hijos
                // if(existe === 0){
                //     const div = document.createElement("div");
                //     div.setAttribute("class", "seeing");
                //     div.setAttribute("style", "visibility: visible");
                //     document.body.appendChild(div);
                //     existe = 1;
                // }
            }
        }
        img.setAttribute("id", "imgSeeing");
        contImgS.appendChild(img);
    });
    boton3.addEventListener("click", function(e){e.stopPropagation();});
    boton4.addEventListener("click", function(e){e.stopPropagation();});
    boton4.addEventListener("mouseover", function(e){img4.src = "../IMGSFirst/favorite3.png"});
    boton4.addEventListener("mouseout", function(e){img4.src = "../IMGSFirst/favorite.png"});
    fragmento.appendChild(td);
}

const productos = (dato) => {
    const arreglo = dato.Productos; 
    // const allP = document.createElement("TD");
    // // for(let i=0; i)
    // const titulos = document.querySelectorAll(".productos th")
    // // allP.forEach(element => {
        for(let i=0; i<arreglo.length; i++){
            // const td = document.createElement("td");
            // td.textContent = arreglo[i].pdt;
            // console.log(arreglo[i].document.createElement("TD"))
            // if(arreglo[i].pdt === element.textContent){
                // element.textContent = "";
                if(arreglo[i].pdt.startsWith("Pr")) {
                    creaTd(arreglo[i], fragmentoProd)
                // td.textContent = arreglo[i].nombre.toUpperCase();
                // const precio2 = document.createElement("span");
                // const precio = document.createTextNode(arreglo[i].precio);
                // precio2.setAttribute("class", "precio");
                // precio2.appendChild(precio);
                // td.appendChild(precio2);
                // const img = document.createElement("img");
                // // const src = arreglo[i].img;
                // img.setAttribute("src", arreglo[i].img);
                // img.setAttribute("alt", "Imagen de una prenda o un accesorio");
                // const div = document.createElement("div");
                // const boton1 = document.createElement("button");
                // const boton2 = document.createElement("button");
                // const boton3 = document.createElement("button");
                // const boton4 = document.createElement("button");
                // boton1.setAttribute("class", "btnView"); //Este va con una imagen de expandir la imagen, ver en grande 
                // boton2.setAttribute("class", "btnDetails"); //Este va con una imagen de ver los detalles del producto
                // boton3.setAttribute("class", "btnCar"); //Este va con una imagen de agregar el producto seleccionado al carrito
                // boton4.setAttribute("class", "btnFavorite"); //Este va con una imagen de añadir el producto a la sección de favoritos 
                // div.appendChild(boton1);
                // div.appendChild(boton2);
                // div.appendChild(boton3);
                // div.appendChild(boton4);
                // div.setAttribute("class", "overlay");
                // div.setAttribute("title", arreglo[i].nombre.toUpperCase());
                // td.appendChild(div);
                // td.appendChild(img);
                // td.addEventListener("click", function(){open(`./ProdyAcc/${arreglo[i].nombre}.html`, "_blank")});
                // td.addEventListener("mouseover", function(){enfocado(img, div)});
                // td.addEventListener("mouseout", function(){desenfocado(img, div)});
                // console.log(td)
                // fragmentoProd.appendChild(td)
                }

                if(arreglo[i].pdt.startsWith("Acc")) {
                    creaTd(arreglo[i], fragmentoAcc)
                // td.textContent = arreglo[i].nombre.toUpperCase();
                // const precio2 = document.createElement("span");
                // const precio = document.createTextNode(arreglo[i].precio);
                // precio2.setAttribute("class", "precio");
                // precio2.appendChild(precio);
                // td.appendChild(precio2);
                // const img = document.createElement("img");
                // // const src = arreglo[i].img;
                // img.setAttribute("src", arreglo[i].img);
                // img.setAttribute("alt", "Imagen de una prenda o un accesorio");
                // const div = document.createElement("div");
                // const boton1 = document.createElement("button");
                // const boton2 = document.createElement("button");
                // const boton3 = document.createElement("button");
                // const boton4 = document.createElement("button");
                // boton1.setAttribute("class", "btnView"); //Este va con una imagen de expandir la imagen, ver en grande 
                // boton2.setAttribute("class", "btnDetails"); //Este va con una imagen de ver los detalles del producto
                // boton3.setAttribute("class", "btnCar"); //Este va con una imagen de agregar el producto seleccionado al carrito
                // boton4.setAttribute("class", "btnFavorite"); //Este va con una imagen de añadir el producto a la sección de favoritos 
                // div.appendChild(boton1);
                // div.appendChild(boton2);
                // div.appendChild(boton3);
                // div.appendChild(boton4);
                // div.setAttribute("class", "overlay");
                // div.setAttribute("title", arreglo[i].nombre.toUpperCase());
                // td.appendChild(div);
                // td.appendChild(img);
                // td.addEventListener("click", function(){open(`./ProdyAcc/${arreglo[i].nombre}.html`, "_blank")});
                // td.addEventListener("mouseover", function(){enfocado(img, div)});
                // td.addEventListener("mouseout", function(){desenfocado(img, div)});
                // fragmentoAcc.appendChild(td)
            }
            // };
        };
    // });
    // const tdArrow = document.createElement("td");
    // const des = document.createElement("button");
    // const img = document.createElement("img");
    // img.setAttribute("src", "../IMGSFirst/desIzq.png");
    // des.setAttribute("class", "desDer");
    // tdArrow.setAttribute("class", "des");
    // tdArrow.appendChild(des);
    // tdArrow.appendChild(img);
    // fragmentoAcc.appendChild(tdArrow);
    // fragmentoProd.appendChild(tdArrow);
    const tdArrow = document.createElement("td"), des = document.createElement("button"), img = document.createElement("img");
    img.setAttribute("src", "../IMGSFirst/desIzq.png");
    des.setAttribute("class", "desDer");
    tdArrow.setAttribute("class", "des");
    des.appendChild(img);
    tdArrow.appendChild(des);
    const clon = tdArrow.cloneNode(true);

    fragmentoProd.appendChild(clon);
    fragmentoAcc.appendChild(tdArrow);

    const prod = document.querySelectorAll(".productos tr")
    if(document.title === "Shop") {
    prod[0].appendChild(fragmentoProd);
    prod[1].appendChild(fragmentoAcc);
    }

    // const head = document.getElementByTagName(head);
    //<td class="des"><button class="desDer"><img src=../IMGSFirst/desIzq.png"></button></td>
};

// const productos = (dato) => {
//     const arreglo = dato.Productos; 
//     const allP = document.querySelectorAll(".productos td");
//     const titulos = document.querySelectorAll(".productos th")
//     allP.forEach(element => {
//         for(let i=0; i<arreglo.length; i++){
//             if(arreglo[i].pdt === element.textContent){
//                 element.textContent = "";
//                 element.textContent = arreglo[i].nombre.toUpperCase();
//                 const precio2 = document.createElement("span");
//                 const precio = document.createTextNode(arreglo[i].precio);
//                 precio2.setAttribute("class", "precio");
//                 precio2.appendChild(precio);
//                 element.appendChild(precio2);
//                 const img = document.createElement("img");
//                 const src = arreglo[i].img;
//                 img.setAttribute("src", src);
//                 img.setAttribute("alt", "Imagen de una prenda o un accesorio");
//                 const div = document.createElement("div");
//                 div.setAttribute("class", "overlay");
//                 div.setAttribute("title", arreglo[i].nombre.toUpperCase());
//                 element.appendChild(div);
//                 element.appendChild(img);
//                 element.addEventListener("click", function(){open(`./ProdyAcc/${arreglo[i].nombre}.html`, "_blank")});
//                 element.addEventListener("mouseover", function(){enfocado(img, div)});
//                 element.addEventListener("mouseout", function(){desenfocado(img, div)});
//             };
//         };
//     });
// };

const enfocado = (img, div) => {
    img.classList.add("imgs");
    div.classList.add("enfocado");
    div.style.visibility = "visible";
}

const desenfocado = (img, div) => {
    img.classList.remove("imgs");
    div.classList.remove("enfocado");
    div.style.visibility = "hidden";
}

document.getElementById("logo").addEventListener("click", function(){
    window.open("principal.HTML", "_self");
});

// const btnV = document.getElementsByClassName("btnView");
// console.log(btnV.length)
// console.log(btnV)
// console.log(btnV[1]) //No reconoce la posicion y no pinta en consola, solo da undefined

// console.log(botonesOver)

// btnV[1].addEventListener("click", function() {
//     console.log("se hizo clicccc");
// })

// (function() {for(let i=0; i<btnV.length; i++) {
//     console.log(btnV[i])
//     // btnV[i].addEventListener("click", function() {
//     //     console.log("Se hizo clic")
//     //     alert("Se hizo clic sobre el botón")
//     // })
//     e.stopImmediatePropagation();
// }
// })
// const botonesFragment = document.createDocumentFragment();

// const boton1 = document.createElement('button');
// boton1.value = 'Botón 1';
// boton1.style = "1px solid black; width: 100px; height: 100px";

// botonesFragment.appendChild(boton1);
// document.body.appendChild(botonesFragment);



document.getElementById("btnLat").addEventListener("click", function(e){    
    e.stopPropagation();
    opac.setAttribute("id", "opaco");
    lat.style.visibility = "visible";
});

let counterDer = 0, counterIzq = 0, oculta = 0;

document.addEventListener("click", function(e){
    e.stopPropagation();

    const overlapping = document.getElementById("overlapping");

    if(overlapping) {
    if(e.target !== overlapping) {
        // overlapping.removeAttribute("id");
        if(opac.getAttribute("id") === "opacoE") {
        overlapping.parentNode.removeChild(overlapping);
        opac.removeAttribute("id");
        counterBtn1 = 0;
    }
    }};

    if(e.target !== lat){
        if(opac.getAttribute("id") === "opaco") {
        opac.removeAttribute("id");
        lat.style.visibility = "hidden";
    }
    };

    if(e.target !== buscador && e.target !== btnLupa && e.target !== lupa && e.target !== lupaImg && e.target !== seleccion && e.target.nodeName !== "LI"){
        buscador.style.backgroundColor = "white";    
        btnLupa.style.backgroundColor = "white";
        lupa.style.backgroundColor = "white";        
        buscador.style.borderRadius = "4px 0 0 4px";
        btnLupa.style.borderRadius = "0 4px 4px 0";
        buscador.placeholder = "Busque sus productos";
        btnLupa.removeAttribute("style");
        seleccion.style.visibility = "hidden";
        // if(e.target.getAttribute("src") && e.target.getAttribute("style")) {e.target.style.visibility = "hidden";}
    };
    // c../IMGSFirst = document.querySelectorAll("#opac img");
    // console.l../IMGSFirst)

    // if(opac.getAttribute("class") === "opacoE") {
    //     opac.removeAttribute("class");
    //     //Eliminar la imagen que he puesto con #opacoE
    //     opac.childNodes.forEach(element => {
    //         if(element.getAttribute("src") && element.getAttribute("style")) {
    //             console.log(element)
    //             element.style.visibility = "hidden";
    //         }
    //     })
    //     // seleccion.lastChild.style.visibility = "hidden";
    // }

    const arrowUp = document.querySelector("#arrowUp img");
    if(e.target === arrowUp){
        // const header = document.querySelector("#footer")
        window.scrollTo({top:0, behavior: "smooth"});
    }
//.productos tr 
    if(e.target.nodeName === "BUTTON"){        
        const tr = e.target.parentNode.parentNode;

        if(e.target.getAttribute("class") === "desDer") {
            tr.scrollLeft += 379;
            if(tr.scrollLeft >= tr.scrollWidth - tr.clientWidth) {
                e.target.parentNode.style.visibility = "hidden";
                oculta = 1;
            }
        }

        if(e.target.getAttribute("class") === "desIzq") {            
            tr.scrollLeft += -379;

            if(tr.scrollLeft === 0) {
                e.target.parentNode.style.visibility = "hidden";
            }

            if(tr.scrollLeft < tr.scrollWidth - tr.clientWidth - 1 && oculta === 1) {
                e.target.parentNode.previousElementSibling.style.visibility = "visible";
                oculta = 0
            }

        }
        
        if(tr.scrollLeft > 0 && tr.scrollLeft < 380) {            

            if(tr.getAttribute("id") === "barra") {
                if(counterDer === 0) {
                counterDer += 1;
                const nuevoB = e.target.parentNode.cloneNode(true);
                const boton = nuevoB.querySelector("button");
                nuevoB.setAttribute("class", "izq");
                boton.setAttribute("class", "desIzq");
                tr.appendChild(nuevoB);  
                }
            }

            if(tr.getAttribute("id") === "barra2") {
                if(counterIzq === 0) {
                counterIzq += 1;
                const nuevoB = e.target.parentNode.cloneNode(true);
                const boton = nuevoB.querySelector("button");
                nuevoB.setAttribute("class", "izq");
                boton.setAttribute("class", "desIzq");
                tr.appendChild(nuevoB);
                }
            }
            tr.lastChild.style.visibility = "visible";
        }
    }
    
    if(e.target === complementar) {
        scrollTo({
            top: 850,
            behavior: "smooth"
        })
    }

    if(e.target !== seeingOne) { 
        // seeingOne.firstChild.firstChild.src = "";
        seeingOne.firstChild.innerHTML = ""
        seeingOne.style.visibility = "hidden";
    }

});

document.addEventListener("scroll", function(e){
    if(document.documentElement.scrollTop !== 0){
        const arrowUp = document.getElementById("arrowUp");
        arrowUp.style.display = "block";
    }

    if(document.documentElement.scrollTop === 0){
        const arrowUp = document.getElementById("arrowUp");
        arrowUp.style.display = "none";
    }
})

const push = (dato) => {
    const arreglo = dato.Productos;
    for(let i=0; i<arreglo.length; i++){
        nombres.push(arreglo[i].nombre)
        pdt.push(arreglo[i].pdt)
    }
}

// for(let i=0; i<botonesOver.length; i++){
//     botonesOver[i].addEventListener("click", function(e) {
//     e.stopImmediatePropagation(); //enfocado
// })
// }

btnLupa.addEventListener("click", function(e){
    e.stopImmediatePropagation();
    
    if(buscador.value.length >= 1 && buscador.value.length < 4) {
        window.open(`./emptyPage.html`, "_blank");
    }
    
    if(buscador.value.length >= 4) {
        window.open(`./ProdyAcc/${paginadetodosloselementosquecoinciden}.html`, "_blank");
    }
    
    if(buscador.value.length === 0) {
        buscador.placeholder = "Ingrese el producto que desea buscar";
        document.querySelector("#bar-search input").focus();
    }
});

const encontrados = [];
let sinRepetidos = [];
let focus = 0;

buscador.addEventListener("keydown", function(e){
    e.stopImmediatePropagation();
    
    const arreglo = dato.Productos, nombres = [], pdt = [];

    buscador.style.borderRadius = "4px 0 0 0";
    btnLupa.style.borderRadius = "0 4px 0 0";
    buscador.style.borderRight = "none";

    for(let i=0; i<arreglo.length; i++) {
        nombres.push(arreglo[i].nombre);
    }

    for(let i=0; i<arreglo.length; i++) {
        pdt.push(arreglo[i].pdt);
    }

    for(let i=0; i<nombres.length; i++){
        if(buscador.value === nombres[i]) {
            if(e.key === "Enter") {
            encontrados.unshift(nombres[i]); 
            window.open(`./ProdyAcc/${buscador.value}.html`, "_blank");                
            break;
            }            
            
        }; 
    };

    sinRepetidos = [...new Set(encontrados)];
    if(sinRepetidos.length > 5) {
        sinRepetidos.pop();
    }

    setTimeout(() => {
        if(buscador.value.length >= 1){
            seleccion.style.visibility = "visible";
        }
    }, 10);

    if(e.key === "ArrowDown") {
        e.preventDefault();

        if(focus === listaProd.childNodes.length+1) {
            focus = 0;
        }
        
        if(focus < listaProd.childNodes.length) {
            listaProd.childNodes[focus].style.backgroundColor = "#8c9b6f";
        }
        
        if(focus >= 1 && focus < listaProd.childNodes.length) {
            listaProd.childNodes[focus-1].removeAttribute("style");
        }
        
        focus += 1;
        
        if(focus > listaProd.childNodes.length) {
            listaProd.childNodes[focus-2].removeAttribute("style");
            focus = 0;
        }        
        
    }    

    if(e.key === "ArrowUp") {
        e.preventDefault();
        
        if(focus > 1 && focus <= listaProd.childNodes.length) {
            listaProd.childNodes[focus-2].style.backgroundColor = "#8c9b6f";            
            listaProd.childNodes[focus-1].removeAttribute("style");
        }
        
        if(focus > listaProd.childNodes.length) {
            listaProd.childNodes[focus-2].style.backgroundColor = "#8c9b6f";
        }
        
        if(focus === 1) {
            listaProd.childNodes[0].removeAttribute("style");            
            focus = listaProd.childNodes.length+2;
        }
        
        if(focus === 0) {
            focus = listaProd.childNodes.length+1;
            
            listaProd.childNodes[focus-2].style.backgroundColor = "#8c9b6f";            
        }
        
        focus += -1;      

    }

    if(e.key === "Tab") {
        e.preventDefault();
        const lista = listaProd.childNodes;
        
        for(let i=0; i<lista.length; i++) {
            if(lista[i].style.backgroundColor === "rgb(140, 155, 111)") {
                buscador.value = lista[i].textContent;
            }
        }

        listaProd.innerHTML = "";

        for(let i=0; i<nombres.length; i++){
            const nombre = nombres[i].toLowerCase();
            if(nombre.startsWith(buscador.value)) {
                const nuevo = document.createElement("li");            
                nuevo.textContent = nombres[i];                        
                nuevo.setAttribute("class", "busca");
                listaProd.appendChild(nuevo);
            }
        }
        focus = 0;
    }

    if(e.key === "Enter") {
        const lista = listaProd.childNodes;
        for(let i=0; i<lista.length; i++) {
            if(lista[i].style.backgroundColor === "rgb(140, 155, 111)") {
                window.open(`./ProdyAcc/${lista[i].textContent}.html`);
            }
        }

        if(buscador.value.length >= 1 && buscador.value.length < 4) {
            window.open(`./emptyPage.html`, "_blank");
        }
        
        if(buscador.value.length >= 4) {
            window.open(`./ProdyAcc/${paginadetodosloselementosquecoinciden}.html`, "_blank");
        }

    }

    if(e.key === "Backspace") {
        focus = 0;
    }
    
});

listaProd.addEventListener("click", function(e){
    const li = document.querySelectorAll("#selecciona li");
    if(e.target.nodeName === "LI") {
        window.open(`./ProdyAcc/${e.target.textContent}.html`);
        buscador.focus();
        encontrados.unshift(e.target.textContent);
    }
})

listaProd.addEventListener("mouseover", function(e){ 
    const li = [...document.querySelectorAll("#selecciona li")], aLi = document.querySelectorAll("#selecciona a");
    // const img = document.querySelector("#selecciona ul");

    for(let i=0; i<li.length; i++){
        if(li[i].getAttribute("style")) {
            li[i].removeAttribute("style");
            focus = 0;
        }
        if(e.target === li[i] || e.target === aLi[i]) {
        li[i].style.backgroundColor = "#8c9b6f";
        focus = li.indexOf(li[i])+1;
        }
}
});

listaProd.addEventListener("mouseout", function(e){
    const li = document.querySelectorAll("#selecciona li"), aLi = document.querySelectorAll("#selecciona a");
    // const img = document.querySelector("#selecciona ul");
    for(let i=0; i<li.length; i++){
    if(e.target === li[i] || e.target === aLi[i]) {
        li[i].removeAttribute("style");
    }
}
})
// console.time("Busqueda");
buscador.addEventListener("input", function(){
    const valor = buscador.value.toLowerCase();
    const img = document.querySelector("#selecciona ul");

    if(seleccion.style.visibility === "hidden") {
    buscador.style.borderRadius = "4px 0 0 4px";
    btnLupa.style.borderRadius = "0 4px 4px 0";
    }
        
    if(buscador.value.length === 0) {
    listaProd.innerHTML = "";
        
    sinRepetidos.forEach((nombre) => {
        const nuevo = document.createElement("li");
        nuevo.textContent = nombre;
        nuevo.setAttribute("class", "encontrados");
        listaProd.appendChild(nuevo);
    });    
    };

    if(valor.length !== 0) {

    buscador.style.borderRadius = "4px 0 0 0";
    buscador.style.borderBottom = "1px solid #331755";
    btnLupa.style.borderRadius = "0 4px 0 0";
    btnLupa.style.borderBottom = "1px solid #331755";

    listaProd.innerHTML = "";
    img.removeAttribute("style");

    for(let i=0; i<nombres.length; i++){
        const nombre = nombres[i].toLowerCase();
        if(nombre.startsWith(valor)) {
            const nuevo = document.createElement("li");            
            nuevo.textContent = nombres[i];                        
            nuevo.setAttribute("class", "busca");
            listaProd.appendChild(nuevo);
        }
    }
}
})
// console.timeEnd("Busqueda");
buscador.addEventListener("focus", function(e){
    e.stopPropagation();

    buscador.style.backgroundColor = "#A0B17F";
    btnLupa.style.backgroundColor = "#A0B17F";
    lupa.style.backgroundColor = "#A0B17F";
    
    if(buscador.value.length >= 1 || seleccion.childNodes.length >= 1) {
        buscador.style.borderRadius = "4px 0 0 0";
        btnLupa.style.borderRadius = "0 4px 0 0";
        seleccion.style.visibility = "visible";
    }    
});

// desDer.addEventListener("click", function(e){ button

// })

// class Boton {
//     constructor(colorF, tamañoTexto, imgF, repetirImg, bordes, posicion, alto, ancho, abajo, centro) {
//     this.colorF = colorF;
//     this.tamañoTexto = tamañoTexto;
//     this.imgF = imgF;
//     this.repetirImg = repetirImg;
//     this.bordes = bordes;
//     this.posicion = posicion; 
//     this.alto = alto;
//     this.ancho = ancho;
//     this.abajo = abajo;
//     this.centro = centro;
//     }

// // crear(ruta) {
// //     const boton = document.createElement("button");
// //     boton.style.backgroundColor = this.colorF;
// //     boton.style.fontSize = this.tamañoTexto;
// //     boton.style.backgroundImage = this.imgF;
// //     boton.style.backgroundRepeat = this.repetirImg;
// //     boton.style.border = this.bordes;
// //     boton.style.position = this.posicion;
// //     boton.style.height = this.alto;
// //     boton.style.width = this.ancho;
// //     boton.style.bottom = this.abajo;
// //     boton.style.right = this.centro;
// //     ruta.appendChild(boton);
// // }

// // modificar(nuevo) {
// //     this.colorF = nuevo;
// // }

// // crearImg(ruta) {
// //     const img = document.createElement("img");
// //     img.style.border = this.bordes; //Puedo crear una nueva clase con 3 parametros, y luego crear una instancia de esa clase pasandole solo un parametro? Y si le pasara dos parametros se asignarian en el orden en
// //     //que esta en los parametros de la clase ? 
// //     img.src = this.imgF;
// //     ruta.appendChild(img);
// // }

// }

// Boton.prototype.crear = function(ruta) {
//     const boton = document.createElement("button");
//     boton.style.backgroundColor = this.colorF;
//     boton.style.fontSize = this.tamañoTexto;
//     boton.style.backgroundImage = this.imgF;
//     boton.style.backgroundRepeat = this.repetirImg;
//     boton.style.border = this.bordes;
//     boton.style.position = this.posicion;
//     boton.style.height = this.alto;
//     boton.style.width = this.ancho;
//     boton.style.bottom = this.abajo;
//     boton.style.right = this.centro;
//     ruta.appendChild(boton);
// }

// Boton.prototype.modificar = function(nuevo) {
//     this.colorF = nuevo;
// }

// Boton.prototype.crearImg = function(ruta) {
//     const img = document.createElement("img");
//     img.style.border = this.bordes; //Puedo crear una nueva clase con 3 parametros, y luego crear una instancia de esa clase pasandole solo un parametro? Y si le pasara dos parametros se asignarian en el orden en
//     //que esta en los parametros de la clase ? 
//     img.src = this.imgF;
//     ruta.appendChild(img);
// }
// console.log(Boton.prototype)

// // const img1 = new Boton("", "", "../IMGSFirst/cursor2.png", "", "1px solid black"); //ESTO FUNCIONA //Los parametro se van adjuntando a la clase en orden en que se ponga sobre la nueva instanacia, si quiero poner
// //el tercer parametro, debería primero poner los dos anteriores, aunque sea utilizando undefined para que funcione según lo esperado
// // img1.crearImg(document.body); //ESTO FUNCIONA

// const boton1 = new Boton("red", "larger", "imagen", "", "1px solid black", "absolute", "200px", "200px", "0px", "50%");
// boton1.crear(document.body);

// const boton2 = new Boton("blue", "larger", "url(../IMGSFirst/cursor2.png')", "no-repeat", "1px solid black", "", "200px", "200px", "0px", "50%");
// boton2.modificar("yellow"); //Es como decir, boton2.style.backgroundColor = "yellow"; Para modificar el parámetro después de creada la instancia de la clase 
// boton2.crear(document.body);

// function Perro(nombre, genero, tamanio) { 
//     this.super = Animal;
//     this.super(nombre, genero); 
//     this.tamanio = tamanio; 
// } 

// Perro.prototype = new Animal(); 
// Perro.prototype.constructor = Perro;

// class BotonAzul {
//     constructor(color, alto, ancho, bordes) {
//         this.color = color;
//         this.alto = alto;
//         this.ancho = ancho;
//         this.bordes = bordes;
//     }

//     creaUnBoton(ruta){
//         const btn = document.createElement("button");

//         btn.style.backgroundColor = this.color;
//         btn.style.height = this.alto;
//         btn.style.width = this.ancho;
//         btn.style.border = this.bordes;
//         btn.setAttribute("id", "btnChange");

//         ruta.appendChild(btn);
//     }

//     // secondButton(ruta){        
//     //     const changeColor = document.createElement("button");


//     // }

//     set setBColor(newColor) {
//         const btn = document.getElementById("btnChange");
//         this.color = newColor; 
//         btn.style.backgroundColor = newColor;
//     }

//     set setBorder(borde) {
//         const btn = document.getElementById("btnChange");
//         this.bordes = borde;
//         btn.style.border = borde;
//     }

// }

// const btn1 = new BotonAzul("yellow", "200px", "200px", "1px solid blue");
// btn1.creaUnBoton(opac);


// const cambiaColor = document.getElementById("btnChange");

// cambiaColor.addEventListener("click", function(){
//     let change = 0;

//     if(cambiaColor.style.backgroundColor === "yellow" && change === 0){
//     btn1.setBColor = "blue";
//     btn1.setBorder = "1px solid red";
//     change = 1;
//     }
//     if(cambiaColor.style.backgroundColor === "blue" && change === 0){
//     btn1.setBColor = "red";
//     btn1.setBorder = "1px solid yellow";
//     change += 1;
//     }
//     if(cambiaColor.style.backgroundColor === "red" && change === 0){
//     btn1.setBColor = "yellow";
//     btn1.setBorder = "1px solid blue";
//     change = 1;
//     }
// })

const clock = document.getElementById("clock");
clock.textContent = new Date().toLocaleTimeString();

const time = () => {    
    clock.textContent = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`; 
}
setInterval(() => {
    time();
}, 1000)

// clearInterval(time2);
// hora()

