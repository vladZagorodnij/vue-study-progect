import * as fb from 'firebase'

class Ad {
  constructor (title, description, ownerId, imageSrc = '', promo=false, id = null) {
    this.title =title
    this.description =description
    // this.ownerId =ownerId
    this.imageSrc =imageSrc
    this.promo =promo
    this.id =id
  }
}

export default {
  state: {
    ads: [
      {
        title: 'first',
        description: 'first image',
        promo: false,
        imageSrc: 'http://opogode.ua/images/images/524328a760a5e0e716003394.jpg',
        id: '123'
      },
      {
        title: 'second',
        description: 'second image',
        promo: true,
        imageSrc: 'https://people.in.ua/wp-content/uploads/2017/02/sobaka-1-649x450.jpg',
        id: '1234'
      },
      {
        title: 'third',
        description: 'third image',
        promo: true,
        imageSrc: 'https://img.depo.ua/745xX/Dec2015/79593.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          payload.imageSrc,
          payload.promo
        )

        const ad = await fb.database().ref('ads').push(newAd)

        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key
        })
      } catch (error) {
        commit('setError',error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
