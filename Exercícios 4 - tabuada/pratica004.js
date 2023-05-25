function calcular() {
    var num = document.getElementById('num')
    var tabu = document. getElementById('resposta')

    if(num.value.length == 0) {
        window.alert('[ERRO] Digite um número válido!')
    } else {
        var n = Number(num.value)
        var c = 1
        tabu.innerHTML = ''
        for(c = 1;c <= 100; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabu.appendChild(item)
        }
    } 

    
}