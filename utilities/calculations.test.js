// import data from "../context/mock-data";
// import { calculations } from "./calculations";

// describe("calculations", () => {
//   const allActivities = data.allActivities;
  
  //   it('should have a get percentages method', () => {
  //     expect(typeof (calculations.getPercentages(allActivities, 'activity'))).toBe('function')
  //   });

//   it("should return all the activities for the course", () => {
//     expect(calculations.getPercentages(allActivities)).toStrictEqual(
//       data.coursePercentageData
//     );
//   });

//   it("should return the activity data with a name, percentage and module id", () => {
//     expect(calculations.getPercentages(allActivities)[0]).toStrictEqual(
//       data.coursePercentageData[0]
//     );
//     expect(calculations.getPercentages(allActivities)[0].name).toStrictEqual(
//       "Reading (understand)"
//     );
//     expect(
//       calculations.getPercentages(allActivities)[0].percentage
//     ).toStrictEqual(7);
//     expect(
//       calculations.getPercentages(allActivities)[0].moduleId
//     ).toStrictEqual(1);
//   });

//   it("should return the total percents of all the activities in the course", () => {
//     expect(
//       calculations.getPercentages(allActivities, "activity")
//     ).toStrictEqual(data.activtyTotals);
//   });

//   it("should return the activity data with the name as the key and the total percentage as a value", () => {
//     expect(
//       calculations.getPercentages(allActivities, "activity")
//     ).toHaveProperty("Reading (understand)");
//     expect(
//       calculations.getPercentages(allActivities, "activity")
//     ).toHaveProperty("Reading (understand)", 32);
//   });
// });

// import { formatDataForBarChart } from './calculations.js';


// describe('Bar chart calculations', () => {

//     it('Should take in an object of a course, an activity label, and an array of activityTotals for that mod, returning formatted data that is input in the bar graph', () => {
//         let course = {
//         "id": 1,
//         "name": "Foundations of Nursing",
//         "institution": "Colorado Nursing College",
//         "creditHours": 3,
//         "length": 8,
//         "modules": [
//             {
//                 "id": 1,
//                 "name": "Module 1",
//                 "number": 1,
//                 "courseId": 1,
//                 "moduleActivities": []
//             },
//             {
//                 "id": 2,
//                 "name": "Module 2",
//                 "number": 2,
//                 "courseId": 1,
//                 "moduleActivities": []
//             },
//             {
//                 "id": 3,
//                 "name": "Module 3",
//                 "number": 3,
//                 "courseId": 1,
//                 "moduleActivities": []
//             },
//             {
//                 "id": 4,
//                 "name": "Module 4",
//                 "number": 4,
//                 "courseId": 1,
//                 "moduleActivities": []
//             },
//             {
//                 "id": 5,
//                 "name": "Module 5",
//                 "number": 5,
//                 "courseId": 1,
//                 "moduleActivities": []
//             }
//           ]
//         }

//         let label = 'Reading (understand)'

//         let activityTotals = [
//             {
//                 "activityId": 1,
//                 "activityName": "Reading (understand)",
//                 "moduleId": 1,
//                 "moduleName": "Module 1",
//                 "minutes": 642
//             },
//             {
//                 "activityId": 1,
//                 "activityName": "Reading (understand)",
//                 "moduleId": 2,
//                 "moduleName": "Module 2",
//                 "minutes": 318
//             },
//             {
//                 "activityId": 1,
//                 "activityName": "Reading (understand)",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 396
//             },
//             {
//                 "activityId": 1,
//                 "activityName": "Reading (understand)",
//                 "moduleId": 4,
//                 "moduleName": "Module 4",
//                 "minutes": 630
//             },
//             {
//                 "activityId": 1,
//                 "activityName": "Reading (understand)",
//                 "moduleId": 5,
//                 "moduleName": "Module 5",
//                 "minutes": 312
//             },
//             {
//                 "activityId": 2,
//                 "activityName": "Reading (study guide)",
//                 "moduleId": 1,
//                 "moduleName": "Module 1",
//                 "minutes": 72
//             },
//             {
//                 "activityId": 2,
//                 "activityName": "Reading (study guide)",
//                 "moduleId": 2,
//                 "moduleName": "Module 2",
//                 "minutes": 60
//             },
//             {
//                 "activityId": 2,
//                 "activityName": "Reading (study guide)",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 48
//             },
//             {
//                 "activityId": 2,
//                 "activityName": "Reading (study guide)",
//                 "moduleId": 4,
//                 "moduleName": "Module 4",
//                 "minutes": 84
//             },
//             {
//                 "activityId": 2,
//                 "activityName": "Reading (study guide)",
//                 "moduleId": 5,
//                 "moduleName": "Module 5",
//                 "minutes": 60
//             },
//             {
//                 "activityId": 4,
//                 "activityName": "Writing (reflection)",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 90
//             },
//             {
//                 "activityId": 4,
//                 "activityName": "Writing (reflection)",
//                 "moduleId": 4,
//                 "moduleName": "Module 4",
//                 "minutes": 180
//             },
//             {
//                 "activityId": 4,
//                 "activityName": "Writing (reflection)",
//                 "moduleId": 5,
//                 "moduleName": "Module 5",
//                 "minutes": 90
//             },
//             {
//                 "activityId": 5,
//                 "activityName": "Learning Objects (matching/multiple choice)",
//                 "moduleId": 1,
//                 "moduleName": "Module 1",
//                 "minutes": 70
//             },
//             {
//                 "activityId": 5,
//                 "activityName": "Learning Objects (matching/multiple choice)",
//                 "moduleId": 2,
//                 "moduleName": "Module 2",
//                 "minutes": 50
//             },
//             {
//                 "activityId": 5,
//                 "activityName": "Learning Objects (matching/multiple choice)",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 40
//             },
//             {
//                 "activityId": 5,
//                 "activityName": "Learning Objects (matching/multiple choice)",
//                 "moduleId": 4,
//                 "moduleName": "Module 4",
//                 "minutes": 30
//             },
//             {
//                 "activityId": 5,
//                 "activityName": "Learning Objects (matching/multiple choice)",
//                 "moduleId": 5,
//                 "moduleName": "Module 5",
//                 "minutes": 50
//             },
//             {
//                 "activityId": 6,
//                 "activityName": "Learning Objects (case study)",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 40
//             },
//             {
//                 "activityId": 6,
//                 "activityName": "Learning Objects (case study)",
//                 "moduleId": 5,
//                 "moduleName": "Module 5",
//                 "minutes": 20
//             },
//             {
//                 "activityId": 8,
//                 "activityName": "Videos",
//                 "moduleId": 1,
//                 "moduleName": "Module 1",
//                 "minutes": 95
//             },
//             {
//                 "activityId": 8,
//                 "activityName": "Videos",
//                 "moduleId": 2,
//                 "moduleName": "Module 2",
//                 "minutes": 71
//             },
//             {
//                 "activityId": 8,
//                 "activityName": "Videos",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 86
//             },
//             {
//                 "activityId": 8,
//                 "activityName": "Videos",
//                 "moduleId": 4,
//                 "moduleName": "Module 4",
//                 "minutes": 75
//             },
//             {
//                 "activityId": 8,
//                 "activityName": "Videos",
//                 "moduleId": 5,
//                 "moduleName": "Module 5",
//                 "minutes": 62
//             },
//             {
//                 "activityId": 10,
//                 "activityName": "Discussion Boards",
//                 "moduleId": 1,
//                 "moduleName": "Module 1",
//                 "minutes": 60
//             },
//             {
//                 "activityId": 10,
//                 "activityName": "Discussion Boards",
//                 "moduleId": 2,
//                 "moduleName": "Module 2",
//                 "minutes": 60
//             },
//             {
//                 "activityId": 10,
//                 "activityName": "Discussion Boards",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 60
//             },
//             {
//                 "activityId": 10,
//                 "activityName": "Discussion Boards",
//                 "moduleId": 5,
//                 "moduleName": "Module 5",
//                 "minutes": 60
//             },
//             {
//                 "activityId": 11,
//                 "activityName": "Quizzes",
//                 "moduleId": 1,
//                 "moduleName": "Module 1",
//                 "minutes": 675
//             },
//             {
//                 "activityId": 11,
//                 "activityName": "Quizzes",
//                 "moduleId": 2,
//                 "moduleName": "Module 2",
//                 "minutes": 150
//             },
//             {
//                 "activityId": 11,
//                 "activityName": "Quizzes",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 360
//             },
//             {
//                 "activityId": 11,
//                 "activityName": "Quizzes",
//                 "moduleId": 4,
//                 "moduleName": "Module 4",
//                 "minutes": 585
//             },
//             {
//                 "activityId": 11,
//                 "activityName": "Quizzes",
//                 "moduleId": 5,
//                 "moduleName": "Module 5",
//                 "minutes": 450
//             },
//             {
//                 "activityId": 13,
//                 "activityName": "Self Assessments",
//                 "moduleId": 1,
//                 "moduleName": "Module 1",
//                 "minutes": 50
//             },
//             {
//                 "activityId": 13,
//                 "activityName": "Self Assessments",
//                 "moduleId": 3,
//                 "moduleName": "Module 3",
//                 "minutes": 50
//             },
//             {
//                 "activityId": 13,
//                 "activityName": "Self Assessments",
//                 "moduleId": 4,
//                 "moduleName": "Module 4",
//                 "minutes": 50
//             },
//         ]

//     expect(formatDataForBarChart(course, label, activityTotals)).toEqual({
//             "Module 1": 642,
//             "Module 2": 318,
//             "Module 3": 396,
//             "Module 4": 630,
//             "Module 5": 312,
//         })
//     })

// })