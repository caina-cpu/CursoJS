let numero = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumber(n) {
    if(Number(numero.value) >= 1 && Number(numero.value) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(numero.value)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num = Number(numero.value)
    if(isNumber(num) && !inLista(num, valores)) {
        valores.push(num)
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado.`
        lista.appendChild(item)
        numero.value = ''
        numero.focus()
    } else {
        window.alert('[ERRO] Número inválido ou já encontrado na lista.')
    }
}

function finalizar() {
    res.innerHTML = ''
    let num = Number(numero.value)
    let tamanho = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    let ultimo = valores[valores.length - 1]
    let penultimo = valores[valores.length - 2]

    for(let pos in valores) {
        soma += valores[pos]
        if(valores[pos] > maior)
        maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores[pos]
    }

    media = soma / tamanho
    res.innerHTML += `<p>A quantidade de valores adicionados é igual a <strong>${tamanho}</strong>.</p>`
    res.innerHTML += `<p>A soma dos valores adicionados é igual a <strong>${soma}</strong>.</p>`
    res.innerHTML += `<p>O maior valor adicionado foi <strong>${maior}</strong>.</p>`
    res.innerHTML += `<p>O menor valor adicionado foi <strong>${menor}</strong>.</p>`
    res.innerHTML += `<p>A média dos valores adicionados é igual a <strong>${media}</strong>.</p>`
    res.innerHTML += `<p>O último número adicionado foi <strong>${ultimo}</strong>.</p>`
    res.innerHTML += `<p>O penúltimo número adicionado foi <strong>${penultimo}</strong>.</p>`
    res.innerHTML += `<p>A multiplicação entre os dois primeiros números adicionados é igual a <strong>${valores[0] * valores[1]}</strong>.</p>`
    res.innerHTML += `<p>A multiplicação entre os dois últimos números adicionados é igual a <strong>${ultimo * penultimo}</strong>.</p>`
    res.style.textAlign = 'center'
}