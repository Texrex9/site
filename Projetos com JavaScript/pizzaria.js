/**
 * FUNÇÃO: fazerPedido()
 * OBJETIVO: Capturar os dados selecionados pelo usuário (sabor, tamanho e ingredientes),
 * validar se sabor e tamanho foram selecionados, montar uma string descritiva do pedido
 * e exibir em dois lugares: na página (parágrafo) e em um alert
 * 
 * FLUXO:
 * 1. Obtém o valor selecionado do sabor da pizza
 * 2. Obtém o valor selecionado do tamanho da pizza
 * 3. Valida se ambos foram preenchidos (são obrigatórios)
 * 4. Se algum estiver vazio, exibe alert de erro e interrompe a execução
 * 5. Se válido, recebe todos os ingredientes extras selecionados em um array
 * 6. Monta a string do pedido com sabor, tamanho e ingredientes (se houver)
 * 7. Exibe o pedido na página (elemento parágrafo com ID "pedido")
 * 8. Exibe o pedido em um alert para o usuário
 */
function fazerPedido() {
    // Obtém o valor selecionado no select de sabor
    const sabor = document.getElementById("sabor").value;
    
    // Obtém o valor selecionado no select de tamanho
    const tamanho = document.getElementById("tamanho").value;

    // VALIDAÇÃO: Verifica se sabor E tamanho foram selecionados (ambos são obrigatórios)
    if (!sabor || !tamanho) {
        alert("Nenhum pedido foi feito. Selecione um sabor e um tamanho.");
        return; // Encerra a função se a validação falhar
    }

    // Obtém todos os ingredientes extras selecionados e os converte em um array
    // Array.from() converte a coleção HTML em array
    // .map() extrai apenas o valor (.value) de cada opção selecionada
    const ingredientes = Array.from(document.getElementById("ingredientes").selectedOptions).map(option => option.value);

    // Monta a string do pedido com sabor e tamanho
    let pedido = `Pedido: Pizza ${sabor}, tamanho ${tamanho}`;
    
    // Se existem ingredientes extras selecionados, adiciona à string do pedido
    if (ingredientes.length > 0) {
        // .join(', ') une todos os ingredientes separados por vírgula e espaço
        pedido += `, com ingredientes extras: ${ingredientes.join(', ')}`;
    }

    // Exibe o pedido no parágrafo da página (elemento com ID "pedido")
    document.getElementById("pedido").innerText = pedido;

    // Exibe o pedido em um alert para o usuário confirmar o que foi pedido
    alert(pedido);
}

/**
 * FUNÇÃO: mostrarPedido()
 * OBJETIVO: Exibir o pedido atualmente armazenado na página em um alert
 * 
 * FLUXO:
 * 1. Obtém o texto do parágrafo onde o pedido está armazenado
 * 2. Remove espaços em branco desnecessários (trim)
 * 3. Verifica se existe um pedido válido
 * 4. Se existir, exibe em um alert
 * 5. Se não existir (campo vazio), informa que nenhum pedido foi feito
 */
function mostrarPedido(){
    // Obtém o texto do pedido armazenado no parágrafo
    // .trim() remove espaços em branco no início e fim da string
    const pedido = document.getElementById("pedido").innerText.trim();
    
    // Verifica se existe um pedido válido (string não vazia)
    if(pedido){
        // Se houver pedido, exibe em um alert
        alert(pedido);
    } else {
        // Se não houver pedido, informa que nenhum foi feito ainda
        alert("Nenhum pedido feito ainda.");
    } 
}

/**
 * FUNÇÃO: novoPedido()
 * OBJETIVO: Limpar todos os campos do formulário e o pedido exibido na página
 * para permitir que o usuário faça um novo pedido do zero
 * 
 * FLUXO:
 * 1. Reseta o select de sabor para a opção vazia
 * 2. Reseta o select de tamanho para a opção vazia
 * 3. Desmarca todos os ingredientes extras selecionados
 * 4. Limpa o texto do pedido exibido na página
 */
function novoPedido() {
    // Reseta o select de sabor para o valor padrão (vazio)
    document.getElementById("sabor").value = "";
    
    // Reseta o select de tamanho para o valor padrão (vazio)
    document.getElementById("tamanho").value = "";

    // Acessa o select de ingredientes (que é um select múltiplo)
    const ingredientesSelect = document.getElementById("ingredientes");
    
    // Desmarca todas as opções que estão selecionadas
    // Array.from() converte as opções em um array
    // .forEach() itera sobre cada opção e define .selected = false
    Array.from(ingredientesSelect.options).forEach(opt => opt.selected = false);

    // Limpa o texto do pedido que estava exibido na página
    document.getElementById("pedido").innerText = "";
}


