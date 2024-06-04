// Crie uma função para inverter os números do Array

const numArray = [1, 2, 3, 4, 5];

//Use a seguinte função para sua resposta
function reverseArray(x) {
	const arr = x.reverse();
	return arr;
}

reverseArray(numArray);

module.exports = { reverseArray };
