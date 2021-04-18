export const calculations = {
    // To get an array of activity totals
    // map through either course or module activities and for each activity return a number
    // and that number is input times multiplier
    getPercentages = (module) => {
        // can pass module or course as a parameter
        const arrayOfActivityTotals = this.getArrayOfActivityTotals(module)
        const totalMinsAllActivities = arrayOfActivityTotals.reduce((total, activity) => total + activity, 0)
        return arrayOfActivityTotals.map(total => {
            return total / totalMinsAllActivities
        })

    },

    getActivityMinTotal = (activity) => {
        return activity.input * activity.multiplier
    },

    getArrayOfActivityTotals = (module) => {
        return module.activities.map(activity => this.getActivityMinTotal(activty))
    },

    formatData = (data) => {
        return {
            courses: data.courses.map(course => {
                return {
                    name: course.name,
                    totalMins: // build reducer function to get this
                    percentages: // use this.getPercentages() but for full course
                }
            }),
            modules: ,
            activities: data.activities.map(activity => {
                return {
                    name: ,
                    description: ,
                    color: ,
                }
            }),
        }
    }
}
