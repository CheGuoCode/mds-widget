const geolocation = weex.requireModule('mdsGeolocation')
const Geolocation = Object.create(null)

Geolocation.install = (Vue) => {
    Vue.prototype.$geo = {
        get () {
            return new Promise((resolve, reject) => {
                geolocation.getGeolocation(({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code,errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Geolocation)
