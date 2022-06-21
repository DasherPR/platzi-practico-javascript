// codigo del cuadrado
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4
};
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado
};
// console.log("El área del cuadrado es : " + areaCuadrado + "cm^2");


// codigo del triangulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log("la altura del triangulo es de: " + alturaTriangulo + "cm.");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
// console.log("el perimetro del triangulo es de: " + perimetroTriangulo + "cm.");

function areaTriangulo(base,altura) {
    return (base * altura) / 2
};
// console.log("el area del triangulo es de: " + areaTriangulo + "cm^2.")


//codigo del circulo
//console.group("Circulo");
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo +"cm.");
function diametroCirculo (radio) {
    return radio * 2;
};
// console.log("el diametro del circulo es de: " + diametroCirculo + "cm.");
const PI = Math.PI;
// console.log("Pi es: " + PI);
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo (radio) {
    return (radio * radio) * PI;
};
function alturaIsosceles(lado1,lado2,base){
    if (lado1 == lado2) {
        const altura = Math.sqrt((lado1*lado1)-((base*base)/4));
        console.log("La altura de tu triangulo isosceles es de: " + altura);
    } else {
        console.log("Tu triangulo no es isosceles");
    };

}
// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("el perimetro del cuadrado es de: " + perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert("el area del cuadrado es de: " + area);

}
