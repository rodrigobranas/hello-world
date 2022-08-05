class Grafico {
	constructor () {
		this.element = document.createElement("div");
		this.element.className = "grafico";
		this.cores = ["red", "yellow", "green", "blue"];
	}

	adicionarColuna (valor, descricao) {
		const coluna = document.createElement("div");
		coluna.className = "grafico-coluna";
		const cor = document.createElement("div");
		cor.style.height = (valor*100)/10000;
		cor.style.background = this.cores.pop();
		coluna.appendChild(cor);
		const nomeDoMes = document.createElement("div");
		nomeDoMes.className = "grafico-coluna-texto";
		nomeDoMes.innerText = descricao;
		coluna.appendChild(cor);
		coluna.appendChild(nomeDoMes);
		this.element.appendChild(coluna);
	}
}