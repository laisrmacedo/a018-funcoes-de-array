// Crie um array de números que contenha 8 números.
let arrayDeNumeros = [10, 5, 2, 55, 3, 100, 74, 11]

// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
const triplos = arrayDeNumeros.map(item => item * 3) 
console.log(triplos)

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = arrayDeNumeros.map((item) => {
    return item / 2
})
console.log(metades)