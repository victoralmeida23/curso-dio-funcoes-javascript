function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

const pessoa1 = {
    nome: "maria",
    idade: 30
};
const pessoa2 = {
    nome: "joana",
    idade: 26
};
const animal = {
    nome: "toby",
    idade: "7",
    raca: "viraLata",
};

console.log(calculaIdade.call(pessoa2, 20));
console.log(calculaIdade.apply(animal, [5]));