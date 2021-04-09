const data = {
  courses: [
    {
      id: 1,
      name: '',
      institution: '',
      creditHours: 4,
      length: 16
    }
  ], 
  modules: [
    {
      id: 2,
      number: 8,
      courseId: 194753,
      name: ''
    }
  ],
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
