
let frutas = []
let congelados= []
let laticinios= []
let doces = []



let perg1 = prompt('o que você gostaria de comprar?')
let seletor = prompt("adicionar em Frutas(1) congelados(2) laticinios(3) ou doces(4)? ")
if(seletor == 1){frutas.push(perg1)}
if(seletor == 2){congelados.push(perg1)}
if(seletor == 3){laticinios.push(perg1)}
if(seletor == 4){doces.push(perg1)}
let perg2 = prompt('digite (1) para continuar escolhendo  outros elementos ou (2) para parar suas compras')
if (perg2 == 1){
    let perg3=1

while (perg3 == 1){
    let perg1 = prompt('o que você gostaria de comprar?')
let seletor = prompt("adicionar em Frutas(1) congelados(2) laticinios(3) ou doces(4)? ")
if(seletor == 1){frutas.push(perg1)}
if(seletor == 2){congelados.push(perg1)}
if(seletor == 3){laticinios.push(perg1)}
if(seletor == 4){doces.push(perg1)}
let perg4 = prompt('digite (1) para adicionar outro elemento ou (2) para parar suas compras')
if (perg4 == 2){
    console.log('Suas frutas: '+frutas,'seus doces: '+ doces,'seus congelados: '+congelados,'seus laticinios: '+ laticinios)
    break

    
}
}
}








