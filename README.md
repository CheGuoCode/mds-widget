mds widget is the two encapsulation for mds module.

## How to use
1.install mds-widget in mds init project.
```
$ npm i https://github.com/CheGuoCode/mds-widget.git -S
```
2.init widget in appboard js bundle.(default: `config/index.js`)
``` js
import widget from 'mds-Widget'

const options = {}

new widget(options)
```

## Config options
```js
const options = {
    router: {
        /**
         * 路由配置表
         */
        routes: {}
    },
    ajax: {
        baseUrl: 'http://app.weex-mds.com:52077',
        /**
         * 接口别名
         */
        apis: {},
        // 接口超时时间
        timeout: 30000,

        /**
         * 请求发送统一拦截器 （可选）
         * options 你请求传入的所有参数和配置
         * next
         */
        requestHandler (options, next) {
            //console.log('request-opts', options)
            next()
        },
        /**
         * 请求返回统一拦截器 （可选）
         * options 你请求传入的所有参数和配置
         * resData 服务器端返回的所有数据
         * resolve 请求成功请resolve你得结果，这样请求的.then中的成功回调就能拿到你resolve的数据
         * reject 请求成功请resolve你得结果，这样请求的.then中的失败回调就能拿到你reject的数据
         */
        responseHandler (options, resData, resolve, reject) {
            const { status, errorMsg, data } = resData
            if (status !== 200 && code !== 200) {
                console.log(`invoke error status: ${status || code}`)
                console.log(`invoke error message: ${errorMsg}`)
                reject(resData)
            } else {
                // 自定义请求逻辑
                resolve(data)
            }
        }
    }
```

`router.routes`: config $router.open path alias
```js
routes: {
	'demo': {
        title: 'weex-mds demo',
        url: '/pages/demo/index.js'
    }
}
```

#### `ajax.baseUrl`: config you request baseUrl
#### `ajax.apis`: config you request path alias
```js
apis: {
    'COMMON.getInfo': '/test/info/'
}
```
 also you can config dynamic path.
```js
apis: {
    'COMMON.getInfo': '/test/info/{plaform}/{id}'
}
```
and we deliver them in $get/$post params option.
```js
this.$get({
    name: 'COMMON.getInfo',
    params: {
        platform: 'app',
        id: 3
    },
    data: {
        name: 'mds'
    }
})
```
finally our request url become :
```
ajax.baseUrl + /test/info/app/3?name=mds
```

#### `ajax.timeout`: request timeout time.(ms)
#### `ajax.requestHandler`: request Interceptor
#### `ajax.responseHandler`: response Interceptor

## How to develop

1.init mds project.

```
$ mds init
```

2.cd your project and enter src/js

```
$ cd mds-demo/src/js
```

3.clone mds-widget.git.
```
$ git clone https://github.com/CheGuoCode/mds-widget.git
```

4.add config `mds.dev.js` alias option.
```js
"MdsWidget": "js/mds-widget"
```

5.init widget in appboard js bundle.(default: `config/index.js`)
```js
import mdsWidget from 'mdsWidget'

const options = {}

new MdsWidget(options)
```

