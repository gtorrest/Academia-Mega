const crearContador = () => {
    let cuenta = 0; 

    return {
        incrementar: () => console.log(`Cuenta: ${++cuenta}`),
        decrementar: () => console.log(`Cuenta: ${--cuenta}`),
        obtenerValor: () => console.log(`Valor actual: ${cuenta}`)
    };
};


const contador = crearContador();

contador.incrementar();
contador.incrementar();
contador.decrementar();
contador.obtenerValor();



function crearMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

const multiplicar = crearMultiplicador(2);

console.log(multiplicar(5));



const crearMultiplicador2 = (multiplicador) => (numero) => numero * multiplicador;

const triplicar = crearMultiplicador2(3);
const duplicar = crearMultiplicador2(2);

console.log(duplicar(5));  // 15
console.log(triplicar(10)); // 30


