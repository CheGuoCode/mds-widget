import isFunction from 'lodash/isFunction'
var skin = weex.requireModule('mdsTheme');


var Theme = Object.create(null);
Theme.install = (Vue, options) => {
    Vue.prototype.$theme = {
        /**
         * 切换主题
         * @param params   {'filename':'xxxtheme.json','orginname':'xxx.json'} 
         * orginname:代表存在于原生项目下的主题文件名称，filename代表存在于mds项目中assets/skin下的文件名称，不传参数取原生下的默认文件
         * @param callback 回调
         * @returns {Promise}
         * ex:
         * this.$theme.change({orginname:'buletheme.json'},res=>{
                this.$notice.toast('切换成功');
            });
        */
        change(param,callback){
                skin.change( param , res => {
                    if(isFunction(callback)){
                        callback.call(this, res)
                    }
                })
        }
    }
}



Vue.use(Theme)