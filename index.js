
// 配置方法
import './src/mixins.js'
//字体
import './src/font.js'
// 弹窗
import './src/notice.js'
// 获取地理位置
import './src/geo.js'
// 获取相机信息
import './src/camera.js'
// 图片操作相关
import './src/image.js'
// 设置导航
import './src/nav.js'
// bindingx
import './src/bindingx.js'
// 存储相关
import './src/storage.js'
// 全局事件
import './src/events.js'
// 工具方法
import './src/tools.js'
//联系人、短信
import './src/coms.js'
// 路由
import Router from './src/router.js'
// 发送请求
import Axios from './src/axios.js'
//生成图片二维码
import './src/syimage'
//扫描二维码
import './src/qrcode'

//皮肤管理
// import './src/skin'

// 支付相关(已抽离第三方插件)
// import './src/pay.js'

// 分享(已抽离第三方插件)
// import './src/share.js'

let instance = null
export default class Widget {
	constructor ({ router, ajax }) {
		if (!instance) {
			Vue.use(new Axios(ajax))
			Vue.use(new Router(router))
			instance = this
		}
        return instance
	}
}
