import isFunction from 'lodash/isFunction'

const navigator = weex.requireModule('mdsNavigator')
const Navigator = Object.create(null)

Navigator.install = (Vue, options) => {
    Vue.prototype.$navigator = {
        setLeftItem (options, callback) {
            navigator.setLeftItem(options, () => {
               isFunction(callback) && callback()
            })
        },
        setRightItem (options, callback) {
            navigator.setRightItem(options, () => {
                isFunction(callback) && callback()
            })
        },
        setCenterItem (options, callback) {
            navigator.setCenterItem(options, () => {
              isFunction(callback) && callback()
            })
        },
        setNavigationInfo (options, callback) {
            navigator.setNavigationInfo(options, () => {
                isFunction(callback) && callback()
            })
        },
        hookSysBack(callback){
            navigator.hookSysBack&&navigator.hookSysBack(callback);
        },
        hookNavigationBack(callback){
            navigator.hookNavigationBack&&navigator.hookNavigationBack(callback);
        }
    }
}

Vue.use(Navigator)
