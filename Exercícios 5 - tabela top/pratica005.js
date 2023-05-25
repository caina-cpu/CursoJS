let numero = document.querySelector('input#num')
let lista = document.querySelector('select#flista')
let respfinal = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}    

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O valor ${numero.value} foi adicionado.`
        lista.appendChild(item)
        respfinal.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tamanho = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) 
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tamanho
        respfinal.innerHTML = ''
        respfinal.innerHTML += `<p>Você adicionou ${tamanho} valores.</p>`
        respfinal.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        respfinal.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        respfinal.innerHTML += `<p>A soma dos valores adicionados é igual a ${soma}.</p>`
        respfinal.innerHTML += `<p>A média dos valores adicionados é igual a ${media}.</p>`
    } 
}

/*
Coisas que tem que ter:
array : acho que sei
quantidade de números no array: sei
maior valor do array: não sei
menor valor do array: não sei
soma dos valores do array: acho que sei
média dos valor do array: acho que sei
*/