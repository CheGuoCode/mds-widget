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
                var val;
                try {
                    val = JSON.parse(data);
                } catch (error) {
                    val = data;
                }
                return status === 0 || code == 0 ? val : {}
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
        },
        setGlobal (key, value, callback) {
            return new Promise((resolve, reject) => {
                storage.setGlobalData(key.toString(), JSON.stringify(value), ({ status,code, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0 || code === 0)
                    status === 0 || code === 0 ? resolve(true) : reject(false)
                })
            })
        },
        setGlobalSync (key, value) {
            return storage.setGlobalDataSync(key.toString(), JSON.stringify(value))
        },
        getGlobal (key, callback) {
            return new Promise((resolve, reject) => {
                storage.getGlobalData(key.toString(), ({ status,code, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0 || code === 0)
                    status === 0 || code === 0 ? resolve(JSON.parse(data)) : reject(false)
                })
            })
        },
        getGlobalSync (key) {
            const { status,code, data } = storage.getGlobalDataSync(key.toString())
            if(typeof(data) =='string'){
                var val;
                try {
                    val = JSON.parse(data);
                } catch (error) {
                    val = data;
                }
                return status === 0 || code == 0 ? val : {}
            }else{
                return status === 0 || code == 0 ? data : {}
            }
        },
        deleteGlobal (key, callback) {
            return new Promise((resolve, reject) => {
                storage.deleteGlobalData(key.toString(), ({ status,code, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0 || code === 0)
                    status === 0 || code === 0 ? resolve(true) : reject(false)
                })
            })
        },
        deleteGlobalSync (key) {
            const { status,code } = storage.deleteGlobalDataSync(key.toString())
            return status === 0 || code === 0
        },
        removeAllGlobal (callback) {
            return new Promise((resolve, reject) => {
                storage.removeGlobalData(({ status,code, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0 || code === 0)
                    status === 0 || code === 0 ? resolve(true) : reject(false)
                })
            })
        },
        removeAllGlobalSync () {
            const { status,code } = storage.removeGlobalDataSync()
            return status === 0 || code === 0
        }
    }
}

Vue.use(Storage)
