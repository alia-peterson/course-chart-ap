import findGoal from '../courseGoal'

describe('courseGoal.js Jest testing', () => {
    const creditHours = 3;
    const courseLength = 8;

    it('Should have a function called find goal', () => {
        expect(typeof findGoal).toEqual('function')
    })
    it('Should be able to return the goal options with given credit hours and course length', () => {
        expect(findGoal(creditHours, courseLength)).toEqual('16-18 hours')
    })
})