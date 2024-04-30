
function calcularMediaPon(nota1, nota2, nota3, nota4, ps1=1, ps2=1, ps3=1, ps4=1) {
    let media_pon = (nota1*ps1 + nota2*ps2 + nota3*ps3 + nota4*ps4) / (ps1 + ps2 + ps3 + ps4);
    
    if (media_pon >= 7) {
        return "Aprovado!";
    } else {
        return "Reprovado!";
    }
}

describe("Media de notas", () => {
    test("Caso de teste 01:", () => {
        var nota1 = 8;
        var nota2 = 8;
        var nota3 = 8;
        var nota4 = 8;
        var media = calcularMediaPon(nota1, nota2, nota3, nota4);
        expect(media).toBe("Aprovado!");
    });

    test("Caso de teste 02:", () => {
        var nota1 = 6;
        var nota2 = 9;
        var nota3 = 5;
        var nota4 = 5;
        var media = calcularMediaPon(nota1, nota2, nota3, nota4)
        expect(media).toBe("Reprovado!");
    });

    test("Caso de teste 03:", () => {
        var nota1 = 8.5;
        var nota2 = 8;
        var nota3 = 7;
        var nota4 = 6.5;
        var media = calcularMediaPon(nota1, nota2, nota3, nota4)
        expect(media).toBe("Aprovado!");
    });
    test("Caso de teste 04:", () => {
        var nota1 = '7';
        var nota2 = '8';
        var nota3 = '9';
        var nota4 = '10';
        var media = calcularMediaPon(nota1, nota2, nota3, nota4)
        expect(media).toBe("Aprovado!");
    });

    test("Caso de teste 05:", () => {
        var nota1 = '1';
        var nota2 = '1';
        var nota3 = '1';
        var nota4 = '10';
        var media = calcularMediaPon(nota1, nota2, nota3, nota4);
        expect(media).toBe("Reprovado!");
    });

    test("Caso de teste 06:", () => {
        var nota1 = '1';
        var nota2 = '1';
        var nota3 = '1';
        var nota4 = '10';
        var media = calcularMediaPon(nota1, nota2, nota3, nota4);
        expect(media).toBe("Reprovado!");
    })
})