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
        name: activities[i].activityName,
        percentage: Math.round(total / totalMinsAllActivities * 100),
        moduleId: activities[i].moduleId
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

    // getActivityMinTotal(activity) {
    //     return activity.input * activity.multiplier
    // },
    //
    // getArrayOfActivityTotals(array) {
    //     return module.activities.map(activity => this.getActivityMinTotal(activity))
    // },

    // formatData(data) {
        // return {
        //     courses: data.courses.map(course => {
        //         return {
        //             name: course.name,
        //             totalMins: // build reducer function to get this
        //             percentages: // use this.getPercentages() but for full course
        //         }
        //     }),
        //     modules: ,
        //     activities: data.activities.map(activity => {
        //         return {
        //             name: ,
        //             description: ,
        //             color: ,
        //         }
        //     }),
        // }
    // }
export const numOfMods = (course) => course.modules.map(mod => mod.number)

export const specificActivities = (course, label) => course.activityTotals.filter(activity => {
    return activity.activityName.includes(label)
})

export const formatDataForBarChart = (course, label, activityTotals) => numOfMods(course).reduce((accumulator, modNum) => {
    let found = specificActivities(course, label).find(mod => mod.moduleId === modNum)
    if (found) {
        accumulator[modNum] = found.minutes 
    } else {
        accumulator[modNum] = 0
    }
    return accumulator
}, {})
