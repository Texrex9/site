function CarregaProduto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const produto = {
        id: id,
        nome: "Produto " + id,
        preco: (id * 10).toFixed(2),
      };
      resolve(produto);
    }, 2000);
  });
}

CarregaProduto(1)
  .then((prod) => {
    console.log("Produto carregado:", prod);

    const json = JSON.stringify(prod);
    console.log("JSON do produto:", json);

    const obj = JSON.parse(json);
    console.log("Objeto restaurado:", obj);
  })
  .catch((err) => {
    console.error("Erro ao carregar produto (then):", err);
  });

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

exemploAsync(1);
