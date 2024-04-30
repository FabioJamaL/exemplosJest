//A soma de dois numeros inteiros deverá resultar em um numero inteiro.

describe("Soma", () => {
    describe('A soma de dois numeros inteiros deverá resultar em um numero inteiro.', () => {
        test('A soma de 2 e 2 deve ser igual a 4', () => { 
            expect(soma(2,2)).toBe(4);
        });
        test('Soma de 10 e 2 deve ser igual a 12.', () => {
            expect(soma(10, 2)).toBe(12);
        });
        test('Soma de 0 e 0 deve ser igual a 0\n', () => {
            expect(soma(0, 0)).toBe(0);        
        });
    });
})
function soma(a, b){
    return parseInt(a) + parseInt(b)
}

//A soma de dois numeros literais deverá resultar em um numero inteiro.

describe("Soma", () => {
    describe('A soma de dois numeros literais deverá resultar em um numero inteiro.', () => {
        test('A soma de "2" e "2" deve ser igual a "4"', () => { 
            expect(soma('2', '2')).toBe(4);
        });
        test('Soma de "10" e "2" deve ser igual a "12".', () => {
            expect(soma('10', '2')).toBe(12);
        });
        test('Soma de "0" e "0" deve ser igual a "0"\n', () => {
            expect(soma('0', '0')).toBe(0);        
        });
    });
})

//A soma de um numero literal e um numero inteiro deverá resultar em um numero inteiro

describe("Soma", () => {
    describe('A soma de um numero literal e um inteiro ou vice versa deverá resultar um numero inteiro.', () => {
        test('A soma de "2" e 2 deve ser igual a 4', () => { 
            expect(soma('2', 2)).toBe(4);
        });
        test('Soma de "10" e 2 deve ser igual a 12.', () => {
            expect(soma('10', 2)).toBe(12);
        });
        test('Soma de "0" e 0 deve ser igual a 0', () => {
            expect(soma('0', 0)).toBe(0); 
        });
        test('Soma de 2 e "2" deve ser igual a 4', () => {
            expect(soma(2, '2')).toBe(4);
        });
        test('Soma de 10 e "2" deve ser igual a 12', () => {
            expect(soma(10, '2')).toBe(12)
        });
        test('Soma de 0 e "0" deve ser igual a 0\n', () => {
            expect(soma(0, '0')).toBe(0)
        });
    });
})

//A soma de duas strings deve gerar uma mensagem de erro

describe("Soma", () => {
    describe('A soma de duas strings deve gerar uma mensagem de erro.', () => {
        test('A soma de "abc" e "2" deve ser igual a Erro: um ou mais parametros com tipo(s) não suportado(s)', () => { 
            expect(soma('abc', '2')).toBe('Erro!');
        });
        test('Soma de 10 e 2 deve ser igual a 12.', () => {
            expect(soma(10, 2)).toBe(12);
        });
        test('Soma de 0 e 0 deve ser igual a 0\n', () => {
            expect(soma(0, 0)).toBe(0);        
        });
    });
})