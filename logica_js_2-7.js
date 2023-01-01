function logica_js_2(){
	
	let nome = prompt("Qual o seu nome?");
	let idade = prompt("Quantos anos você tem?");
	let linguagem_programacao = prompt("Qual linguagem de programação você está estudando?");

	alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem_programacao + "!");

	/*EXERCÍCIO OPCIONAL
	utilização do else if ao invés de else para evitar que qualquer
	resposta diferente de 1 tenha o mesmo retorno que a resposta 2*/

	let gosta = prompt("Você gosta de estudar " + linguagem_programacao + "? Responda com o número 1 para SIM ou 2 para NÃO.");

	if (gosta == 1){
		alert("Muito bom! Continue estudando e você terá muito sucesso.");
	} else if (gosta == 2){ 
		alert("Ahh que pena... Já tentou aprender outras linguagens?");
	}

}