/**
 * ARQUIVO: tarefasToDoList.js
 * DESCRIÇÃO: Lógica JavaScript da aplicação de lista de tarefas
 * OBJETIVO: Manipular DOM, adicionar tarefas, validar entrada
 */

/**
 * FUNÇÃO: adicionarTarefa()
 * OBJETIVO: Adicionar uma nova tarefa à lista
 * 
 * ETAPAS:
 * 1. Obtém o valor digitado no input
 * 2. Valida se o campo não está vazio
 * 3. Cria um novo elemento <li>
 * 4. Insere o texto na lista
 * 5. Limpa o campo de entrada
 * 6. Define o foco no input (para digitar nova tarefa)
 */
function adicionarTarefa() {
    // PASSO 1: Obtém a referência do input pelo id
    const input = document.getElementById('campotarefa');
    
    // PASSO 2: Obtém o valor digitado no input
    // .value acessa o conteúdo do campo de entrada
    const valorTarefa = input.value;
    
    // PASSO 3: Valida se o campo está vazio
    // .trim() remove espaços em branco do início e fim
    // Se estiver vazio, exibe alerta e retorna
    if (valorTarefa.trim() === '') {
        alert('Por favor, digite uma tarefa!');
        return;  // Sai da função
    }
    
    // PASSO 4: Obtém a referência da lista <ul>
    const lista = document.getElementById('listaTarefas');
    
    // PASSO 5: Cria um novo elemento <li>
    // document.createElement('li') cria um novo elemento li
    const novoItem = document.createElement('li');
    
    // PASSO 6: Define o conteúdo de texto do novo <li>
    // .textContent define o texto que aparecerá na lista
    novoItem.textContent = valorTarefa;
    
    // PASSO 7: Adiciona o novo <li> à lista
    // .appendChild() insere o elemento como filho da lista
    lista.appendChild(novoItem);
    
    // PASSO 8: Limpa o campo de entrada
    // Define o .value para uma string vazia
    input.value = '';
    
    // PASSO 9: Define o foco no input para a próxima tarefa
    // .focus() coloca o cursor no campo de entrada
    input.focus();
}

/**
 * EVENT LISTENER: Permite pressionar ENTER para adicionar tarefa
 * - Seleciona o input pelo id
 * - Adiciona um "ouvinte" para quando a tecla é pressionada
 * - Se a tecla for ENTER (keyCode === 13), chama adicionarTarefa()
 */
document.getElementById('campotarefa').addEventListener('keypress', function(evento) {
    // evento.keyCode retorna o código da tecla pressionada
    // 13 é o código da tecla ENTER
    if (evento.keyCode === 13) {
        // Se for ENTER, executa a função de adicionar
        adicionarTarefa();
    }
});
