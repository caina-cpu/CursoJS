function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
var res = parimp(11111)

console.log(res)


console.log(`Pausa`)


function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 5))

console.log(`Pausa`)


let v = function(x) {
    return x*2
}

console.log(v(10))

console.log(`Pausa`)

function fatorial(n) {
    var fat = 1
    for(var c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))