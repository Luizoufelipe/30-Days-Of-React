// arrays vazios

let array1 = new Array();
// ou
const array2 = Array();
// ou
const array3 = [];


//Criando arrays com valores
const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers1)
console.log('Number of numbers:', numbers1.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// Criando Array usando .split()

let nomeCompleto = "Luiz Felipe de Oliveira Batista"
const nomeSeparado = nomeCompleto.split(" ")

console.log("Nome separado: ", nomeSeparado)

// Acessando um valor em um Array

const countries2 = [
  'Albania',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
] // List of countries

console.log(countries2) // -> all countries in array
console.log("país na posição (índice) [0]", countries2[0]) //  -> Albania
console.log("país na posição (índice) [4]: ", countries2[4]) //  -> Kenya

let lastIndex = countries2.length - 1
console.log("País na última posição (índice): ", countries2[lastIndex]) //  -> Kenya

// Alterando o valor de um Array

let countries3 = countries2
let lastIndex3 = countries3.length - 1
countries3[lastIndex3] = "South Korea" // Kenia é trocado por South Korea

console.log("País na última posição (índice) de countries3: ", countries3[lastIndex3]);

// Concatenação de arrays

let pais = ["pai", "mãe"]
let filhos = ["caçula", "primogênito", "irmão do meio"]
const familia = pais.concat(filhos)
console.log(familia);

// retornando o índice de um elemento

console.log("Índice de caçula: ", familia.indexOf("caçula"));
console.log("Índice de primo: ", familia.indexOf("primo")); // -1 pois não existe

// conferindo se tal item existe no array

let testIndex = familia.indexOf("primo")

if (testIndex != -1) {
    console.log("Esta pessoa pertence à família");
}else{
    console.log("Esta pessoa NÃO pertence à família");
}

// Com o operador ternário

testIndex != -1
    ? console.log("Esta pessoa pertence à família")
    : console.log("Esta pessoa NÃO pertence à família")

// com .includes()

console.log("Existe o elemento 'primo' em familia? ", familia.includes("primo"));

// toString em JS
console.log(familia.toString());

// com .join()
console.log(familia.join(" # "));

const numbers = [1, 2, 3, 4, 5]

// Com .slice(index a, index b) -> retorna o intervalo que for passado nos parâmetros, desconsiderando 
// apenas o último índice
console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

// com .splice()
let f1 = [ 'pai', 'mãe', 'caçula', 'primogênito', 'irmão do meio' ]
let f2 = [ 'pai', 'mãe', 'caçula', 'primogênito', 'irmão do meio' ]
let f3 = [ 'pai', 'mãe', 'caçula', 'primogênito', 'irmão do meio' ]
let f4 = [ 'pai', 'mãe', 'caçula', 'primogênito', 'irmão do meio' ]

console.log("O que é cortado com o .splice(sem parâmetros): ", "pós .splice" , f1.splice(), f1);
console.log("O que é cortado com o .splice(0): ", f2.splice(0), "pós .splice" , f2);
console.log("O que é cortado com o .splice(0, 3): ", f3.splice(0, 3), "pós .splice" , f3);
console.log("O que é cortado com o .splice(1, 1, e adiciona 'primo'): ", f4.splice(1, 1, "primo"), "pós .splice" , f4);

// adicionando valores com push(ao final do Array) e unshift(ao início)
let f5 =  [ 'pai', 'mãe', 'caçula', 'primogênito', 'irmão do meio' ]
f5.unshift("cachorro")
console.log("f5 att: tamanho: ", f5.push("primo", "tia", "tio"), f5);

// excluindo valores com pop(ao final) e shift(ao início)
console.log("Remove no final: ", f5.pop());
console.log("Remove no início: ", f5.shift());
console.log(f5);

// Ordenando de forma crescente

console.log(familia.sort());


// Arrays podem armazenar outros arrays também
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]