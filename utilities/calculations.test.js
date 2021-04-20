import data from "../context/test-data";
import { calculations } from "./calculations";

describe("calculations", () => {
  const courseActivityTotals = data.courseActivityTotals;
  const activitesByModule = data.moduleActivities;
  const activityTypes = data.activityTypes;
  const course = data.course;
  const label = data.label;
  const allActivityTotals = data.allActivityTotals;

  it('Should have a calculations object', () => {
    expect(typeof calculations).toBe('object')
  })

  it("Should be able to return all activities filtered by module", () => {
    expect(
      calculations.filterModuleActivities(courseActivityTotals, 74)
    ).toStrictEqual([
      {
        activityId: 1,
        activityName: "Reading (understand)",
        moduleId: 74,
        moduleName: "Wowie",
        minutes: 18,
      },
      {
        activityId: 2,
        activityName: "Reading (study guide)",
        moduleId: 74,
        moduleName: "Wowie",
        minutes: 48,
      },
      {
        activityId: 3,
        activityName: "Writing (research)",
        moduleId: 74,
        moduleName: "Wowie",
        minutes: 360,
      },
    ]);
  });

  it("Should be able to return all the activities and percentage of totals within a module", () => {
    expect(calculations.getModulePercentages(activitesByModule)).toStrictEqual([
      { "Reading (understand)": 4 },
      { "Reading (study guide)": 11 },
      { "Writing (research)": 84 },
    ]);
  });

  it("should be able to return all the activities and percentages of totals within a course", () => {
    expect(
      calculations.getActivityPercentages(courseActivityTotals, activityTypes)
    ).toStrictEqual([
      { "Reading (understand)": 10 },
      { "Reading (study guide)": 10 },
      { "Writing (research)": 75 },
      { "Writing (reflection)": 0 },
      { "Learning Objects (matching/multiple choice)": 0 },
      { "Learning Objects (case study)": 0 },
      { Lecture: 0 },
      { Videos: 2 },
      { Websites: 0 },
      { "Discussion Boards": 0 },
      { Quizzes: 0 },
      { Exams: 0 },
      { "Self Assessments": 0 },
      { Miscellaneous: 1 },
    ]);
  });

  it("Should take in an object of a course, an activity label, and an array of activityTotals for that mod, returning formatted data that is input in the bar graph", () => {
    expect(
      calculations.formatDataForBarChart(course, label, allActivityTotals)
    ).toEqual({
      "Module 1": 642,
      "Module 2": 318,
      "Module 3": 396,
      "Module 4": 630,
      "Module 5": 312,
    });
  });
});
