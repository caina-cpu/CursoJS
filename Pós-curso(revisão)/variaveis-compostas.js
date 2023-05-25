let num = [3, 4, 7, 1, 2]
console.log(`O valor inicial do vetor é ${num}.`)
num[5] = 19
console.log(`O valor aTualizado do vetor é ${num}.`)
num.push(25)
console.log(`O valor ayualizado do vetor é ${num}.`)
console.log(`O comprimento atual do vetor é de ${num.length} valores.`)
num.sort(function(a,b) { //essa função é usada para corrigir a ordem crescente dos números e deixar ela por ordem de valor, e não por ordem de escrita (se não fosse corrigida, a ordem seria 1,19,2,25,3,4,7)
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(`A ordem crescente dos valores no vetor é ${num}.`)

for(var pos = 0; pos < num.length; pos++) { //a var pos é usada pra criar uma estrutura de repetição para os índices do vetor irem se repetindo e aumentando automaticamente
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
} //primeira maneira de fazer (mais complicada)

console.log('PAUSA')

for(var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
} //segunda maneira de fazer (mais fácil); lê-se 'para cada posição da var pos na variaves num, execute tal atividade (que nesse caso é o console.log'.

console.log('PAUSA')

let achar = num.indexOf(7) // usado para localizar um valor (que está entre parênteses) dentro do vetor; se o valor não for encontrado, ele retornará como valor -1.
if(achar == -1) {
    console.log('O valor não foi encontrado, tente novamente!')
} else {
    console.log(`O valor 7 está na posição ${achar}.`)
}



