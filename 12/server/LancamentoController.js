class LancamentoController {

	constructor (httpServer, lancamentoData) {
		httpServer.register("get", "/api/lancamentos", async function  (params, body) {
			const lancamentos = await lancamentoData.getLancamentos();
			return lancamentos;
		});

		httpServer.register("post", "/api/lancamentos", async function  (params, body) {
			const lancamento = body;
			await lancamentoData.saveLancamento(lancamento);
		});

		httpServer.register("delete", "/api/lancamentos/:idLancamento", async function  (params, body) {
			const idLancamento = params.idLancamento;
			await lancamentoData.deleteLancamento(idLancamento);
		});
	}
}

module.exports = LancamentoController;