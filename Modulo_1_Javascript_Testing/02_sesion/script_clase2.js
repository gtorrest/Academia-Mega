/*var edad = 0; 

while (edad <= 80) { 
    if (edad === 18) {
        console.log(`Tienes ${edad} años, ya eres mayor de edad.`);
    } else if (edad > 18 && edad <= 65) {
        console.log(`Tienes ${edad} años, eres un adulto.`);
    } else if (edad > 65) {
        console.log(`Tienes ${edad} años, eres un adulto mayor.`);
    }
    
    edad++; 
}//Actividad : */

var contraseñaCorrecta = "secreta"; 
var intentos = 3; 

while (intentos > 0) {
    var contraseñaIngresada = prompt(`Ingresa la contraseña (${intentos} intentos restantes):`);
    
    if (contraseñaIngresada === contraseñaCorrecta) {
        alert("¡Acceso concedido!");
        break; 
    } else {
        intentos--; 
        if (intentos > 0) {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
        } else {
            alert("Has agotado tus intentos. Acceso bloqueado.");
        }
    }
}