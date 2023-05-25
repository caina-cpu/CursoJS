let formulario = {nome: 'Cainã', 
sexo: 'masc', 
idade: 19, 
altura: 1.85,
peso: 80,
engordar(p=0) {
    this.peso += p
}}

formulario.engordar(100)
console.log(`Meu amigo ${formulario.nome} pesa ${formulario.peso}kg.`)

