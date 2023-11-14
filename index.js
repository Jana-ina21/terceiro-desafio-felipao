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
          ataque = 'um ataque indefinido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  
  const meuHeroi = new Heroi('Herói', 25, 'mago');
  const heroiDois = new Heroi('Bruce', 35, 'guerreiro');
  

  meuHeroi.atacar();
  heroiDois.atacar();