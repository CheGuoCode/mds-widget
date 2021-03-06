const imageModule = weex.requireModule('mdsImage')
const browser = weex.requireModule('mdsBrowserImg')
const bmAxios = weex.requireModule('mdsAxios')

const Image = Object.create(null)

Image.install = (Vue, options) => {
    Vue.prototype.$image = {
        // upload change to pickAndUpload
        pickAndUpload ({ mediaType='', maxCount = 1, imageWidth = 0, url = '', allowCrop = false, header = {}, params = {}}) {
            return new Promise((resolve, reject) => {
                var _params = {
                        mediaType,
                        maxCount,
                        imageWidth,
                        allowCrop,
                        header,
                        params
                    }
                if (url) _params.url = url
                imageModule.uploadImage(_params, ({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status , code , errorMsg, data })
                })
            })
        },
        upload ({ url = '', params = {}, header = {}, source = [] }) {
            return new Promise((resolve, reject) => {
                bmAxios.uploadImage({
                    url, params, header, images: source
                }, ({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        },

        browser ({ index = 0, images = [], type = 'network' }) {
            return new Promise((resolve, reject) => {
                browser.open({
                    index,
                    images,
                    type
                }, ({ status, code, errorMsg, data }) => {
                    status === 0 || code ===0 ? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        },
        camera ({ imageWidth = 0, allowCrop = false }) {
            return new Promise((resolve, reject) => {
                imageModule.camera({
                    imageWidth,
                    allowCrop
                }, ({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        },
        pick ({ maxCount = 1, imageWidth = 0, allowCrop = false }) {
            return new Promise((resolve, reject) => {
                imageModule.pick({
                    maxCount,
                    imageWidth,
                    allowCrop
                }, ({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        },
        preview ({ index = 0, images = [] }) {
            return new Promise((resolve, reject) => {
                imageModule.preview({
                    index,
                    images
                }, ({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Image)
