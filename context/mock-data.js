const data = {
    courses: [{
      "Id":1,
      "Name":"Foundations of Nursing",
      "Institution":"Colorado Nursing College",
      "CreditHours":3,
      "Length":8,
      "CreatedAt":"",
      "UpdatedAt":"",
      "Modules":[
        {
            "id":1,
            "name":"Module 1",
            "number":1,
            "CourseId":1
        },
        {
            "id":2,
            "name":"Module 2",
            "number":2,
            "CourseId":1
        },
        {
            "id":3,
            "name":"Module 3",
            "number":3,
            "CourseId":1
        },
        {
            "id":4,
            "name":"Module 4",
            "number":4,
            "CourseId":1
        },
        {
            "id":5,
            "name":"Module 5",
            "number":5,
            "CourseId":1
        },
        {
            "id":6,
            "name":"Module 6",
            "number":6,
            "CourseId":1
        },
        {
            "id":7,
            "name":"Module 7",
            "number":7,
            "CourseId":1
        },
        {
            "id":8,
            "name":"Module 8",
            "number":8,
            "CourseId":1
        }
      ]
    }],
  activities: [
    {
      id: 3,
      name: 'readingUnderstand',
      description: '',
      metric: '',
      multiplier: 1,
      custom: false
    },
    {
      id: 4,
      name: 'readingStudyGuide',
      description: '',
      metric: '',
      multiplier: 2,
      custom: false
    }
  ],
  moduleActivities: [
    {
      id: 5,
      input: 25,
      notes: '',
      moduleId: 2,
      activityId: 3
    }
  ],
  misc: {
    id: 25,
    name: '',
    description: '',
    notes: '',
    creditHours: 6,
    readingUnderstand: 2,
    readingStudyGuide: 2,
    writingResearch: 2,
    writingReflection: 2,
    learningObjCS: 2,
    learningObjMC: 2,
    lecture: 2,
    video: 2,
    website: 2,
    discussionBoard: 2,
    misc: 2,
    quiz: 2,
    exam: 2,
    selfAssessment: 2,
    courseId: 2
  },
  miscMultipliers: {
    readingUnderstand: 6,
    readingStudyGuide: 2,
    writingResearch: 7,
    writingReflection: 2,
    learningObjCS: 6,
    learningObjMC: 2,
    lecture: 3,
    video: 4,
    website: 2,
    discussionBoard: 1,
    misc: 3,
    quiz: 5,
    exam: 6,
    selfAssessment: 7,
    courseId: 3
  },

  allActivities: [
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

export default data
