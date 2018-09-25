
const tools = weex.requireModule('mdsTool')
const Tools = Object.create(null)

Tools.install = (Vue, options) => {
    Vue.prototype.$tools = {
        resignKeyboard () {
            return new Promise((resolve, reject) => {
                tools.resignKeyboard(({ status, code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        },

        // 是否安装微信
        // isInstallWXApp () {
        //     return new Promise((resolve, reject) => {
        //         tools.isInstallWXApp(({ status, code, errorMsg, data }) => {
        //             status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
        //         })
        //     })
        // },

        // // 获取 cid
        // getCid () {
        //     return new Promise((resolve, reject) => {
        //         tools.getCid(({ status, code, errorMsg, data }) => {
        //            status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
        //         })
        //     })
        // },

        networkStatus() {
             return tools.networkStatus()
        },

        watchNetworkStatus() {
            return new Promise((resolve, reject) => {
                tools.watchNetworkStatus(({ status, code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        },

        clearWatchNetworkStatus() {
            tools.clearWatchNetworkStatus()
            return true
        },

        // 复制内容到剪切板
        copyString (string) {
            return new Promise((resolve, reject) => {
                tools.copyString(string, ({ status, code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        },

        // 获取 导航 Bar 高度
        getNavBarHeight(callback) {
            return new Promise((resolve, reject) => {
                tools.navBarHeight(resData => {
                    if (isFunction(callback)) {
                        callback.call(this, resData)
                    }
                    if (resData && resData.code == 0) {
                        resolve(resData)
                    } else {
                        reject(resData)
                    }
                })
            });
        },

        // 获取 状态栏 Bar 高度
        getStatusBarHeight(callback) {
            return new Promise((resolve, reject) => {
                tools.statusBarHeight(resData => {
                    if (isFunction(callback)) {
                        callback.call(this, resData)
                    }
                    if (resData && resData.code == 0) {
                        resolve(resData)
                    } else {
                        reject(resData)
                    }
                })
            });

        },

        // 获取 导航栏 + 状态栏 高度
        getNavHeight(callback) {
            return new Promise((resolve, reject) => {
                tools.navHeight(resData => {
                    if (isFunction(callback)) {
                        callback.call(this, resData)
                    }
                    if (resData && resData.code == 0) {
                        resolve(resData)
                    } else {
                        reject(resData)
                    }
                })
            });

        },

        scan () {
            return new Promise((resolve, reject) => {
                tools.scan(({ status, code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })
        }
    }

    // support bmchat send options include function option
    Vue.prototype.$format = (options) => {
        return JSON.stringify(JSON.stringify(options, function (key, val) {
            if (typeof val === 'function') {
                return val + '';
            }
            return val;
        }))
    }
}

Vue.use(Tools)
