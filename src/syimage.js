
import isFunction from 'lodash/isFunction'

const syimage = weex.requireModule('mdsSyImage')

const SYImage = Object.create(null)

SYImage.install = (Vue, options) => {

    Vue.prototype.$syimage = {

        /**
         *  创建二维码
         * @param params
         *
         * {
         *    mianBigUrl:'http://www.baidu.com', // 二维码内容
         *    selectUrl:'http://mmm.png'  // 二维码中间图片
         * }
         * @param callback
         * @returns {Promise}
         */
        createSyntheticImage(params,callback){
            return new Promise((resolve, reject) => {
                syimage.createSyntheticImage( params ,  ({ status, code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        }

    }
}

Vue.use(SYImage)
