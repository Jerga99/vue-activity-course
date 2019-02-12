import fakeApi from '@/lib/fakeApi'

const store = {
  state: {
    activities: {},
    categories: {}
  },
  generateUid () { return Math.floor(new Date() * Math.random()) },

  fetchActivities () {
    return fakeApi.get('activities', {force: 1})
  },

  fetchCategories () {
    return fakeApi.get('categories', {force: 1})
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
