// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

const Pizzas = [
    {id: 1, nombre: "Huevo Duro", ingredientes: ["muzarella", "huevo duro", "oregano", "aceitunas"], precio: 700},
    {id: 2, nombre: "Fugazzeta", ingredientes: ["muzarella", "tomate", "oregano", "aceitunas"], precio: 650}, 
    {id: 3, nombre: "Muzarella", ingredientes: ["muzarella", "oregano", "aceitunas"], precio: 550},
    {id: 4, nombre: "Napolitana", ingredientes: ["muzarella", "tomate", "oregano", "aceitunas"], precio: 800},
    {id: 5, nombre: "Calabreza", ingredientes: ["muzarella", "longaniza", "oregano"], precio: 1000},
    {id: 6, nombre: "Especial", ingredientes: ["muzarella", "jamon", "oregano", "aceitunas"], precio: 900}
  ];
// a)
  const idImpar = Pizzas.filter(Pizzas => Pizzas.id%2!=0).map(Pizzas => Pizzas.nombre).join(', ');
  console.log (`Las pizzas con id impar son las de ${idImpar}`);

// ó
const pizzasConIdImpar = Pizzas.filter( elemento => elemento.id % 2 != 0 );

pizzasConIdImpar.forEach( elemento => {
    console.log(`La pizza ${elemento.nombre} tiene id ${elemento.id} y es impar`)
})

// b)
const menosPrecio = Pizzas.filter(Pizzas => Pizzas.precio<600).map(Pizzas => Pizzas.nombre).join(', ');
  if (menosPrecio) {
    console.log (`Si, las pizza/s que vale/n menos de $600 son la/s de ${menosPrecio}`);
  } else {
    console.log (`No tenemos pizzas que valgan menos de $600`);
  };

// ó
const pizzasConPrecioMenorDe600 = Pizzas.filter( elemento => elemento.precio < 600)

pizzasConPrecioMenorDe600.forEach( elemento => {
    console.log(`La pizza ${elemento.nombre} vale ${elemento.precio} y es menor a $ 600`)
})

// c)
const todosLosNombres = Pizzas.map(Pizzas => Pizzas.nombre).join(', ');
  console.log (`Las pizzas que tenemos son: ${todosLosNombres}`);
// d)
const todosLosPrecios = Pizzas.map(Pizzas => Pizzas.precio).join(', $');
  console.log (`Los precios de las pizzas son: $${todosLosPrecios}`);
// e)
const nombresYprecios = Pizzas.map(Pizzas => console.log(`La pizza de ${Pizzas.nombre} sale $${Pizzas.precio}`));

if(pizza.id % 2 == 1){
            console.log(pizza.nombre)
        }