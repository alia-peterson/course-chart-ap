export const activites = {
    readingUnderstand: {
      id: 1,
      name: 'Reading (understand)',
      description: '130 wpm; 10 pages per hour',
      metric: '# of pages',
      multiplier: 6,
      custom: FALSE
    },
    readingStudyGuide: {
      id: 2,
      name: 'Reading (study guide)',
      description: '65 wpm; 5 pages per hour',
      metric: '# of pages',
      multiplier: 12,
      custom: FALSE
    },
    writingReflection: {
      id: 3,
      name: 'Writing (research)',
      description: '6 hours per page (500 words, single-spaced)',
      metric: '# of pages',
      multiplier: 360,
      custom: FALSE
    },
    writingResearch: {
      id: 4,
      name: 'Writing (reflection)',
      description: '90 minutes per page (500 words, single-spaced)',
      metric: '# of pages',
      multiplier: 90,
      custom: FALSE
    },
    learningObjectMatching: {
      id: 5,
      name: 'Learning Objects (matching/multiple choice)',
      description: '10 minutes per object',
      metric: '# of LOs',
      multiplier: 10,
      custom: FALSE
    },
    learningObjectCaseStudy: {
      id: 6,
      name: 'Learning Objects (case study)',
      description: '20 minutes per object',
      metric: '# of LOs',
      multiplier: 20,
      custom: FALSE
    },
    lecture: {
      id: 7,
      name: 'Lecture',
      description: 'Factor 1.25x the actual lecture runtime',
      metric: '# of minutes',
      multiplier: 1.25,
      custom: FALSE
    },
    videos: {
      id: 8,
      name: 'Videos',
      description: 'Factor the full length of video',
      metric: '# of minutes',
      multiplier: 1,
      custom: FALSE
    },
    websites: {
      id: 9,
      name: 'Websites',
      description: '10-20 minutes',
      metric: '',
      multiplier: 1,
      custom: FALSE
    },
    discussionBoards: {
      id: 10,
      name: 'Discussion Boards',
      description: '250 words/60 minutes for initial post or 2 replies',
      metric: '# of discussion boards',
      multiplier: 60,
      custom: FALSE
    },
    quizzes: {
      id: 11,
      name: 'Quizzes',
      description: 'Average 1.5 minutes per question',
      metric: '# of questions',
      multiplier: 1.5,
      custom: FALSE
  },
  exam: {
    id: 12,
    name: 'Exams',
    description: 'Average 1.5 minutes per question',
    metric: '# of questions',
    multiplier: 1.5,
    custom: FALSE
},
selfAssessments: {
    id: 13,
    name: 'Self Assessments',
    description: 'Average 1 minute per question',
    metric: '# of questions',
    multiplier: 1,
    custom: FALSE
  },
  miscellaneous: {
    id: 14,
    name: 'Miscellaneous',
    description: 'any additional assignments not listed',
    metric: '',
    multiplier: 1,
    custom: FALSE
  }
}