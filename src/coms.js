
const _com = weex.requireModule('mdsCommunication')
const Coms = Object.create(null)

Coms.install = (Vue, options) => {
    Vue.prototype.$coms = {
        call (to = +to, tip = true) {
            _com['call']({ to, tip })
        },
        sms (to = [], content = '') {
            return new Promise((resolve, reject) => {
                _com.sms(to, content, ({ status,code, errorMsg, data }) => {
                    status === 0||code === 0 ? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        },
        openWechat(){
            _com.openWechat();
        },
        contacts () {
            return new Promise((resolve, reject) => {
                _com.contacts(({ status,code, errorMsg, data }) => {
                   status === 0||code ===0 ? resolve(data) : reject({ status,code, errorMsg, data })
                })
            })
        },
        /**
         * 添加联系人
         * @param contact :  {  name:"孔XX", phone:"18334776477"}
         * @param callback
         * @returns resCode 返回码，成功为0
         */
        addContact(contact) {
            return new Promise((resolve, reject) => {
                _com.addContact( contact, ({ status,code, errorMsg, data }) => {
                    status === 0 || code === 0 ? resolve(data) : reject({ status, code, errorMsg, data })
                })
            })

        }
    }
}

Vue.use(Coms)
