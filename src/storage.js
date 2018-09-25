import _isFunction from 'lodash/isFunction'
const storage = weex.requireModule('mdsStorage')

var Storage = Object.create(null)

Storage.install = (Vue, options) => {
    Vue.prototype.$storage = {
        set (key, value, callback) {
            return new Promise((resolve, reject) => {
                storage.setData(key.toString(), JSON.stringify(value), ({ status,code, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0 || code === 0)
                    status === 0 || code === 0 ? resolve(true) : reject(false)
                })
            })
        },
        setSync (key, value) {
            return storage.setDataSync(key.toString(), JSON.stringify(value))
        },
        get (key, callback) {
            return new Promise((resolve, reject) => {
                storage.getData(key.toString(), ({ status,code, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0 || code === 0)
                    status === 0 || code === 0 ? resolve(JSON.parse(data)) : reject(false)
                })
            })
        },
        getSync (key) {
            const { status,code, data } = storage.getDataSync(key.toString())
            if(typeof(data) =='string'){
                return status === 0 || code == 0 ? JSON.parse(data) : {}
            }else{
                return status === 0 || code == 0 ? data : {}
            }
        },
        delete (key, callback) {
            return new Promise((resolve, reject) => {
                storage.deleteData(key.toString(), ({ status,code, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0 || code === 0)
                    status === 0 || code === 0 ? resolve(true) : reject(false)
                })
            })
        },
        deleteSync (key) {
            const { status,code } = storage.deleteDataSync(key.toString())
            return status === 0 || code === 0
        },
        removeAll (callback) {
            return new Promise((resolve, reject) => {
                storage.removeData(({ status,code, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0 || code === 0)
                    status === 0 || code === 0 ? resolve(true) : reject(false)
                })
            })
        },
        removeAllSync () {
            const { status,code } = storage.removeDataSync()
            return status === 0 || code === 0
        }
    }
}

Vue.use(Storage)
