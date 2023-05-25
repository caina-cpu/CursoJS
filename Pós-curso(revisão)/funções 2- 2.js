function votar(n) {
    if(n < 16) {
        return 'Não pode votar!'
    } else if(n < 18 || n >= 65) {
        return 'Voto opcional!'
    } else {
        return 'Vai votar, meliante!'
    }
}//let voto = votar(70) para fazer, podemos jogar a chamado dentro de uma variável, ou colocar direto no console.log

console.log(votar(15))
console.log('PAUSA')

function soma(n1=0, n2=0) { //esse valor de 0 é usado como um valor já atribuído para caso não coloque os valores de n1 e n2 na chamada depois
    return n1 + n2
}

console.log(soma(5, 18))
console.log('PAUSA')

let teste = function(n) { //é possível uma variável contar funções
    return n*10
}

console.log(teste(7)) // aqui estou determinando o parâmetro para a variável, que será atribuído para a função que está dentro dela
console.log('PAUSA')

function calc(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(calc(5))
console.log('PAUSA')

