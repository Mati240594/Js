let  BiomassIn= parseInt(prompt("Ingresa concentracion de biomasa inicial"));
let mumaxima= parseInt(prompt("Ingresá el valor de tasa de crecimiento específico máximo"));
let km = parseInt(prompt("Ingresá el valor de la constante de saturación"));
const Con_Sus= [0.1,0.5,1,1.2,1.5,2,2.5,3,50]; //Concentracion de sustrato en g/L
function Monod(Con_Sus,mumaxima,km){
mu_g= (mumaxima*Con_Sus)/(Con_Sus+km);
if (mu_g == mumaxima){
    console.log("No es el punto que estoy buscando")
}
else{
    const Cs= Con_Sus.filter(elemento=> elemento <5);
    
}

}
Monod();



