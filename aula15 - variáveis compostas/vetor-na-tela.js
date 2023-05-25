var valores = [8, 1 ,7 ,4, 2, 9]

/*for(pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

console.log(`PAUSA!`)

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`Eu quero o valor ${valores.indexOf(9)}`)