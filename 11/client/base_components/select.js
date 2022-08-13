class Select {
	constructor (id) {
		this.element = document.createElement("select");
		this.element.id = id;
	}

	addOption (text) {
		const option = document.createElement("option");
		option.text = text;
		this.element.appendChild(option);
	}
}