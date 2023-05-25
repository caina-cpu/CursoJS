/*let valores = [4, 5, 6, 7, 8, 9, 10, 200]
let tamanho = valores.length
let soma = 0
let media = 0
let maior = valores[0]
let menor = valores[0]

for(let pos in valores) {
    soma += valores[pos]
    if(valores[pos] > maior) 
    maior = valores[pos]
    if(valores[pos] < menor)
    menor = valores[pos]
}

media = soma / tamanho

console.log(`O maior valor é ${maior}.`)
console.log(`O menor valor é ${menor}.`)
console.log(`A soma entre os valores é ${soma}.`)
console.log(`O média entre os valores é ${media}.`)
console.log(`O tamanho é de é ${tamanho} valores.`)*/

var numero = 10
var valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(var pos in valores) {
    console.log(numero * valores[pos])
}


