
const data = {
  activities: {
    '1546968934': {
      id: '1546968934',
      title: 'Learn Vue.js',
      notes: 'I started today and it was not good.',
      progress: 100,
      category: '1546969049',
      createdAt: 1546969144391,
      updatedAt: 1546969144391
    },
    '1546969212': {
      id: '1546969212',
      title: 'Read Witcher Books',
      notes: 'These books are super nice',
      progress: 50,
      category: '1546969049',
      createdAt: 1546969144391,
      updatedAt: 1546969144391
    }
  },
  categories: {
    '1546969049': {text: 'books', id: '1546969049'},
    '1546969225': {text: 'movies', id: '1546969225'}
  }
}

class FakeApi {
  canContinue () {
    const rndNumber = Math.floor(Math.random() * 10)

    if (rndNumber > 5) {
      return true
    }

    return false
  }


  get (resource) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.canContinue()) {
          resolve(data[resource])
        } else {
          reject('Cannot fetch' + resource)
        }
      }, 1000)
    })
  }


}

export default new FakeApi()
