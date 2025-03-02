class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'ataque desconhecido';
    }
    console.log(`O herói ${this.nome}, um ${this.tipo}, atacou usando ${ataque}`);
  }
}

const mago = new Heroi('Gandalf', 1000, 'mago');
const guerreiro = new Heroi('Aragorn', 87, 'guerreiro');
const monge = new Heroi('Shaolin', 54, 'monge');
const ninja = new Heroi('Scorpion', 200, 'ninja');

monge.atacar();
guerreiro.atacar();
mago.atacar();
ninja.atacar();