// const input = process.argv[2] // node js not JavaScript
// process.argv : arg pour argument, v pour variable
// const input = process.argv[0] 1er argument récupéré = chemin node.exe
// const input = process.argv[1] 2ème argument récupéré = chemin fichier program.js
// const input = process.argv[2] 3ème argument récupéré et + = user input (ici output de node program.js Laurine => hello world laurine)
// console.log('hello world ' + input);

const string = process.argv[2]
console.log(string); // pr faire apparaître mon nom entier ss toucher à code source, mettre "Laurine Da Silva" entre guillemets ds ligne de commandes

const array = string.split(","); // cf exo 5 pseudocode -> on a pseudoconstruit une fonction split
// array = source
console.log(array);


// Convertir types en JS
const numbers = []; // numbers = destination
for (let i = 0 ; i < array.length; i++) { // loop code block
    const candidate = array[i] // type string
    // objective: convert candidate into a number
    const number = parseInt(candidate, 10); //parseINT(string, radix)
    numbers.push(number);
}
console.log(numbers);