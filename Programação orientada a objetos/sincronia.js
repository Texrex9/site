// Função assíncrona que simula a busca de dados de um servidor.
// Retorna uma Promise que resolve com sucesso ou rejeita com erro após um atraso.
function buscarDadosdoServidor() {
    // Retorna uma nova Promise, que é um objeto usado para operações assíncronas.
    // A Promise aceita dois parâmetros: resolve (para sucesso) e reject (para erro).
    return new Promise((resolve, reject) => {
        // Exibe uma mensagem no console indicando que a busca está começando.
        console.log("Buscando dados do servidor");

        // setTimeout simula um atraso de 2 segundos (2000 milissegundos) para representar o tempo de resposta do servidor.
        setTimeout(() => {
            // Gera um valor booleano aleatório: true se Math.random() > 0.5, simulando sucesso ou falha.
            let sucesso = Math.random() > 0.5;

            // Se sucesso for true, resolve a Promise com uma mensagem de sucesso.
            if (sucesso) {
                resolve("Dados recebidos com sucesso");
            } else {
                // Caso contrário, rejeita a Promise com uma mensagem de erro.
                reject("Falha ao buscar dados do servidor");
            }
        }, 2000); // Fim do setTimeout, executado após 2 segundos.
    }); // Fim da Promise.
}
/*
// Chama a função buscarDadosdoServidor, que retorna uma Promise.
// O método .then() é executado se a Promise for resolvida (sucesso).
buscarDadosdoServidor()
.then((mensagem) => {
    // Exibe a mensagem de sucesso no console.
    console.log(mensagem);
})
// O método .catch() é executado se a Promise for rejeitada (erro).
.catch((erro) => {
    // Exibe o erro no console como um erro.
    console.error(erro);
});
*/

const minhaFuncaoAssincrona = async () => {
    try{
        const resultado = await buscarDadosdoServidor();
        console.log(resultado);
    }
    catch(erro){
        console.erro(erro);
    }


}
minhaFuncaoAssincrona();
console.log("Fim");

