export const calculations = {
  getPercentages(activities, type = '') {
    const activityTotals = activities.map(activity => {
      return activity.minutes
    })

    const totalMinsAllActivities = activityTotals.reduce((total, activity) => {
      return total + activity
    }, 0)

    const compiledActivityData = activityTotals.map((total, i) => {
      return {
        activityName: activities[i].activityName,
        percentage: Math.round(total / totalMinsAllActivities * 100),
        moduleId: activities[i].moduleId,
        moduleName: activities[i].moduleName
      }
    })

    if (type === 'activity') {
      return compiledActivityData.reduce((acc, curr) => {
        if (acc[curr.name]) {
          acc[curr.name] += curr.percentage

        } else {
          acc[curr.name] = curr.percentage
        }

        return acc
      }, {})

    } else {
      return compiledActivityData
    }
  }
}
