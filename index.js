function calcularRank(vitoriasJogador, derrotasjogador) {
    let saldoVitorias = vitoriasJogador - derrotasjogador;
    let nivel = "";
  
    if (vitoriasJogador < 10) {
      nivel = "Ferro";
    } else if (vitoriasJogador >= 11 && vitoriasJogador <= 20) {
      nivel = "Bronze";
    } else if (vitoriasJogador >= 21 && vitoriasJogador <= 50) {
      nivel = "Prata";
    } else if (vitoriasJogador >= 51 && vitoriasJogador <= 80) {
      nivel = "Ouro";
    } else if (vitoriasJogador >= 81 && vitoriasJogador <= 90) {
      nivel = "Diamante";
    } else if (vitoriasJogador >= 91 && vitoriasJogador <= 100) {
      nivel = "Lendário";
    } else if (vitoriasJogador >= 101) {
      nivel = "Imortal";
    }
  
    return ("O Herói tem um saldo de " + saldoVitorias + " vitorias e está no nível de " + nivel);
  }
  
  // Teste da função
  let vitoriasJogador = 50;
  let derrotasjogador = 20;
  console.log(calcularRank(vitoriasJogador, derrotasjogador));



