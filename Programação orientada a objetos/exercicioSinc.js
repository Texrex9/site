// Função que carrega as informações de um produto simulado.
// Recebe um parâmetro `id` e retorna uma Promise que resolve após um atraso de 2 segundos.
// O objeto retornado contém `id`, `nome` e `preco`.
function CarregaProduto(id) {
    return new Promise((resolve, reject) => {
        // Simula a latência com setTimeout
        setTimeout(() => {
            // Monta o objeto produto após o atraso
            const produto = {
                id: id,
                nome: "Produto " + id,
                preco: (id * 10).toFixed(2)
            };
            // Resolve a Promise com o objeto criado
            resolve(produto);
        }, 2000); // 2000ms = 2 segundos
    });
}

// -------------------------------------------------------------
// Uso com .then()/.catch() para demonstrar conversão JSON
// -------------------------------------------------------------
CarregaProduto(1)
    .then(prod => {
        console.log("Produto carregado:", prod);

        // Converte o objeto em JSON
        const json = JSON.stringify(prod);
        console.log("JSON do produto:", json);

        // Reverte de volta para objeto
        const obj = JSON.parse(json);
        console.log("Objeto restaurado:", obj);
    })
    .catch(err => {
        console.error("Erro ao carregar produto (then):", err);
    });

// -------------------------------------------------------------
// Versão usando async/await com try/catch
// -------------------------------------------------------------
async function exemploAsync(id) {
    try {
        const produto = await CarregaProduto(id);
        console.log("[async] Produto carregado:", produto);

        const json = JSON.stringify(produto);
        console.log("[async] JSON do produto:", json);

        const obj = JSON.parse(json);
        console.log("[async] Objeto restaurado:", obj);
    } catch (error) {
        console.error("Erro ao carregar produto (async):", error);
    }
}

// Chamada do exemplo async
exemploAsync(1);