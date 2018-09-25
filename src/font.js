/**
 * @Author: songqi
 * @Date:   2017-01-11
 * @Last modified by:   songqi
 * @Last modified time: 2017-05-08
 */

const bmFont = weex.requireModule('mdsFont')
const Font = Object.create(null)

Font.install = (Vue, options) => {
    Vue.prototype.$font = {
        changeFontSize (options) {
            return new Promise((resolve, reject) => {
                bmFont.changeFontSize({
                    fontSize: options.fontSize || 'NORM'
                }, ({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        },

        getFontSize () {
            return new Promise((resolve, reject) => {
                bmFont.getFontSize(({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Font)
