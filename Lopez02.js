
 let nombre =prompt("Ingresa tu nombre");

if((nombre !=" Matías ") || (nombre== " mati") || (nombre== "matias")) {
     alert("Hola Matías, bienvenido ");
 } else{
 alert("Tú nombre no es válido");
 }
let Numero1 = prompt ("Ingresa tu primer número");
let Numero2 = prompt(" Ingresa tu segundo número");
if ((Numero1 >1000) && (Numero2 > 1000)) {
    alert("Tú número es demasiado grande");
} else if((Numero1 < 50) && (Numero1 > 10) && (Numero2 < 50) && (Numero2 >10)){
    alert( " La multiplicación de tus números " + (Numero1 *Numero2));
} else {
    alert ("No puedes elegir estos números");
}
