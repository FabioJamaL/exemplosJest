test('Multiplica', () => {
    let a = 2;
    let b = 10;
    let resultado =multiplicacao(a, b);
    expect(resultado).toBe(20);    
});
function multiplicacao(a, b){
    return a * b
}

describe('Multiplica()', () => {

describe ('Cenários de Teste', () => {
    const cenarios = [
        {a: 1, b: 2, result: 2},
        {a: 0, b: 0, result: 0},
        {a: '5', b: '5', result: 25},
        {a: 2, b: 8, result: 16},
        {a: '-1', b: 2, result: -2},
        {a: 100, b: 99, result: 9900},
        {a: '10', b: '12', result: 120}
    ]

function executaTeste (cenario, i) {
    test ('Caso #$(i+1)', () => {
        let {a, b, result } = cenario;

        expect(multiplicacao (a, b)).toBe(result);
    }); 
}

cenarios.forEach(executaTeste)

});

});