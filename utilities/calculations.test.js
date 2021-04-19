import data from "../context/mock-data";
import { calculations } from "./calculations";

describe("calculations", () => {
  const allActivities = data.allActivities;
  
  //   it('should have a get percentages method', () => {
  //     expect(typeof (calculations.getPercentages(allActivities, 'activity'))).toBe('function')
  //   });

  it("should return all the activities for the course", () => {
    expect(calculations.getPercentages(allActivities)).toStrictEqual(
      data.coursePercentageData
    );
  });

  it("should return the activity data with a name, percentage and module id", () => {
    expect(calculations.getPercentages(allActivities)[0]).toStrictEqual(
      data.coursePercentageData[0]
    );
    expect(calculations.getPercentages(allActivities)[0].name).toStrictEqual(
      "Reading (understand)"
    );
    expect(
      calculations.getPercentages(allActivities)[0].percentage
    ).toStrictEqual(7);
    expect(
      calculations.getPercentages(allActivities)[0].moduleId
    ).toStrictEqual(1);
  });

  it("should return the total percents of all the activities in the course", () => {
    expect(
      calculations.getPercentages(allActivities, "activity")
    ).toStrictEqual(data.activtyTotals);
  });

  it("should return the activity data with the name as the key and the total percentage as a value", () => {
    expect(
      calculations.getPercentages(allActivities, "activity")
    ).toHaveProperty("Reading (understand)");
    expect(
      calculations.getPercentages(allActivities, "activity")
    ).toHaveProperty("Reading (understand)", 32);
  });
});
