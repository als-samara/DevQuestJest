/* TESTE DE UNIDADE */

const calcularValorPedido = require('./calcular-valor-pedido') // importando a função para testar

it('não deve cobrar valor de frete quando o valor dos produtos for superior a 500', () => {

    // ARRANGE - arrumar o obj de teste
    const meuPedido = {
        itens: [
            { nome: 'Arco Encantado', valor: 2000 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    // ACT - o que vai ser testado
    const resultado = calcularValorPedido(meuPedido);

    // ASSERT - qual o resultado esperado
    expect(resultado).toBe(2000);
})

it('deve cobrar valor de frete quando o valor dos produtos for menos do que 500', () => {

    // ARRANGE - arrumar o obj de teste
    const meuPedido = {
        itens: [
            { nome: 'Machadinha', valor: 300 },
            { nome: 'Entrega', valor: 50, entrega: true }
        ]
    }

    // ACT
    const resultadoComFrete = calcularValorPedido(meuPedido);

    // ASSERT - qual o resultado esperado
    expect(resultadoComFrete).toBe(350);

});

it('não deve cobrar valor de frete caso o valor do pedido seja EXATAMENTE 500', () => {
    // ARRANGE - arrumar o obj de teste
    const meuPedido = {
        itens: [
            { nome: 'Machadinha', valor: 500 },
            { nome: 'Entrega', valor: 50, entrega: true }
        ]
    }

    // ACT
    const resultado500 = calcularValorPedido(meuPedido);

    // ASSERT - qual o resultado esperado
    expect(resultado500).toBe(500);
})

it('deve adicionar 20% ao valor da entrega caso o estado seja RS', () => {

    const pedidocomEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'Sanduíche', valor: 40 },
            { nome: 'Entrega', valor: 20, entrega: true}
        ]
    }

    const resultadoEntregaAscrescida = calcularValorPedido(pedidocomEstadoRS);

    expect(resultadoEntregaAscrescida).toBe(64)
})

it('deve adicionar 20% ao valor da entrega caso o estado seja SC', () => {

    const pedidocomEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'Sanduíche', valor: 40 },
            { nome: 'Entrega', valor: 20, entrega: true}
        ]
    }

    const resultadoEntregaAscrescida = calcularValorPedido(pedidocomEstadoSC);

    expect(resultadoEntregaAscrescida).toBe(64)
})

it('não deve adicionar 20% ao valor da entrega caso o estado seja SP', () => {

    const pedidocomEstadoSC = {
        estado: 'SP',
        itens: [
            { nome: 'Sanduíche', valor: 40 },
            { nome: 'Entrega', valor: 20, entrega: true}
        ]
    }

    const resultadoEntregaAscrescida = calcularValorPedido(pedidocomEstadoSC);

    expect(resultadoEntregaAscrescida).toBe(60)
})