
function fazerPedido() {
    const sabor = document.getElementById("sabor").value;
    
    const tamanho = document.getElementById("tamanho").value;

    if (!sabor || !tamanho) {
        alert("Nenhum pedido foi feito. Selecione um sabor e um tamanho.");
        return;
    }

    const ingredientes = Array.from(document.getElementById("ingredientes").selectedOptions).map(option => option.value);

    let pedido = `Pedido: Pizza ${sabor}, tamanho ${tamanho}`;
    
    if (ingredientes.length > 0) {
        pedido += `, com ingredientes extras: ${ingredientes.join(', ')}`;
    }

    document.getElementById("pedido").innerText = pedido;

    alert(pedido);
}

function mostrarPedido(){
    const pedido = document.getElementById("pedido").innerText.trim();
    
    if(pedido){
        alert(pedido);
    } else {
        alert("Nenhum pedido feito ainda.");
    } 
}

function novoPedido() {
    document.getElementById("sabor").value = "";
    
    document.getElementById("tamanho").value = "";

    const ingredientesSelect = document.getElementById("ingredientes");
    
    Array.from(ingredientesSelect.options).forEach(opt => opt.selected = false);

    document.getElementById("pedido").innerText = "";
}

