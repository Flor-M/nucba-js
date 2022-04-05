// EJERCICIO 1
let ingredientes = ["harina", "sal", "agua", "levadura", "aceite", "tomate", "muzzarella", "orégano", "jamón", "aceituna"];
let pares = [];
let impares = [];
const parOimpar = (ingredientes) => {
    for (i=0;i<ingredientes.length;i++) {
        if (ingredientes[i].length % 2 === 0){
            pares.push(ingredientes[i]);
        } else {
        impares.push(ingredientes[i]);
        }
    }
    return console.log (`Los ingredientes pares son: ${pares}. Los ingredientes impares son: ${impares}.`);
};
console.log (parOimpar(ingredientes));