const express = require("express");

class HttpServer {

	constructor () {
		this.app = express();
		this.app.use(express.json());
		this.app.use("/", express.static("./client"));
	}

	register (method, url, callback) {
		this.app[method](url, async function  (req, res) {
			const output = await callback(req.params, req.body);
			res.json(output);
		});
	}

	listen (port) {
		this.app.listen(port);
	}
}

module.exports = HttpServer;