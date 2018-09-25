/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-02-09
*/

const pay = weex.requireModule('mdsPay')

var Pay = Object.create(null)

Pay.install = (Vue, options) => {
    Vue.prototype.$pay = {
        wechat (params) {
            return new Promise((resolve, reject) => {
                pay.payByWechat(params, ({ status, code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Pay)
