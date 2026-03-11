# sincronia.js — Programação Assíncrona com Promises

## Descrição

Demonstração de programação assíncrona em JavaScript usando `Promise` e `async/await`.

## Conceitos abordados

- **Promise**: objeto que representa o resultado de uma operação que ainda não foi concluída, podendo ser resolvida (sucesso) ou rejeitada (erro).
- **`async` / `await`**: permite escrever código assíncrono com aparência de síncrono, tornando o fluxo mais legível.
- **`try/catch`**: captura erros de Promises rejeitadas ao usar `await`.
- **`setTimeout`**: simula o tempo de resposta de uma operação de rede.

## Fluxo do programa

1. `buscarDadosdoServidor()` simula uma requisição com atraso de 2 segundos.
2. Ao término, resolve ou rejeita aleatoriamente (50% de chance de cada).
3. `minhaFuncaoAssincrona()` aguarda o resultado sem bloquear o restante do código.
4. `"Fim"` é exibido imediatamente, antes do resultado chegar — provando o comportamento não-bloqueante.

## Como executar

```bash
node sincronia.js
```

## Saída esperada

```
Buscando dados do servidor
Fim
Dados recebidos com sucesso   ← ou: Falha ao buscar dados do servidor
```

> O texto "Fim" aparece antes do resultado porque o código não bloqueia a execução enquanto aguarda a Promise.
