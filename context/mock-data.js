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
  }
}

export default data
