/**
 * ARQUIVO: click.js
 * DESCRIÇÃO: Script que controla a mudança de cores de elementos HTML (divs)
 * FUNCIONALIDADE PRINCIPAL: Oferece duas funções para alterar e restaurar cores de fundo
 * 
 * FUNÇÕES:
 * 1. trocaCor() - Altera as cores de fundo das divs para cores específicas
 * 2. restaurarCor() - Restaura as cores originais dos elementos
 * 
 * ELEMENTOS MANIPULADOS:
 * - div-1: Receberá cor vermelha quando trocaCor() for chamada
 * - div-2: Receberá cor verde claro quando trocaCor() for chamada
 * - div-3: Receberá cor azul claro quando trocaCor() for chamada
 */

// ============================================
// FUNÇÃO 1: TROCAR CORES
// ============================================

/**
 * FUNÇÃO: trocaCor()
 * OBJETIVO: Alterar as cores de fundo de três divs para cores predefinidas
 * 
 * FLUXO:
 * 1. Obtém referências das três divs pelo seu ID
 * 2. Aplica uma cor diferente a cada div usando a propriedade backgroundColor
 * 3. As cores são: vermelho (div-1), verde claro (div-2), azul claro (div-3)
 * 
 * NOTA: Esta função é chamada pelo evento onclick do botão "Troca de cor"
 * 
 * RETORNO: void (função não retorna valor, apenas modifica o estilo dos elementos)
 */
function trocaCor()
{
    // PASSO 1: Obtém os elementos HTML pelos seus IDs
    // document.getElementById() busca um elemento pelo atributo id
    // const = variável que não pode ser reatribuída (referência imutável)
    
    // Obtém a referência da primeira div (div-1)
    const div1 = document.getElementById("div-1");
    // Obtém a referência da segunda div (div-2)
    const div2 = document.getElementById("div-2");
    // Obtém a referência da terceira div (div-3)
    const div3 = document.getElementById("div-3");

    // PASSO 2: Altera a propriedade backgroundColor de cada div
    // .style.backgroundColor acessa e modifica o atributo style de cor de fundo
    // Os valores são strings com nomes de cores em inglês (CSS color names)
    
    // Altera o fundo da div-1 para vermelho
    div1.style.backgroundColor = "red";
    // Altera o fundo da div-2 para verde claro
    div2.style.backgroundColor = "lightgreen";
    // Altera o fundo da div-3 para azul claro
    div3.style.backgroundColor = "lightblue";
}


// ============================================
// FUNÇÃO 2: RESTAURAR CORES
// ============================================

/**
 * FUNÇÃO: restaurarCor()
 * OBJETIVO: Remover as cores de fundo das divs e restaurá-las ao estado original
 * 
 * FLUXO:
 * 1. Obtém referências das três divs pelo seu ID
 * 2. Remove a cor de cada div atribuindo uma string vazia ao backgroundColor
 * 3. Isso faz com que as divs voltem ao seu estilo padrão (definido no CSS)
 * 
 * NOTA: Esta função é chamada pelo evento onclick do botão "Restaurar cor padrão"
 * 
 * RETORNO: void (função não retorna valor, apenas modifica o estilo dos elementos)
 */
function restaurarCor()
{
    // PASSO 1: Obtém os elementos HTML pelos seus IDs
    // document.getElementById() busca um elemento pelo atributo id
    // As mesmas divs usadas na função trocaCor()
    
    // Obtém a referência da primeira div (div-1)
    const div1 = document.getElementById("div-1");
    // Obtém a referência da segunda div (div-2)
    const div2 = document.getElementById("div-2");
    // Obtém a referência da terceira div (div-3)
    const div3 = document.getElementById("div-3");

    // PASSO 2: Remove a cor de fundo de cada div
    // Atribuindo uma string vazia ("") remove o estilo inline e volta ao CSS padrão
    // Isso desfaz o que foi feito pela função trocaCor()
    
    // Remove a cor de fundo da div-1
    // A div volta ao seu estilo padrão definido em click.css
    div1.style.backgroundColor = "";
    // Remove a cor de fundo da div-2
    // A div volta ao seu estilo padrão definido em click.css
    div2.style.backgroundColor = "";
    // Remove a cor de fundo da div-3
    // A div volta ao seu estilo padrão definido em click.css
    div3.style.backgroundColor = "";

    // FIM DA FUNÇÃO
    // Quando restaurarCor() termina, todas as três divs terão apenas seus estilos CSS
}