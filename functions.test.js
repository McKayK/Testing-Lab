const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('Should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('Should return a greeting', () => {
    expect(greeting('James')).toEqual('Hello, James.')
})


describe('Tests the Math Functions', () => {
    test('Should return a sum of 2 numbers', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })
    test('Should return the product of 2 numbers', () => {
        expect(multiply(3, 3)).toEqual(9)
        expect(multiply(5, 5)).toEqual(25)
    })
    test('Should return the result of dividing 2 numbers', () => {
        expect(divide(15, 3)).toEqual(5)
        expect(divide(100, 2)).toEqual(50)
    })
    test('Should return the result of subtracting 2 numbers', () => {
        expect(subtract(33, 3)).toEqual(30)
        expect(subtract(15, 15)).toEqual(0)
    })
})