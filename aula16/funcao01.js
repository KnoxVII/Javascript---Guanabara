function parImpar(numero) {
    if (numero%2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

let res = parImpar(15) 
console.log(res)