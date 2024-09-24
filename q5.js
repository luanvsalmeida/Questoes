function inverterString(str) {
    let stringInvertida = '';
    
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

// String a ser invertida 
const entrada = "!dlroW ,olleH"; 

const resultado = inverterString(entrada);
console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);