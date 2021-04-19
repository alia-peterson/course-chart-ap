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

import { formatDataForBarChart } from './calculations.js';


describe('Bar chart calculations', () => {

    it('Should take in an object of a course, an activity label, and an array of activityTotals for that mod, returning formatted data that is input in the bar graph', () => {
        let course = {
        "id": 1,
        "name": "Foundations of Nursing",
        "institution": "Colorado Nursing College",
        "creditHours": 3,
        "length": 8,
        "modules": [
            {
                "id": 1,
                "name": "Module 1",
                "number": 1,
                "courseId": 1,
                "moduleActivities": [
                    {
                        "id": 1,
                        "input": 107,
                        "notes": "",
                        "activity": {
                            "id": 1,
                            "name": "Reading (understand)",
                            "description": "130 wpm; 10 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 6
                        }
                    },
                    {
                        "id": 2,
                        "input": 6,
                        "notes": "",
                        "activity": {
                            "id": 2,
                            "name": "Reading (study guide)",
                            "description": "65 wpm; 5 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 12
                        }
                    },
                    {
                        "id": 3,
                        "input": 7,
                        "notes": "",
                        "activity": {
                            "id": 5,
                            "name": "Learning Objects (matching/multiple choice)",
                            "description": "10 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 10
                        }
                    },
                    {
                        "id": 4,
                        "input": 95,
                        "notes": "",
                        "activity": {
                            "id": 8,
                            "name": "Videos",
                            "description": "Factor the full length of video",
                            "metric": "# of minutes",
                            "multiplier": 1
                        }
                    },
                    {
                        "id": 5,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 10,
                            "name": "Discussion Boards",
                            "description": "250 words/60 minutes for initial post or 2 replies",
                            "metric": "# of discussion boards",
                            "multiplier": 60
                        }
                    },
                    {
                        "id": 6,
                        "input": 450,
                        "notes": "",
                        "activity": {
                            "id": 11,
                            "name": "Quizzes",
                            "description": "Average 1.5 minutes per question",
                            "metric": "# of questions",
                            "multiplier": 2
                        }
                    },
                    {
                        "id": 7,
                        "input": 50,
                        "notes": "",
                        "activity": {
                            "id": 13,
                            "name": "Self Assessments",
                            "description": "Average 1 minute per question",
                            "metric": "# of questions",
                            "multiplier": 1
                        }
                    }
                ]
            },
            {
                "id": 2,
                "name": "Module 2",
                "number": 2,
                "courseId": 1,
                "moduleActivities": [
                    {
                        "id": 8,
                        "input": 53,
                        "notes": "",
                        "activity": {
                            "id": 1,
                            "name": "Reading (understand)",
                            "description": "130 wpm; 10 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 6
                        }
                    },
                    {
                        "id": 9,
                        "input": 5,
                        "notes": "",
                        "activity": {
                            "id": 2,
                            "name": "Reading (study guide)",
                            "description": "65 wpm; 5 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 12
                        }
                    },
                    {
                        "id": 10,
                        "input": 5,
                        "notes": "",
                        "activity": {
                            "id": 5,
                            "name": "Learning Objects (matching/multiple choice)",
                            "description": "10 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 10
                        }
                    },
                    {
                        "id": 11,
                        "input": 71,
                        "notes": "",
                        "activity": {
                            "id": 8,
                            "name": "Videos",
                            "description": "Factor the full length of video",
                            "metric": "# of minutes",
                            "multiplier": 1
                        }
                    },
                    {
                        "id": 12,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 10,
                            "name": "Discussion Boards",
                            "description": "250 words/60 minutes for initial post or 2 replies",
                            "metric": "# of discussion boards",
                            "multiplier": 60
                        }
                    },
                    {
                        "id": 13,
                        "input": 100,
                        "notes": "",
                        "activity": {
                            "id": 11,
                            "name": "Quizzes",
                            "description": "Average 1.5 minutes per question",
                            "metric": "# of questions",
                            "multiplier": 2
                        }
                    }
                ]
            },
            {
                "id": 3,
                "name": "Module 3",
                "number": 3,
                "courseId": 1,
                "moduleActivities": [
                    {
                        "id": 14,
                        "input": 66,
                        "notes": "",
                        "activity": {
                            "id": 1,
                            "name": "Reading (understand)",
                            "description": "130 wpm; 10 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 6
                        }
                    },
                    {
                        "id": 15,
                        "input": 4,
                        "notes": "",
                        "activity": {
                            "id": 2,
                            "name": "Reading (study guide)",
                            "description": "65 wpm; 5 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 12
                        }
                    },
                    {
                        "id": 16,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 4,
                            "name": "Writing (reflection)",
                            "description": "90 minutes per page (500 words, single-spaced)",
                            "metric": "# of pages",
                            "multiplier": 90
                        }
                    },
                    {
                        "id": 17,
                        "input": 4,
                        "notes": "",
                        "activity": {
                            "id": 5,
                            "name": "Learning Objects (matching/multiple choice)",
                            "description": "10 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 10
                        }
                    },
                    {
                        "id": 18,
                        "input": 2,
                        "notes": "",
                        "activity": {
                            "id": 6,
                            "name": "Learning Objects (case study)",
                            "description": "20 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 20
                        }
                    },
                    {
                        "id": 19,
                        "input": 86,
                        "notes": "",
                        "activity": {
                            "id": 8,
                            "name": "Videos",
                            "description": "Factor the full length of video",
                            "metric": "# of minutes",
                            "multiplier": 1
                        }
                    },
                    {
                        "id": 20,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 10,
                            "name": "Discussion Boards",
                            "description": "250 words/60 minutes for initial post or 2 replies",
                            "metric": "# of discussion boards",
                            "multiplier": 60
                        }
                    },
                    {
                        "id": 21,
                        "input": 240,
                        "notes": "",
                        "activity": {
                            "id": 11,
                            "name": "Quizzes",
                            "description": "Average 1.5 minutes per question",
                            "metric": "# of questions",
                            "multiplier": 2
                        }
                    },
                    {
                        "id": 22,
                        "input": 50,
                        "notes": "",
                        "activity": {
                            "id": 13,
                            "name": "Self Assessments",
                            "description": "Average 1 minute per question",
                            "metric": "# of questions",
                            "multiplier": 1
                        }
                    }
                ]
            },
            {
                "id": 4,
                "name": "Module 4",
                "number": 4,
                "courseId": 1,
                "moduleActivities": [
                    {
                        "id": 23,
                        "input": 105,
                        "notes": "",
                        "activity": {
                            "id": 1,
                            "name": "Reading (understand)",
                            "description": "130 wpm; 10 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 6
                        }
                    },
                    {
                        "id": 24,
                        "input": 7,
                        "notes": "",
                        "activity": {
                            "id": 2,
                            "name": "Reading (study guide)",
                            "description": "65 wpm; 5 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 12
                        }
                    },
                    {
                        "id": 25,
                        "input": 2,
                        "notes": "",
                        "activity": {
                            "id": 4,
                            "name": "Writing (reflection)",
                            "description": "90 minutes per page (500 words, single-spaced)",
                            "metric": "# of pages",
                            "multiplier": 90
                        }
                    },
                    {
                        "id": 26,
                        "input": 3,
                        "notes": "",
                        "activity": {
                            "id": 5,
                            "name": "Learning Objects (matching/multiple choice)",
                            "description": "10 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 10
                        }
                    },
                    {
                        "id": 27,
                        "input": 75,
                        "notes": "",
                        "activity": {
                            "id": 8,
                            "name": "Videos",
                            "description": "Factor the full length of video",
                            "metric": "# of minutes",
                            "multiplier": 1
                        }
                    },
                    {
                        "id": 28,
                        "input": 390,
                        "notes": "",
                        "activity": {
                            "id": 11,
                            "name": "Quizzes",
                            "description": "Average 1.5 minutes per question",
                            "metric": "# of questions",
                            "multiplier": 2
                        }
                    },
                    {
                        "id": 29,
                        "input": 50,
                        "notes": "",
                        "activity": {
                            "id": 13,
                            "name": "Self Assessments",
                            "description": "Average 1 minute per question",
                            "metric": "# of questions",
                            "multiplier": 1
                        }
                    }
                ]
            },
            {
                "id": 5,
                "name": "Module 5",
                "number": 5,
                "courseId": 1,
                "moduleActivities": [
                    {
                        "id": 30,
                        "input": 52,
                        "notes": "",
                        "activity": {
                            "id": 1,
                            "name": "Reading (understand)",
                            "description": "130 wpm; 10 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 6
                        }
                    },
                    {
                        "id": 31,
                        "input": 5,
                        "notes": "",
                        "activity": {
                            "id": 2,
                            "name": "Reading (study guide)",
                            "description": "65 wpm; 5 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 12
                        }
                    },
                    {
                        "id": 32,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 4,
                            "name": "Writing (reflection)",
                            "description": "90 minutes per page (500 words, single-spaced)",
                            "metric": "# of pages",
                            "multiplier": 90
                        }
                    },
                    {
                        "id": 33,
                        "input": 5,
                        "notes": "",
                        "activity": {
                            "id": 5,
                            "name": "Learning Objects (matching/multiple choice)",
                            "description": "10 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 10
                        }
                    },
                    {
                        "id": 34,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 6,
                            "name": "Learning Objects (case study)",
                            "description": "20 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 20
                        }
                    },
                    {
                        "id": 35,
                        "input": 62,
                        "notes": "",
                        "activity": {
                            "id": 8,
                            "name": "Videos",
                            "description": "Factor the full length of video",
                            "metric": "# of minutes",
                            "multiplier": 1
                        }
                    },
                    {
                        "id": 36,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 10,
                            "name": "Discussion Boards",
                            "description": "250 words/60 minutes for initial post or 2 replies",
                            "metric": "# of discussion boards",
                            "multiplier": 60
                        }
                    },
                    {
                        "id": 37,
                        "input": 300,
                        "notes": "",
                        "activity": {
                            "id": 11,
                            "name": "Quizzes",
                            "description": "Average 1.5 minutes per question",
                            "metric": "# of questions",
                            "multiplier": 2
                        }
                    }
                ]
            },
            {
                "id": 6,
                "name": "Module 6",
                "number": 6,
                "courseId": 1,
                "moduleActivities": [
                    {
                        "id": 38,
                        "input": 36,
                        "notes": "",
                        "activity": {
                            "id": 1,
                            "name": "Reading (understand)",
                            "description": "130 wpm; 10 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 6
                        }
                    },
                    {
                        "id": 39,
                        "input": 5,
                        "notes": "",
                        "activity": {
                            "id": 2,
                            "name": "Reading (study guide)",
                            "description": "65 wpm; 5 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 12
                        }
                    },
                    {
                        "id": 40,
                        "input": 5,
                        "notes": "",
                        "activity": {
                            "id": 5,
                            "name": "Learning Objects (matching/multiple choice)",
                            "description": "10 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 10
                        }
                    },
                    {
                        "id": 41,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 6,
                            "name": "Learning Objects (case study)",
                            "description": "20 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 20
                        }
                    },
                    {
                        "id": 42,
                        "input": 40,
                        "notes": "",
                        "activity": {
                            "id": 8,
                            "name": "Videos",
                            "description": "Factor the full length of video",
                            "metric": "# of minutes",
                            "multiplier": 1
                        }
                    },
                    {
                        "id": 43,
                        "input": 1,
                        "notes": "",
                        "activity": {
                            "id": 10,
                            "name": "Discussion Boards",
                            "description": "250 words/60 minutes for initial post or 2 replies",
                            "metric": "# of discussion boards",
                            "multiplier": 60
                        }
                    },
                    {
                        "id": 44,
                        "input": 90,
                        "notes": "",
                        "activity": {
                            "id": 11,
                            "name": "Quizzes",
                            "description": "Average 1.5 minutes per question",
                            "metric": "# of questions",
                            "multiplier": 2
                        }
                    },
                    {
                        "id": 45,
                        "input": 50,
                        "notes": "",
                        "activity": {
                            "id": 13,
                            "name": "Self Assessments",
                            "description": "Average 1 minute per question",
                            "metric": "# of questions",
                            "multiplier": 1
                        }
                    }
                ]
            },
            {
                "id": 7,
                "name": "Module 7",
                "number": 7,
                "courseId": 1,
                "moduleActivities": [
                    {
                        "id": 46,
                        "input": 88,
                        "notes": "",
                        "activity": {
                            "id": 1,
                            "name": "Reading (understand)",
                            "description": "130 wpm; 10 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 6
                        }
                    },
                    {
                        "id": 47,
                        "input": 5,
                        "notes": "",
                        "activity": {
                            "id": 2,
                            "name": "Reading (study guide)",
                            "description": "65 wpm; 5 pages per hour",
                            "metric": "# of pages",
                            "multiplier": 12
                        }
                    },
                    {
                        "id": 48,
                        "input": 4,
                        "notes": "",
                        "activity": {
                            "id": 5,
                            "name": "Learning Objects (matching/multiple choice)",
                            "description": "10 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 10
                        }
                    },
                    {
                        "id": 49,
                        "input": 2,
                        "notes": "",
                        "activity": {
                            "id": 6,
                            "name": "Learning Objects (case study)",
                            "description": "20 minutes per object",
                            "metric": "# of LOs",
                            "multiplier": 20
                        }
                    },
                    {
                        "id": 50,
                        "input": 42,
                        "notes": "",
                        "activity": {
                            "id": 8,
                            "name": "Videos",
                            "description": "Factor the full length of video",
                            "metric": "# of minutes",
                            "multiplier": 1
                        }
                    },
                    {
                        "id": 51,
                        "input": 240,
                        "notes": "",
                        "activity": {
                            "id": 11,
                            "name": "Quizzes",
                            "description": "Average 1.5 minutes per question",
                            "metric": "# of questions",
                            "multiplier": 2
                        }
                    }
                ]
            },
            {
                "id": 8,
                "name": "Module 8",
                "number": 8,
                "courseId": 1,
                "moduleActivities": [
                    {
                        "id": 52,
                        "input": 3,
                        "notes": "",
                        "activity": {
                            "id": 3,
                            "name": "Writing (research)",
                            "description": "6 hours per page (500 words, single-spaced)",
                            "metric": "# of pages",
                            "multiplier": 360
                        }
                    },
                    {
                        "id": 53,
                        "input": 100,
                        "notes": "",
                        "activity": {
                            "id": 13,
                            "name": "Self Assessments",
                            "description": "Average 1 minute per question",
                            "metric": "# of questions",
                            "multiplier": 1
                        }
                    }
                ]
            }
          ],
          "activityTotals": [
                {
                    "activityId": 1,
                    "activityName": "Reading (understand)",
                    "moduleId": 1,
                    "moduleName": "Module 1",
                    "minutes": 642
                },
                {
                    "activityId": 1,
                    "activityName": "Reading (understand)",
                    "moduleId": 2,
                    "moduleName": "Module 2",
                    "minutes": 318
                },
                {
                    "activityId": 1,
                    "activityName": "Reading (understand)",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 396
                },
                {
                    "activityId": 1,
                    "activityName": "Reading (understand)",
                    "moduleId": 4,
                    "moduleName": "Module 4",
                    "minutes": 630
                },
                {
                    "activityId": 1,
                    "activityName": "Reading (understand)",
                    "moduleId": 5,
                    "moduleName": "Module 5",
                    "minutes": 312
                },
                {
                    "activityId": 1,
                    "activityName": "Reading (understand)",
                    "moduleId": 6,
                    "moduleName": "Module 6",
                    "minutes": 216
                },
                {
                    "activityId": 1,
                    "activityName": "Reading (understand)",
                    "moduleId": 7,
                    "moduleName": "Module 7",
                    "minutes": 528
                },
                {
                    "activityId": 2,
                    "activityName": "Reading (study guide)",
                    "moduleId": 1,
                    "moduleName": "Module 1",
                    "minutes": 72
                },
                {
                    "activityId": 2,
                    "activityName": "Reading (study guide)",
                    "moduleId": 2,
                    "moduleName": "Module 2",
                    "minutes": 60
                },
                {
                    "activityId": 2,
                    "activityName": "Reading (study guide)",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 48
                },
                {
                    "activityId": 2,
                    "activityName": "Reading (study guide)",
                    "moduleId": 4,
                    "moduleName": "Module 4",
                    "minutes": 84
                },
                {
                    "activityId": 2,
                    "activityName": "Reading (study guide)",
                    "moduleId": 5,
                    "moduleName": "Module 5",
                    "minutes": 60
                },
                {
                    "activityId": 2,
                    "activityName": "Reading (study guide)",
                    "moduleId": 6,
                    "moduleName": "Module 6",
                    "minutes": 60
                },
                {
                    "activityId": 2,
                    "activityName": "Reading (study guide)",
                    "moduleId": 7,
                    "moduleName": "Module 7",
                    "minutes": 60
                },
                {
                    "activityId": 3,
                    "activityName": "Writing (research)",
                    "moduleId": 8,
                    "moduleName": "Module 8",
                    "minutes": 1080
                },
                {
                    "activityId": 4,
                    "activityName": "Writing (reflection)",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 90
                },
                {
                    "activityId": 4,
                    "activityName": "Writing (reflection)",
                    "moduleId": 4,
                    "moduleName": "Module 4",
                    "minutes": 180
                },
                {
                    "activityId": 4,
                    "activityName": "Writing (reflection)",
                    "moduleId": 5,
                    "moduleName": "Module 5",
                    "minutes": 90
                },
                {
                    "activityId": 5,
                    "activityName": "Learning Objects (matching/multiple choice)",
                    "moduleId": 1,
                    "moduleName": "Module 1",
                    "minutes": 70
                },
                {
                    "activityId": 5,
                    "activityName": "Learning Objects (matching/multiple choice)",
                    "moduleId": 2,
                    "moduleName": "Module 2",
                    "minutes": 50
                },
                {
                    "activityId": 5,
                    "activityName": "Learning Objects (matching/multiple choice)",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 40
                },
                {
                    "activityId": 5,
                    "activityName": "Learning Objects (matching/multiple choice)",
                    "moduleId": 4,
                    "moduleName": "Module 4",
                    "minutes": 30
                },
                {
                    "activityId": 5,
                    "activityName": "Learning Objects (matching/multiple choice)",
                    "moduleId": 5,
                    "moduleName": "Module 5",
                    "minutes": 50
                },
                {
                    "activityId": 5,
                    "activityName": "Learning Objects (matching/multiple choice)",
                    "moduleId": 6,
                    "moduleName": "Module 6",
                    "minutes": 50
                },
                {
                    "activityId": 5,
                    "activityName": "Learning Objects (matching/multiple choice)",
                    "moduleId": 7,
                    "moduleName": "Module 7",
                    "minutes": 40
                },
                {
                    "activityId": 6,
                    "activityName": "Learning Objects (case study)",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 40
                },
                {
                    "activityId": 6,
                    "activityName": "Learning Objects (case study)",
                    "moduleId": 5,
                    "moduleName": "Module 5",
                    "minutes": 20
                },
                {
                    "activityId": 6,
                    "activityName": "Learning Objects (case study)",
                    "moduleId": 6,
                    "moduleName": "Module 6",
                    "minutes": 20
                },
                {
                    "activityId": 6,
                    "activityName": "Learning Objects (case study)",
                    "moduleId": 7,
                    "moduleName": "Module 7",
                    "minutes": 40
                },
                {
                    "activityId": 8,
                    "activityName": "Videos",
                    "moduleId": 1,
                    "moduleName": "Module 1",
                    "minutes": 95
                },
                {
                    "activityId": 8,
                    "activityName": "Videos",
                    "moduleId": 2,
                    "moduleName": "Module 2",
                    "minutes": 71
                },
                {
                    "activityId": 8,
                    "activityName": "Videos",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 86
                },
                {
                    "activityId": 8,
                    "activityName": "Videos",
                    "moduleId": 4,
                    "moduleName": "Module 4",
                    "minutes": 75
                },
                {
                    "activityId": 8,
                    "activityName": "Videos",
                    "moduleId": 5,
                    "moduleName": "Module 5",
                    "minutes": 62
                },
                {
                    "activityId": 8,
                    "activityName": "Videos",
                    "moduleId": 6,
                    "moduleName": "Module 6",
                    "minutes": 40
                },
                {
                    "activityId": 8,
                    "activityName": "Videos",
                    "moduleId": 7,
                    "moduleName": "Module 7",
                    "minutes": 42
                },
                {
                    "activityId": 10,
                    "activityName": "Discussion Boards",
                    "moduleId": 1,
                    "moduleName": "Module 1",
                    "minutes": 60
                },
                {
                    "activityId": 10,
                    "activityName": "Discussion Boards",
                    "moduleId": 2,
                    "moduleName": "Module 2",
                    "minutes": 60
                },
                {
                    "activityId": 10,
                    "activityName": "Discussion Boards",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 60
                },
                {
                    "activityId": 10,
                    "activityName": "Discussion Boards",
                    "moduleId": 5,
                    "moduleName": "Module 5",
                    "minutes": 60
                },
                {
                    "activityId": 10,
                    "activityName": "Discussion Boards",
                    "moduleId": 6,
                    "moduleName": "Module 6",
                    "minutes": 60
                },
                {
                    "activityId": 11,
                    "activityName": "Quizzes",
                    "moduleId": 1,
                    "moduleName": "Module 1",
                    "minutes": 675
                },
                {
                    "activityId": 11,
                    "activityName": "Quizzes",
                    "moduleId": 2,
                    "moduleName": "Module 2",
                    "minutes": 150
                },
                {
                    "activityId": 11,
                    "activityName": "Quizzes",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 360
                },
                {
                    "activityId": 11,
                    "activityName": "Quizzes",
                    "moduleId": 4,
                    "moduleName": "Module 4",
                    "minutes": 585
                },
                {
                    "activityId": 11,
                    "activityName": "Quizzes",
                    "moduleId": 5,
                    "moduleName": "Module 5",
                    "minutes": 450
                },
                {
                    "activityId": 11,
                    "activityName": "Quizzes",
                    "moduleId": 6,
                    "moduleName": "Module 6",
                    "minutes": 135
                },
                {
                    "activityId": 11,
                    "activityName": "Quizzes",
                    "moduleId": 7,
                    "moduleName": "Module 7",
                    "minutes": 360
                },
                {
                    "activityId": 13,
                    "activityName": "Self Assessments",
                    "moduleId": 1,
                    "moduleName": "Module 1",
                    "minutes": 50
                },
                {
                    "activityId": 13,
                    "activityName": "Self Assessments",
                    "moduleId": 3,
                    "moduleName": "Module 3",
                    "minutes": 50
                },
                {
                    "activityId": 13,
                    "activityName": "Self Assessments",
                    "moduleId": 4,
                    "moduleName": "Module 4",
                    "minutes": 50
                },
                {
                    "activityId": 13,
                    "activityName": "Self Assessments",
                    "moduleId": 6,
                    "moduleName": "Module 6",
                    "minutes": 50
                },
                {
                    "activityId": 13,
                    "activityName": "Self Assessments",
                    "moduleId": 8,
                    "moduleName": "Module 8",
                    "minutes": 100
                }
            ]
        }

        let label = 'Reading (understand)'

        let activityTotals = [
            {
                "activityId": 1,
                "activityName": "Reading (understand)",
                "moduleId": 1,
                "moduleName": "Module 1",
                "minutes": 642
            },
            {
                "activityId": 1,
                "activityName": "Reading (understand)",
                "moduleId": 2,
                "moduleName": "Module 2",
                "minutes": 318
            },
            {
                "activityId": 1,
                "activityName": "Reading (understand)",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 396
            },
            {
                "activityId": 1,
                "activityName": "Reading (understand)",
                "moduleId": 4,
                "moduleName": "Module 4",
                "minutes": 630
            },
            {
                "activityId": 1,
                "activityName": "Reading (understand)",
                "moduleId": 5,
                "moduleName": "Module 5",
                "minutes": 312
            },
            {
                "activityId": 1,
                "activityName": "Reading (understand)",
                "moduleId": 6,
                "moduleName": "Module 6",
                "minutes": 216
            },
            {
                "activityId": 1,
                "activityName": "Reading (understand)",
                "moduleId": 7,
                "moduleName": "Module 7",
                "minutes": 528
            },
            {
                "activityId": 2,
                "activityName": "Reading (study guide)",
                "moduleId": 1,
                "moduleName": "Module 1",
                "minutes": 72
            },
            {
                "activityId": 2,
                "activityName": "Reading (study guide)",
                "moduleId": 2,
                "moduleName": "Module 2",
                "minutes": 60
            },
            {
                "activityId": 2,
                "activityName": "Reading (study guide)",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 48
            },
            {
                "activityId": 2,
                "activityName": "Reading (study guide)",
                "moduleId": 4,
                "moduleName": "Module 4",
                "minutes": 84
            },
            {
                "activityId": 2,
                "activityName": "Reading (study guide)",
                "moduleId": 5,
                "moduleName": "Module 5",
                "minutes": 60
            },
            {
                "activityId": 2,
                "activityName": "Reading (study guide)",
                "moduleId": 6,
                "moduleName": "Module 6",
                "minutes": 60
            },
            {
                "activityId": 2,
                "activityName": "Reading (study guide)",
                "moduleId": 7,
                "moduleName": "Module 7",
                "minutes": 60
            },
            {
                "activityId": 3,
                "activityName": "Writing (research)",
                "moduleId": 8,
                "moduleName": "Module 8",
                "minutes": 1080
            },
            {
                "activityId": 4,
                "activityName": "Writing (reflection)",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 90
            },
            {
                "activityId": 4,
                "activityName": "Writing (reflection)",
                "moduleId": 4,
                "moduleName": "Module 4",
                "minutes": 180
            },
            {
                "activityId": 4,
                "activityName": "Writing (reflection)",
                "moduleId": 5,
                "moduleName": "Module 5",
                "minutes": 90
            },
            {
                "activityId": 5,
                "activityName": "Learning Objects (matching/multiple choice)",
                "moduleId": 1,
                "moduleName": "Module 1",
                "minutes": 70
            },
            {
                "activityId": 5,
                "activityName": "Learning Objects (matching/multiple choice)",
                "moduleId": 2,
                "moduleName": "Module 2",
                "minutes": 50
            },
            {
                "activityId": 5,
                "activityName": "Learning Objects (matching/multiple choice)",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 40
            },
            {
                "activityId": 5,
                "activityName": "Learning Objects (matching/multiple choice)",
                "moduleId": 4,
                "moduleName": "Module 4",
                "minutes": 30
            },
            {
                "activityId": 5,
                "activityName": "Learning Objects (matching/multiple choice)",
                "moduleId": 5,
                "moduleName": "Module 5",
                "minutes": 50
            },
            {
                "activityId": 5,
                "activityName": "Learning Objects (matching/multiple choice)",
                "moduleId": 6,
                "moduleName": "Module 6",
                "minutes": 50
            },
            {
                "activityId": 5,
                "activityName": "Learning Objects (matching/multiple choice)",
                "moduleId": 7,
                "moduleName": "Module 7",
                "minutes": 40
            },
            {
                "activityId": 6,
                "activityName": "Learning Objects (case study)",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 40
            },
            {
                "activityId": 6,
                "activityName": "Learning Objects (case study)",
                "moduleId": 5,
                "moduleName": "Module 5",
                "minutes": 20
            },
            {
                "activityId": 6,
                "activityName": "Learning Objects (case study)",
                "moduleId": 6,
                "moduleName": "Module 6",
                "minutes": 20
            },
            {
                "activityId": 6,
                "activityName": "Learning Objects (case study)",
                "moduleId": 7,
                "moduleName": "Module 7",
                "minutes": 40
            },
            {
                "activityId": 8,
                "activityName": "Videos",
                "moduleId": 1,
                "moduleName": "Module 1",
                "minutes": 95
            },
            {
                "activityId": 8,
                "activityName": "Videos",
                "moduleId": 2,
                "moduleName": "Module 2",
                "minutes": 71
            },
            {
                "activityId": 8,
                "activityName": "Videos",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 86
            },
            {
                "activityId": 8,
                "activityName": "Videos",
                "moduleId": 4,
                "moduleName": "Module 4",
                "minutes": 75
            },
            {
                "activityId": 8,
                "activityName": "Videos",
                "moduleId": 5,
                "moduleName": "Module 5",
                "minutes": 62
            },
            {
                "activityId": 8,
                "activityName": "Videos",
                "moduleId": 6,
                "moduleName": "Module 6",
                "minutes": 40
            },
            {
                "activityId": 8,
                "activityName": "Videos",
                "moduleId": 7,
                "moduleName": "Module 7",
                "minutes": 42
            },
            {
                "activityId": 10,
                "activityName": "Discussion Boards",
                "moduleId": 1,
                "moduleName": "Module 1",
                "minutes": 60
            },
            {
                "activityId": 10,
                "activityName": "Discussion Boards",
                "moduleId": 2,
                "moduleName": "Module 2",
                "minutes": 60
            },
            {
                "activityId": 10,
                "activityName": "Discussion Boards",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 60
            },
            {
                "activityId": 10,
                "activityName": "Discussion Boards",
                "moduleId": 5,
                "moduleName": "Module 5",
                "minutes": 60
            },
            {
                "activityId": 10,
                "activityName": "Discussion Boards",
                "moduleId": 6,
                "moduleName": "Module 6",
                "minutes": 60
            },
            {
                "activityId": 11,
                "activityName": "Quizzes",
                "moduleId": 1,
                "moduleName": "Module 1",
                "minutes": 675
            },
            {
                "activityId": 11,
                "activityName": "Quizzes",
                "moduleId": 2,
                "moduleName": "Module 2",
                "minutes": 150
            },
            {
                "activityId": 11,
                "activityName": "Quizzes",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 360
            },
            {
                "activityId": 11,
                "activityName": "Quizzes",
                "moduleId": 4,
                "moduleName": "Module 4",
                "minutes": 585
            },
            {
                "activityId": 11,
                "activityName": "Quizzes",
                "moduleId": 5,
                "moduleName": "Module 5",
                "minutes": 450
            },
            {
                "activityId": 11,
                "activityName": "Quizzes",
                "moduleId": 6,
                "moduleName": "Module 6",
                "minutes": 135
            },
            {
                "activityId": 11,
                "activityName": "Quizzes",
                "moduleId": 7,
                "moduleName": "Module 7",
                "minutes": 360
            },
            {
                "activityId": 13,
                "activityName": "Self Assessments",
                "moduleId": 1,
                "moduleName": "Module 1",
                "minutes": 50
            },
            {
                "activityId": 13,
                "activityName": "Self Assessments",
                "moduleId": 3,
                "moduleName": "Module 3",
                "minutes": 50
            },
            {
                "activityId": 13,
                "activityName": "Self Assessments",
                "moduleId": 4,
                "moduleName": "Module 4",
                "minutes": 50
            },
            {
                "activityId": 13,
                "activityName": "Self Assessments",
                "moduleId": 6,
                "moduleName": "Module 6",
                "minutes": 50
            },
            {
                "activityId": 13,
                "activityName": "Self Assessments",
                "moduleId": 8,
                "moduleName": "Module 8",
                "minutes": 100
            }
        ]

    expect(formatDataForBarChart(course, label)).toEqual( {
            "1": 642,
            "2": 318,
            "3": 396,
            "4": 630,
            "5": 312,
            "6": 216,
            "7": 528,
            "8": 0,
        })
    })

})