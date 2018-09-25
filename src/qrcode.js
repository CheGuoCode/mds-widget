
import isFunction from 'lodash/isFunction'

const qrcode = weex.requireModule('mdsQRCode')

const QRCode = Object.create(null)

QRCode.install = (Vue, options) => {

    Vue.prototype.$qrcode = {

        /**
         * 扫描二维码
         */
        scanQRCode() {
            qrcode.scanQRCode()
        },

        /**
         *  识别图片二维码
         * @param imageUrl   // 待识别的图片链接
         * @param callback
         * @returns {Promise}
         */
        recognizeQRCode(imageUrl) {
            return new Promise((resolve, reject) => {
                qrcode.recognizeQRCode(imageUrl,  ({ status, code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        },

        /**
         *  创建二维码
         * @param params
         *
         * {
         *    content:'http://www.baidu.com', // 二维码内容
         *    centerLogoUrl:'http://mmm.png'  // 二维码中间图片
         * }
         * @param callback
         * @returns {Promise}
         */
        createQRCodeImage(params){
            return new Promise((resolve, reject) => {
                qrcode.createQRCodeImage( params ,  ({ status, code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        }

    }
}

Vue.use(QRCode)
