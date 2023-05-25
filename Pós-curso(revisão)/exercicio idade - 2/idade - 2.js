function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var dadoBruto = document.getElementById('ano')
    var genero = document.getElementsByName('hsex')
    var gen = ''
    var idade = ano - Number(dadoBruto.value)
    var res = document.getElementById('resp')

    var img = document.createElement('img')
    img.setAttribute('id', 'imagem')

    if(dadoBruto.value.length == 0 || Number(dadoBruto.value) > ano || Number(dadoBruto.value) < 1900) {
        window.alert('[ERRO] Coloque um ano válido')
    } else {
        if(genero[0].checked) {
            var gen = 'Masculino'
            if(idade < 6) {
                img.src = 'bebe.jpg'
            } else if(idade < 12) {
                img.src = 'menino-criança.jpg'
            } else if(idade < 18) {
                img.src = 'menino-adolescente.jpg'
            } else if (idade < 60) {
                img.src = 'homem-adulto.jpg'
            } else if (idade >= 60) {
                img.src = 'homem-idoso.jpg'
            }
        } else if(genero[1].checked) {
            var gen = 'Feminino'
            if(idade < 6) {
                img.src = 'bebe.jpg'
            } else if(idade < 12) {
                img.src = 'menina-criança.jpg'
            } else if(idade < 18) {
                img.src = 'menina-adolescente.jpg'
            } else if (idade < 60) {
                img.src = 'mulher-adulta.jpg'
            } else if (idade >= 60) {
                img.src = 'mulher-idosa.jpg'
            }
        } else if(genero[2].checked) {
            var gen = 'Geladeira CONSUL 3 portas'
            img.src = 'geladeira.jpg'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você se identifica como gênero <strong>${gen}</strong> e tem <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}