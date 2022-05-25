
const Pizzas = [
    {id: 1, nombre: "Huevo Duro", ingredientes: ["muzarella", "huevo duro", "oregano", "aceitunas"], precio: 700},
    {id: 2, nombre: "Fugazzeta", ingredientes: ["muzarella", "tomate", "oregano", "aceitunas"], precio: 650}, 
    {id: 3, nombre: "Muzarella", ingredientes: ["muzarella", "oregano", "aceitunas"], precio: 550},
    {id: 4, nombre: "Napolitana", ingredientes: ["muzarella", "tomate", "oregano", "aceitunas"], precio: 800},
    {id: 5, nombre: "Calabreza", ingredientes: ["muzarella", "longaniza", "oregano"], precio: 1000},
    {id: 6, nombre: "Especial", ingredientes: ["muzarella", "jamon", "oregano", "aceitunas"], precio: 900}
];


const nombrePizza = document.querySelector('h2');
const precioPizza = document.querySelector('h4');
const codigoPizza = document.querySelector('#codigo');
const agregarBtn = document.querySelector('button');


const limpiarData = () => {
    while (nombrePizza.firstChild && precioPizza.firstChild) {
        nombrePizza.removeChild(nombrePizza.firstChild);
        precioPizza.removeChild(precioPizza.firstChild);
    }
};

const limpiarCodigo = () => {
    codigoPizza.value = "";
};

const imprimirData = (array) => {

    const texth2 = document.createTextNode(array.nombre);
    const texth4 = document.createTextNode(`$${array.precio}`);

    nombrePizza.appendChild(texth2);
    precioPizza.appendChild(texth4);
};


agregarBtn.addEventListener('click', (e) => {
    
    limpiarData();

    const pizza = Pizzas.find((pizza) => pizza.id == codigoPizza.value); // porque se rompe cuando acá le pongo e.target.value ??

    !pizza ? alert('No tenemos esa pizza pa.') : imprimirData(pizza);

    limpiarCodigo();
});