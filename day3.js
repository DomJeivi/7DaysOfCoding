const perg1 = prompt('você seguir para área de Front-End ou seguir para a área de Back-End ?')
if( perg1 != 'front-end'| 'back-end'){
    console.log('Por favor encolha entre front-end ou back-end')}

if( perg1 == 'back-end'){
    const backend = prompt('gostaria de aprender C# ou aprender Java?')
    const fullstack = prompt(' gostaria de seguir se especializando na área escolhida ou desejaria seguir se desenvolvendo para se tornar Fullstack?')
    if ( fullstack != 'fullstack'|'gostaria de seguir na área escolhida'){
        console.log('Por favor escolha entre fullstack ou seguir na área escolhida')
    }
    
    let tec = prompt('quais são as tecnologias nas quais você gostaria de se especializar ?')
   
    
    while( tec !=  'nao'|'nenhuma'|'não'){
     tec = prompt('quais são as tecnologias nas quais você gostaria de se especializar ?')}

 console.log('Muito bem, então você está aprendendo '+tec)
}






if( perg1 == 'front-end'){
    const frontend = prompt('gostaria de aprender React ou aprender Vue?')
    const fullstack = prompt(' gostaria de seguir se especializando na área escolhida ou desejaria seguir se desenvolvendo para se tornar Fullstack?')
    if ( fullstack != 'fullstack'|'gostaria de seguir na área escolhida'){
        console.log('Por favor escolha entre fullstack ou seguir na área escolhida')
    }
    
    let tec = prompt('quais são as tecnologias nas quais você gostaria de se especializar ?')
   
    
    while( tec !=  'nao'|'nenhuma'|'não'){
     tec = prompt('quais são as tecnologias nas quais você gostaria de se especializar ?')}

 console.log('Muito bem, então você está aprendendo '+tec)
}



