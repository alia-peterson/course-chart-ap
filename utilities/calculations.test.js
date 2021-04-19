import data from '../context/mock-data'
import {calculations} from './calculations'

describe('calculations', () => {
    const allActivities = data.allActivities
  console.log(calculations)
  
//   it('should have a get percentages method', () => {
//     expect(typeof (calculations.getPercentages(allActivities, 'activity'))).toBe('function')
//   });

  it('should return all the activities for the course', () => {
     expect(calculations.getPercentages(allActivities, 'activity'))
  })

  it 
});

