function Calcular(aidade){

let nota = window.prompt("Qual é a idade humana do cachorro?");
alert("A IDADE DELE É 17 ANOS, É UMA CRIANÇA");
let idadeCanina = prompt("Qual a idade do cachorrinho?");


mostraResultado.textContent = "Resultado: a idade humana do cachorrinho é " + 15;
}

//aqui trás as notas do html e tira o conteúdo do texto apenas (sem códigos, fica feio)
let idadeCanina = parseFloat(document.querySelector(".crianca").textContent);
let idadeCanina = parseFloat(document.querySelector(".adolescente").textContent);
let idadeCanina = parseFloat(document.querySelector(".jovem").textContent);
let idadeCanina = parseFloat(document.querySelector(".adulto").textContent);
let idadeCanina = parseFloat(document.querySelector(".idoso").textContent);

console.log(notaSegTrim);

//variavel que armazena o conteúdo do resultado
let aprovacaoFinal = document.querySelector(".idadefinal");

let faltando = document.querySelector(".resultado");

//parte que diz se está dentro da faixa etária ou não 
if(media <= 11){
idadeFinal.textContent = "O cachorro é uma CRIANÇA";
}

if(media >=12 ){
idadeFinal.textContent = "O cachorro é uma ADOLESCENTE";
}

if(media >= 18){
idadeFinal.textContent = "O cachorro é um JOVEM";
}
if(media >= 30){
idadeFinal.textContent = "O cachorro é um ADULTO";
}

if(media >59){
idadeFinal.textContent = "O cachorro é um IDOSO";
}





