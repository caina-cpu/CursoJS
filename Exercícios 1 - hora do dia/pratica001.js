function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if(hora < 6) {
    //boa madrugada
    img.src = 'madrugada.jpg'
    document.body.style.backgroundColor = 'black'
    msg.innerHTML += `<p>Boa madrugada!</p>`
} else if(hora < 12) {
    //bom dia
    img.src = 'foto-manha.jpg'
    document.body.style.backgroundColor = 'blue'
    msg.innerHTML += `<p>Bom dia!</p>`
} else if (hora < 18) {
    //boa tarde
    img.src = 'foto-tarde1.jpg'
    document.body.style.backgroundColor = 'yellow'
    msg.innerHTML += `<p>Boa tarde!</p>`
} else {
    //boa noite
    img.src = 'foto-noite.jpg'
    document.body.style.backgroundColor = 'purple'
    msg.innerHTML += `<p>Boa noite!</p>`
} 
}