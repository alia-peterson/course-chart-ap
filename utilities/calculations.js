// export const calculations = {
//   getPercentages(activities, type = '') {
    
//     const activityTotals = activities.map(activity => {
//       return activity.minutes
//     })

//     const totalMinsAllActivities = activityTotals.reduce((total, activity) => {
//       return total + activity
//     }, 0)

//     const compiledActivityData = activityTotals.map((total, i) => {
//       return {
//         name: activities[i].activityName,
//         percentage: Math.round(total / totalMinsAllActivities * 100),
//         moduleId: activities[i].moduleId
//       }
//     })

//     if (type === 'activity') {
//       return compiledActivityData.reduce((acc, curr) => {
//         if (acc[curr.name]) {
//           acc[curr.name] += curr.percentage

//         } else {
//           acc[curr.name] = curr.percentage
//         }

//         return acc
//       }, {})

//     } else {
//       return compiledActivityData
//     }
//   }
// }

const numOfMods = (course) => course.modules.map(mod => mod.name)

const specificActivities = (activityTotals, label) => activityTotals.filter(activity => {
    return activity.activityName.includes(label)
})

export const formatDataForBarChart = (course, label, activityTotals) => numOfMods(course).reduce((accumulator, modName) => {
    let found = specificActivities(activityTotals, label).find(mod => mod.moduleName === modName)
    if (found) {
        accumulator[modName] = found.minutes 
    } else {
        accumulator[modName] = 0
    }
    return accumulator
}, {})
