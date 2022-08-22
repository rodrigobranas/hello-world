class FetchHttpClient {

	async get (url) {
		const response = await fetch(url);
		return response.json();
	}

	async post (url, data) {
		await fetch(url, { 
			method: "post", 
			headers: { "content-type": "application/json" }, 
			body: JSON.stringify(data)
		});
	}

	async delete (url) {
		await fetch(url, { 
			method: "delete" 
		});
	}
}