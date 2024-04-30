test('Divisão', () => {
    let a = 2;
    let b = 10;
    let resultado =divisao(a, b);
    expect(resultado).toBe(0.2);    
});
function divisao(a, b){
    return a / b
}