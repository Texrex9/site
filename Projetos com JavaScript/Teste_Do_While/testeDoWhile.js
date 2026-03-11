

const carros = [
    "Fiat Uno",
    "Ford Ka",
    "Chevrolet Onix",
    "Volkswagen Gol",
    "Honda Civic"
];

function percorrerCarros() {
    const container = document.getElementById('saida');
    
    let index = 0;
    
    let continuar;

    do {
        if (index >= carros.length) {
            const endMsg = document.createElement('p');
            endMsg.textContent = 'Não há mais carros para mostrar.';
            container.appendChild(endMsg);
            break;
        }

        const carroAtual = carros[index];
        
        continuar = confirm(`Carro: ${carroAtual}\nDeseja ver o próximo?`);

        const linha = document.createElement('p');
        linha.textContent = `${carroAtual} - ${continuar ? 'Continuar' : 'Parar'}`;
        container.appendChild(linha);

        index++;

        if (!continuar) {
            const stopMsg = document.createElement('p');
            stopMsg.textContent = 'Loop interrompido pelo usuário.';
            container.appendChild(stopMsg);
            break;
        }
    } while (true);
}

window.addEventListener('DOMContentLoaded', percorrerCarros);