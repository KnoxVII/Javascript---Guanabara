let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
let pos = num.indexOf(1)

console.log(`Nosso vetor é o ${num}`)
console.log(`O terceiro valor do vetor é: ${num[2]}`)
console.log(`Quantas posições tem o vetor? ${num.length}`)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}