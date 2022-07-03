const saldoInicial = 0
const janeiro = new Mes("janeiro", saldoInicial);
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1000));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 300));
janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 300));
janeiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 500));
janeiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 300));
janeiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 100));
janeiro.calcularSaldo();
console.log(janeiro);

const fevereiro = new Mes("fevereiro", janeiro.totalizador.saldo);
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 250));
fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 500));
fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 1000));
fevereiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 400));
fevereiro.calcularSaldo();
console.log(fevereiro)

const marco = new Mes("marco", fevereiro.totalizador.saldo);
marco.adicionarLancamento(new Lancamento("Salário", "receita", 4000));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
marco.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
marco.adicionarLancamento(new Lancamento("Internet", "despesa", 200));
marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 500));
marco.adicionarLancamento(new Lancamento("Lazer", "despesa", 800));
marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 1000));
marco.adicionarLancamento(new Lancamento("Condomínio", "despesa", 400));
marco.calcularSaldo();
console.log(marco);