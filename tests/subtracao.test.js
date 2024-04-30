test('Subtracao', () => {
    let a = 2;
    let b = 10;
    let resultado =subtracao(a, b);
    expect(resultado).toBe(-8);    
});
function subtracao(a, b){
    return a - b
}