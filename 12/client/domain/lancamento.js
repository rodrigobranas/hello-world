class Lancamento {

	constructor (categoria, tipo, valor, idLancamento) {
		if (tipo !== "receita" && tipo !== "despesa") {
			throw new Error("Lançamento Inválido: Tipo deve ser receita ou despesa");
		}
		if (valor <= 0) {
			throw new Error("Lançamento Inválido: Valor deve ser maior que zero");
		}
		if (categoria === "") {
			throw new Error("Lançamento Inválido: A Categoria é obrigatória");
		}
		this.categoria = categoria;
		this.tipo = tipo;
		this.valor = valor;
		this.idLancamento = idLancamento;
	}

	getValorString () {
		return (this.tipo === "despesa") ? this.valor * -1 : this.valor;
	}
}