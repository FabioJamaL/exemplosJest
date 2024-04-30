

export function calcularMedia(nota1, nota2, nota3, nota4, p1=1, p2=1, p3=1, p4=1) {
    let media = (nota1*p1 + nota2*p2 + nota3*p3 + nota4*p4) / (p1*1 + p2*1 + p3*1 + p4*1);
    return media;
}
  
function verificarAprovacao(media, presenca = 0.75) {

  return media >= 7 && presenca >= 0.75 ? "Aprovado" : "Reprovado"
}