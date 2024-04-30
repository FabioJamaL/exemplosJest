import {toString} from "./algarismo"

describe('Transforme um algarismo em um texto', () => {
    test('Caso seja 0', () => {
        let algarismo = 0;

        let texto = toString(algarismo);

        expect(toString(0)).toBe("zero");
    });
    //
    test('Caso seja 1', () => {
        let algarismo = 1;

        let texto = toString(algarismo);

        expect(toString(1)).toBe("um");
    });
    //
    test('Caso seja 2', () => {
        let algarismo = 2;

        let texto = toString(algarismo);

        expect(toString(2)).toBe("dois");
    });
    //
    test('Caso seja 3', () => {
        let algarismo = 3;

        let texto = toString(algarismo);

        expect(toString(3)).toBe("três");
    });
    //
    test('Caso seja 4', () => {
        let algarismo = 4;

        let texto = toString(algarismo);

        expect(toString(4)).toBe("quatro");
    });
    //
    test('Caso seja 5', () => {
        let algarismo = 5;

        let texto = toString(algarismo);

        expect(toString(5)).toBe("cinco");
    });
    //
    test('Caso seja 6', () => {
        let algarismo = 6;

        let texto = toString(algarismo);

        expect(toString(6)).toBe("seis");
    });
    //
    test('Caso seja 7', () => {
        let algarismo = 7;

        let texto = toString(algarismo);

        expect(toString(7)).toBe("sete");
    });
    //
    test('Caso seja 8', () => {
        let algarismo = 8;

        let texto = toString(algarismo);

        expect(toString(8)).toBe("oito");
    });
    //
    test('Caso seja 9', () => {
        let algarismo = 9;

        let texto = toString(algarismo);

        expect(toString(9)).toBe("nove");
    });
//
    test  ('Caso seja maior que 9', () => {
        let x = 10;

        expect(toString(x)).toBe(`${x} não corresponde a um algarismo`);
    })
    //
   
    test  ('Caso seja maior que 9', () => {
        let x = 50;

        expect(toString(x)).toBe(`${x} não corresponde a um algarismo`);
    })
    //
    test  ('Caso seja maior que 9 ou menor que 9', () => {
        let x = 100;

        expect(toString(x)).toBe(`${x} não corresponde a um algarismo`);
    })
    
});
