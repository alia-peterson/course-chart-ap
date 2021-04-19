import data from "../context/mock-data";
import { calculations } from "./calculations";

describe("calculations", () => {
  const allActivities = data.allActivities;
  console.log(calculations.getPercentages(allActivities, 'activity'));

  //   it('should have a get percentages method', () => {
  //     expect(typeof (calculations.getPercentages(allActivities, 'activity'))).toBe('function')
  //   });  

  it("should return all the activities for the course", () => {
    expect(calculations.getPercentages(allActivities)).toStrictEqual(data.percentageData);
  });

  it("should return the activity data with a name, perceentage and module id", () => {
    expect(calculations.getPercentages(allActivities)[0]).toStrictEqual(data.percentageData[0]);
    expect(calculations.getPercentages(allActivities)[0].name).toStrictEqual("Reading (understand)");
    expect(calculations.getPercentages(allActivities)[0].percentage).toStrictEqual(7);
    expect(calculations.getPercentages(allActivities)[0].moduleId).toStrictEqual(1);
  });

  it('should return the total percents of all the activities in the course', () => {
    expect(calculations.getPercentages(allActivities, 'activity')).toStrictEqual(data.percentageData);
  });
});
