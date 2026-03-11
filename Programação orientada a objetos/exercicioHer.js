/*
  ============================================================
  EXERCÍCIO: Herança entre Produtos
  ============================================================
  O que este arquivo faz?

  Imagine uma loja virtual que vende vários tipos de produtos.
  Todo produto tem nome e preço — isso é o básico.
  Mas alguns produtos têm características extras:
    - VideoGame: por enquanto só tem nome e preço
    - Eletrônico: além de nome e preço, tem garantia em meses

  Para não repetir código, criamos um molde pai chamado "Produto"
  com o que é comum a todos. Os moldes filhos (VideoGame e Eletronico)
  herdam esse molde e cada um adiciona o que tem de especial.

  Isso é HERANÇA: reaproveitar código de forma organizada.

  Ao final, o programa cria um Xbox Series S e um iPhone,
  e exibe as informações de cada um no console.
  ============================================================
*/

// Classe base que representa um produto genérico
class Produto {
  // Construtor recebe nome e preço do produto
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

// Classe VideoGame herda de Produto (herança)
class VideoGame extends Produto {
  // Repassa nome e preço para a classe pai via super()
  constructor(nome, preco) {
    super(nome, preco);
  }

  // Exibe os dados do videogame no console
  mostrarDadosVideoGame() {
    console.log(`${this.nome}, ${this.preco}`);
  }
}

// Classe Eletronico herda de Produto e adiciona o atributo garantia
class Eletronico extends Produto {
  constructor(nome, preco, garantia) {
    // Chama o construtor da classe pai para definir nome e preço
    super(nome, preco);
    this.garantia = garantia; // Atributo exclusivo de Eletronico
  }

  // Exibe os dados do eletrônico, incluindo a garantia em meses
  mostrarDadosEletronico() {
    console.log(`${this.nome}, ${this.preco}, ${this.garantia} meses`);
  }
}

// Criando instâncias das subclasses
const NovoVideoGame = new VideoGame("Xbox-Series S", "2.500,00");
const Celelular = new Eletronico("Iphone", "5.000,00", 9);

// Chamando os métodos de exibição de cada objeto
NovoVideoGame.mostrarDadosVideoGame();
Celelular.mostrarDadosEletronico();
