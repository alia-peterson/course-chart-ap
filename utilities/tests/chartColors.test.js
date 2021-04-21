import getColor from '../chartColors'

describe('courseGoal.js Jest testing', () => {
    const activityName = 'Reading (understand)'

    it('Should have a function called find goal', () => {
        expect(typeof getColor).toEqual('function')
    })
    it('Should be able to return the goal options with given credit hours and course length', () => {
        expect(getColor(activityName)).toEqual('#FF6384')
    })
})