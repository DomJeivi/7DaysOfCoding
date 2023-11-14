const nome = prompt('Qual é seu nome?');

console.log('óla '+nome);

const idade = prompt('qual a sua idade?');

console.log(idade+ ', ok');
if(idade<18){
    console.log('Somos apenas para maiores de 18 anos');
}

const linguagem1 = prompt('qual linguagem gostaria de aprender?');

console.log('Olá '+nome , 'você tem ' + idade, ' anos e já está aprendendo ' + linguagem1);

const linguagem2 = prompt('Você gosta de estudar '+linguagem1)
if(linguagem2 == 'sim'){
   console.log( 'Muito bom! Continue estudando e você terá muito sucesso. ')
if(linguagem2 != 'sim'){
    console.log('Ahh que pena... Já tentou aprender outras linguagens?')
}



}


