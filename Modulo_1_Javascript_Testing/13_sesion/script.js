// MiniFramework
function expect(actual){
    return{
        toBe(expected){
            if(actual === expected){
                console.log(`Pasó: ${actual} === ${expected}`);
            }else{
                console.log(`Falló: se esperaba ${expected}, pero se obtuvo ${actual}`);
            }
        },
        toEqual(expected){
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if(passed){
                console.log('Pasó: Objetos iguales');
            }else{
                console.log('Falló: Objetos diferentes');
            }
        }
    }
}

function sumar(a, b){
    return a + b;
}

expect(sumar(2,3)).toBe(5);
expect(sumar(10,0)).toBe(10);