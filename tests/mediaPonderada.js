/*
const ps1 = 1;
const ps2 = 2;
const ps3 = 3;
const ps4 = 4; 
var nota1 = 5;
var nota2 = 5;
var nota3 = 5;
var nota4 = 8;



function calcular_media_ponderada(nota1, nota2, nota3, nota4, ps1, ps2, ps3, ps4) {
    let media_pon = (nota1*ps1 + nota2*ps2 + nota3*ps3 + nota4*ps4) / 10;
    
    if (media_pon >= 7.0) {
        console.log ("Aprovado!");
    } else {
        console.log ("Reprovado!");
    }
    return media_pon;
}


calcular_media_ponderada(nota1, nota2, nota3, nota4, ps1, ps2, ps3, ps4);

*/

export function calcular_media_ponderada(nota1, nota2, nota3, nota4, ps1=1, ps2=2, ps3=3, ps4=4) {
    let media_pon = (nota1*ps1 + nota2*ps2 + nota3*ps3 + nota4*ps4) / 10;
    
    if (media_pon >= 7.0) {
        return "Aprovado!";
    } else {
        return "Reprovado!";
    }
}
