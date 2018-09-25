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
    createAd ({commit}, payload) {
      payload.id = 'svdfgs'

      commit('createAd', payload)
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