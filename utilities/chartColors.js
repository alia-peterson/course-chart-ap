const colors = {
  'Reading (understand)': '#FF6384',
  'Reading (study guide)': '#36A2EB',
  'Writing (research)': '#FFCE56',
  'Writing (reflection)': '#1dea49',
  'Learning Objects (matching/multiple choice)': '#ef1aae',
  'Learning Objects (case study)': '#0b04fa',
  'Lecture': '#9a1aa0',
  'Videos': '#3f218c',
  'Websites': '#ebfc05',
  'Discussion Boards': '#42e6d0',
  'Quizzes': '#bb0935',
  'Exams': '#5d9b35',
  'Self Assessments': '#ffa500',
  'Miscellaneous': '#ff2500'
}

export default function getColor(activity) {
  return colors[activity]
}
