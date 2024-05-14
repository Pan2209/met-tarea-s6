'use strict';
const claveCorrecta = 3214;
let intentos = 3;


while(intentos > 0){
    let claveIngresada = prompt('INGRESE LA CLAVE');

    if (claveIngresada == claveCorrecta) {
        alert("Clave correcta, acceso concedido.");
        break;
    }else{
        alert("La clave ingresada es incorrecta. Intente nuevamente.");
        intentos --;
    
    }
}

if (intentos == 0) {
    alert("Se ha quedado sin intentos. Su cuenta fue bloqueada.")
}