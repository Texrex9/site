class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
}

class VideoGame extends Produto{
    constructor(nome, preco){
        super(nome, preco);
    }
    mostrarDadosVideoGame(){
        console.log(`${this.nome}, ${this.preco}`)
    }

}

class Eletronico extends Produto{
    constructor(nome, preco, garantia){
        super(nome, preco)
        this.garantia = garantia;
    }
    mostrarDadosEletronico(){
        console.log(`${this.nome}, ${this.preco}, ${this.garantia} meses`);
    }
}

const NovoVideoGame = new VideoGame("Xbox-Series S", "2.500,00")
const Celelular = new Eletronico("Iphone", "5.000,00", 9)
NovoVideoGame.mostrarDadosVideoGame();
Celelular.mostrarDadosEletronico();