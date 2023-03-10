function logica_js_1(){
		
	let numeroUm = 1;
	let stringUm = '1';
	let numeroTrinta = 30;
	let stringTrinta = '30';
	let numeroDez = 10;
	let stringDez = '10';

	/*Encadeamento de ifs ao invés de utilização do operador &&
	para evitar que se retorne a mensagem contida no else
	quando as variáveis possuem o mesmo tipo e valor
	A utilização do operador && poderia passar uma mensagem
	indesejada, pois a mensagem do else seria informada se
	o valor fosse diferente ou o tipo fosse igual e não
	apenas quando o valor fosse diferente*/

	if (numeroUm == stringUm){
		if (numeroUm !== stringUm){
			console.log('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes');
		}
	}
	else {
		console.log('As variáveis numeroUm e stringUm não têm o mesmo valor');
	}

	/*Encadeamento de ifs ao invés de utilização do operador &&
	para evitar que se retorne a mensagem contida no else
	quando as variáveis possuem valores diferentes e mesmo tipo
	A utilização do operador && poderia passar uma mensagem
	indesejada, pois a mensagem do else seria informada se
	o valor fosse diferente ou o tipo fosse diferente e não
	apenas quando o tipo fosse diferente*/

	if (numeroTrinta == stringTrinta){
		if (numeroTrinta === stringTrinta){
			console.log('As variáveis numeroTrinta e stringTrinta têm o mesmo valor e o mesmo tipo');
		} else {
			console.log('As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo');
		}
	}

	/*Encadeamento de ifs ao invés de utilização do operador &&
	para evitar que se retorne a mensagem contida no else
	quando as variáveis possuem o mesmo tipo e valor
	A utilização do operador && poderia passar uma mensagem
	indesejada, pois a mensagem do else seria informada se
	o valor fosse diferente ou o tipo fosse igual e não
	apenas quando o valor fosse diferente*/
	
	if (numeroDez == stringDez){
		if (numeroDez !== stringDez){
			console.log('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes');
		}
	} else {
		console.log('As variáveis numeroDez e stringDez não têm o mesmo valor');
	}
}
