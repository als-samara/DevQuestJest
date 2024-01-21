const acrescimoValorEntrega = 0.2;

// função com argumento chamado pedido
const calcularValorPedido = pedido => {
    // acessa os itens do pedido e os filtra para incluir apenas aqueles cuja propriedade entrega é falsa.
    const valorProdutos = pedido.itens.filter(item => !item.entrega)
    // o reduce soma os valores dos itens que retantes (que possuem entrega true) totalPedidos é o acumulador, e pedidoAtual é cada item no array. O valor inicial do acumulador é 0.
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    // aqui filtra os pedidos que tem a variavel entrega verdadeira
    const entrega = pedido.itens.filter(item => item.entrega);

    // acrescentando a condição de Estado após criar o teste 4
    if(pedido.estado === 'RS' || pedido.estado === 'SC'){
        const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega;
        entrega[0].valor += acrescimoEntrega;
    }

    /*
    if(valorProdutos >= 500) {
        return valorProdutos;
    } else {
        return valorProdutos + entrega[0].valor
    }
    */
   // IF TERNÁRIO: (código refatorado com os testes rodando, facilitando a refatoração)
   return (valorProdutos >= 500) ? valorProdutos : valorProdutos + entrega[0].valor;
}

module.exports = calcularValorPedido;

// console.log(calcularValorPedido(meuPedido));