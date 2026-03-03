// Define a função que troca as cores de fundo das divs ao ser chamada
function trocaCor()
{
    // Obtém o elemento HTML com id 'div-1' e armazena na variável div1
    const div1 = document.getElementById("div-1");
    // Obtém o elemento HTML com id 'div-2' e armazena na variável div2
    const div2 = document.getElementById("div-2");
    // Obtém o elemento HTML com id 'div-3' e armazena na variável div3
    const div3 = document.getElementById("div-3");

    // Altera a cor de fundo da div1 para vermelho (red)
    div1.style.backgroundColor = "red";
    // Altera a cor de fundo da div2 para verde claro (lightgreen)
    div2.style.backgroundColor = "lightgreen";
    // Altera a cor de fundo da div3 para azul claro (lightblue)
    div3.style.backgroundColor = "lightblue";
}

// Define a função que restaura as cores originais das divs para a cor padrão
function restaurarCor()
{
    // Obtém o elemento HTML com id 'div-1' e armazena na variável div1
    const div1 = document.getElementById("div-1");
    // Obtém o elemento HTML com id 'div-2' e armazena na variável div2
    const div2 = document.getElementById("div-2");
    // Obtém o elemento HTML com id 'div-3' e armazena na variável div3
    const div3 = document.getElementById("div-3");

    // Remove a cor de fundo da div1 atribuindo uma string vazia (volta ao padrão)
    div1.style.backgroundColor = "";
    // Remove a cor de fundo da div2 atribuindo uma string vazia (volta ao padrão)
    div2.style.backgroundColor = "";
    // Remove a cor de fundo da div3 atribuindo uma string vazia (volta ao padrão)
    div3.style.backgroundColor = "";

}