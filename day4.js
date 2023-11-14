

const random = Math.floor(Math.random()* (10 - 1 + 1) + 1)
let tentativas = 3

const tenta1 = prompt('adivinhe em que número de 10 a 0 estou pensando')   
if(tenta1 == random){
    
    console.log('Você acertou')
    
}
else{
    console.log('errou')
   
    tentativas -= 1

while(tentativas > 0){
    const tenta1 = prompt('adivinhe em que número de 10 a 0 estou pensando')   
if(tenta1 == random){
    
    console.log('Você acertou')
    
}
else{
    tentativas -=1
    console.log('errou')







}
}
}
console.log('Você perdeu')



    

































if(tenta1 == random){
    
    console.log('Você acertou')
    
}
else( console.log('tente novamente')  )
 const tenta2 = prompt('adivinhe em que número de 10 a 0 estou pensando')   
if(tenta2 == random){
    console.log('Você acertou')
}
    else(console.log('última chance'))
     const tenta3 = prompt('adivinhe em que número de 10 a 0 estou pensando')   
if(tenta3 == random){
    console.log('Você acertou')
}
    else(console.log('Você falhou') )
    console.log(random)