function calcularRank(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (saldoVitorias <= 0) {
    nivel = 'Perdedor';
  } else {
    const niveis = [
      { limite: 10, nome: 'Ferro' },
      { limite: 20, nome: 'Bronze' },
      { limite: 50, nome: 'Prata' },
      { limite: 80, nome: 'Ouro' },
      { limite: 90, nome: 'Diamante' },
      { limite: 100, nome: 'Lendário' },
    ];

    for (let i = 0; i < niveis.length; i++) {
      if (saldoVitorias < niveis[i].limite) {
        nivel = niveis[i].nome;
        break;
      }
    }

    if (!nivel) {
      nivel = 'Imortal';
    }
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}


let vitorias = 9;
let derrotas = 0;
let resultado = calcularRank(vitorias, derrotas);
console.log(resultado);
