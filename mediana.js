function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

function calcularMediana(lista) {
    function comparar(a,b){
        return a-b;
    }
    const listaOrdenada = lista.sort(comparar);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;

    if (esPar(lista1.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElemento1y2 = calcularMediaArimetica([elemento1,elemento2]);
        mediana = promedioElemento1y2;
        return mediana;
    } else {
        mediana = listaOrdenada[mitadLista];
        return mediana;
    };
};

