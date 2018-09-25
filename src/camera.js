/**
 * @Author: songqi
 * @Date:   2017-01-11e
 * @Last modified by:   songqi
 * @Last modified time: 2017-03-08
 */

const camera = weex.requireModule('mdsCamera')
const Camera = Object.create(null)

Camera.install = (Vue, options) => {
    Vue.prototype.$camera = {
        // 扫一扫
        scan () {
            return new Promise((resolve, reject) => {
                camera.scan(({ status, code, errorMsg, data }) => {
                   status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Camera)
