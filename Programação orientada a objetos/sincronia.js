function buscarDadosdoServidor() {
  return new Promise((resolve, reject) => {
    console.log("Buscando dados do servidor");

    setTimeout(() => {
      let sucesso = Math.random() > 0.5;

      if (sucesso) {
        resolve("Dados recebidos com sucesso");
      } else {
        reject("Falha ao buscar dados do servidor");
      }
    }, 2000);
  });
}

const minhaFuncaoAssincrona = async () => {
  try {
    const resultado = await buscarDadosdoServidor();
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
};

minhaFuncaoAssincrona();
console.log("Fim");
