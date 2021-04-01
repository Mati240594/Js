let biomasainicial= parseInt(prompt("Ingresa concentración de biomasa inicial"));
let mumaxima =parseInt(prompt("Ingresá el valor de tasa de crecimiento específica máxima"));
let tiempo= parseInt(prompt("Ingresa el tiempo en que el MO se encuentra en fase exponencial"));
const multipl = (a,b,c)=> a*b*c;
let Csfinal = multipl(biomasainicial,mumaxima,tiempo);
console.log(Csfinal);
