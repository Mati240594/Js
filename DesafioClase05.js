function Bebida (pNombre,pApellido, pIngrediente1,pIngrediente2,pIngrediente3,pIngrediente4,pProporcion) {
    this.nombre= pNombre;        ;
    this.apellido= pApellido;
    this.Ingrediente1=pIngrediente1;
    this.Ingrediente2=pIngrediente2;
    this.Ingrediente3= pIngrediente3;
    this.Ingrediente4=pIngrediente4;
    this.Proporcion= pProporcion;
    this.pedido= function(){ console.log("Hola soy " + this.nombre + this.apellido + "y quiero mi bebida con "+this.Ingrediente1+this.Ingrediente2+this.Ingrediente3+this.Ingrediente4+this.Proporcion)
}
    


}
const bebida1= new Bebida("Matías","López","Coca-Cola","Fernet","Hielo","","70-30");
const bebida2 = new Bebida ("Ricardo","Ruben","Leche","Nesquik","","","4 cucharadas, el resto leche");
bebida1.pedido();
bebida2.pedido();






