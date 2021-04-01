const suma =(a,b) => a + b;
let precioproducto1 = parseInt(prompt("Ingresa costo de un producto"));
let precioproducto2= parseInt(prompt("Ingresa costo de un producto"));
const IVA1 = x => precioproducto1* 0.21;
const IVA2 = y => precioproducto2*0.21;
let costototal = suma(suma(precioproducto1,IVA1),suma(precioproducto2,IVA2));
console.log(costototal);





