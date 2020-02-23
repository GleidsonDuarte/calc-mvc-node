import { Calculator } from './Calculator'

class Subtraction extends Calculator {
    /**
     * Return subtraction of numbers
     * @param {number} number1
     * @param {number} number2
     * @return {number} Subtraction
     */
    public calc(number1: number, number2: number): number {
        return number1 - number2
    }
}

export default new Subtraction()