//import {calcularMedia} from "./media"

function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    if (media >= 7.0) {
        return "Aprovado!";
    } else {
        return "Reprovado!";
    }
}

describe("Media de notas", () => {
    test("Caso de teste 01: 8, 10, 5, 5", () => {
        var nota1 = 10;
        var nota2 = 5.5;
        var nota3 = 2.5;
        var nota4 = 10;
        var media = calcularMedia(nota1, nota2, nota3, nota4)
        expect(media).toBe("Aprovado!");
    });
    test("Caso de teste 02: 8, 9, 5, 5", () => {
        var nota1 = 8;
        var nota2 = 9;
        var nota3 = 5;
        var nota4 = 5;
        var media = calcularMedia(nota1, nota2, nota3, nota4)
        expect(media).toBe("Reprovado!");
    });
    test("Caso de teste 03: 8.5, 8, 7, 6.5", () => {
        var nota1 = 8.5;
        var nota2 = 8;
        var nota3 = 7;
        var nota4 = 6.5;
        var media = calcularMedia(nota1, nota2, nota3, nota4)
        expect(media).toBe("Aprovado!");
    });
    test("Caso de teste 04: '7', '8', '9', '10',", () => {
        var nota1 = '7';
        var nota2 = '8';
        var nota3 = '9';
        var nota4 = '10';
        var media = calcularMedia(nota1, nota2, nota3, nota4)
        expect(media).toBe("Aprovado!");
    });
});

