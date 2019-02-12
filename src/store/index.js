import fakeApi from '@/lib/fakeApi'
import Vue from 'vue'

const store = {
  state: {
    activities: {},
    categories: {}
  },
  generateUid () { return Math.floor(new Date() * Math.random()) },

  fetchActivities () {
    return fakeApi.get('activities', {force: 1})
      .then(activities => {

        Object.keys(activities).forEach((key) => {
          Vue.set(this.state.activities, key, activities[key])
        })

        return activities
      })
  },

  fetchCategories () {
    return fakeApi.get('categories', {force: 1})
      .then(categories => {
        Object.keys(categories).forEach((key) => {
          Vue.set(this.state.categories, key, categories[key])
        })

        return categories
      })
  },

  fetchUser () {
    return {
      name: 'Filip Jerga',
      id: '-Aj34jknvncx98812',
    }
  },

  createActivityAPI (activity) {
    activity.id = this.generateUid()
    activity.progress = 0
    activity.createdAt = new Date()
    activity.updatedAt = new Date()

    return fakeApi.post('activities', activity)
  },


  deleteActivityAPI (activity) {
    return fakeApi.delete('activities', activity)
  }
}

export default store
