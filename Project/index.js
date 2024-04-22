// const miMascota = {nombre: 'Toby', raza: 'perro', edad: '8años', dueños: {Primero: {nombre: 'Israel', edad: 52}, segundo: {nombre: 'Sandra', edad: 42}, tercero: {nombre: 'Camilo', edad: 20}}}


// const {nombre, edad} = miMascota.dueños.tercero
// // console.log(edad)


// const {tercero} = miMascota.dueños
// // console.log(tercero)

// const fruits = ["Banana", "Manzana", "Pera", "Kiwi"];
// const keys = fruits.keys();
// const ba = "Banana"
// // if(fruits.find(ba)) console.log(ba)

// const busca = (fruta) => {
//     return fruta === "Banana"
// }

// console.log(fruits.find(busca))
// for(let fruta of keys) {
//     console.log(fruta)
// }

// console.log(fruits.keys())


// class Boton {
//     constructor(colorF, tamañoTexto, imgF, bordes) {
//     this.colorF = colorF;
//     this.tamañoTexto = tamañoTexto;
//     this.imgF = imgF;
//     this.bordes = bordes;
//     }

// crear(ruta) {
//     const boton = document.createElement("button");
//     boton.style.backgroundColor = this.colorF;
//     boton.style.fontSize = this.tamañoTexto;
//     boton.style.backgroundImage = this.imgF;
//     boton.style.border = this.bordes;
//     ruta.appendChild(boton);
// }
// }

// const boton1 = new Boton("red", "larger", "imagen", "1px solid black");
// const rutaAppend = document.getElementById("barra");
// boton1.crear(document);
// const propiedad = "Hola"

// const objeto = {
//     propiedad: "Soy una propiedad",
//     funcionRegular: function () {
//       const propiedad = "Función regular";
//       console.log(this.propiedad); // "Soy una propiedad"
//     },
//     funcionFlecha: () => {
      
//       console.log(this.propiedad); // "Soy una propiedad"
//     }
//   };
  
//   objeto.funcionRegular(); // Utiliza el this del objeto
//   objeto.funcionFlecha(); // También utiliza el this del objeto
  
//   // const propiedad = "Hola"

//   const objeto2 = {
//     propiedad: "Esta es una propiedad",
//     function : function() {
//       console.log(this.propiedad);
//     },
//     arrow2: () => {
//       console.log(this.propiedad);
//     }
//   };


//   const animal = "Perro",
//   animal2 = "Perro2",
//   animal3 = "GGato"

//   console.log(animal)
//   console.log(animal2)
//   console.log(animal3)


  function Perro(genero, raza, color) {
    this.genero = genero;
    this.raza = raza;
    this.color = color;     
  }

  Perro.prototype.saludar = function () { 
      console.log(`Hola soy un ${this.genero} de color ${this.color} y mi raza ${this.raza}`);
  }

  const danes = new Perro("Macho", "Gran Danés", "Blanco");
  danes.saludar();

  function Gato(genero, raza, color, tamanio) {
    Perro.call(this, genero, raza, color);
    this.tamanio = tamanio;
  }

  Gato.prototype = Object.create(Perro.prototype);
  Gato.prototype.constructor = Gato;

  const michi = new Gato("Macho", "Michi", "Naranja", "Mediano");
  michi.saludar();

  const persona = {
    nombre: "Camilo",
    edad: 20,
    saluda: function() {
      console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    },
    saludar: () => {
      console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} añoss.`)
    }
  }

  persona.saluda()
  persona.saludar()

  const myObject = {
    myArrowFunction: null,
    myMethod: function () {
      this.myArrowFunction = () => { console.log(this) };
    }
  };



  class PersonsH {
    constructor(nombre, edad, estatura) {
      this.nombre = nombre;
      this.edad = edad;
      this.estatura = estatura;
    }

    presentacion() {
      console.log(`Hola, mi nombre es ${this.nombre} soy de Colombia, tengo ${this.edad} años y mido ${this.estatura}CM.`)
    }
  }

  const camilo = new PersonsH("Camilo", 20, 170);
  camilo.presentacion();

  class PersonsW extends PersonsH{
    constructor(nombre, edad, estatura, genero){
      super(nombre, edad, estatura);
      this.genero = genero;
    }
  }

  const sandra = new PersonsW("Sandra", 40, 155, "mujer");
  // sandra.presentacion = function (){
  //   console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años, mido ${this.estatura}CM y claramente soy ${this.genero}.`);
  // }

  const ejecuta = sandra.presentacion();

  class Animales{
    constructor(raza, tamanio, color) {
      this.raza = raza; 
      this.tamanio = tamanio;
      this.color = color;
    }

    sonido() {
      console.log(`Soy un animal de raza ${this.raza}, mi tamanio es ${this.tamanio} de color ${this.color} y mi sonido es el correspondiente a mi raza de ${this.raza}`);
    }

  }

  const perro = new Animales("perro", "grande", "negro");
  perro.sonido();

