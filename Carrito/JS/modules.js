const valor = "El valor que vamos a exportar";
const valor10 = 10;
const segundoValor = "Un nuevo valor";

function suma(num1, num2) {
    console.log(num1+num2)
}


class Botones {
    constructor(color, border, width, height) {
        this.color = color;
        this.border = border;
        this.width = width;
        this.height = height;
    }

    creaBoton(ruta){
        const btn = document.createElement("BUTTON");

        btn.style.backgroundColor = this.color;
        btn.style.border = this.border;
        btn.style.width = this.width;
        btn.style.height = this.height;

        ruta.appendChild(btn);
    }
}




export {suma, valor, valor10, Botones};