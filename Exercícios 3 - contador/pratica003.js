function contar() {
    var inicio = document.getElementById('início')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resp = document.getElementById('respostas')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados.')
        resp.innerHTML = `Impossível contar!`
    } else {
        resp.innerHTML = '<p><strong>Contagem: </strong></p>'
        var n1 = Number(inicio.value)
        var n2 = Number(fim.value)
        var n3 = Number(passo.value)

        if(n3 <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            n3 = 1
        }
        if(n1 < n2) {
            //contagem crescente
            for(var c = n1; c <= n2; c += n3){
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //conbtagem regressiva
            for(var c = n1; c >= n2; c -= n3) {
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resp.innerHTML += `\u{1F3C1}`
    }
}
