export const calculations = {
  filterModuleActivities(activities, id) {
    return activities.filter((activity) => activity.moduleId === id);
  },

  getModulePercentages(moduleActivities) {
    const moduleActivityTotal = moduleActivities.reduce((total, activity) => {
      return total + activity.minutes;
    }, 0);

    return moduleActivities.map((activity) => {
      const decimal = activity.minutes / moduleActivityTotal;
      const percentage = decimal * 100;
      const truncated = Math.trunc(percentage);
      return {
        [activity.activityName]: truncated,
      };
    });
  },

  getPercentages(activities, activityTypes) {
    const typeIdAndArrays = activityTypes.map((type) => [type.id, 0]);
    const types = Object.fromEntries(typeIdAndArrays);
    activities.forEach((activity) => {
      types[activity.activityId] += activity.minutes;
    });

    const typeTotalsArray = Object.values(types);

    const totalCourseActivities = typeTotalsArray.reduce((total, activity) => {
      return total + activity;
    }, 0);

    const percentages = typeTotalsArray.map((total, i) => {
      const decimal = total / totalCourseActivities;
      const percent = decimal * 100;
      return {
        [activityTypes[i].name]: Math.trunc(percent),
      };
    });
    return percentages;
  },
};
