const session = require('koa-session')


module.exports = function(app){
	 let e=0
	options={
	    maxAge:"000000000"    ,   //cookie有效时长，单位：毫秒数
	    expires:"0000000000"  ,    //过期时间，unix时间戳
	    //path:"/" ,        //cookie保存路径, 默认是'/，set时更改，get时同时修改，不然会保存不上，服务同时也获取不到
	    //domain:".xxx.com",       //cookie可用域名，“.”开头支持顶级域名下的所有子域名
	    //secure:"false",       //默认false，设置成true表示只有https可以访问
	    httpOnly:"false",     //true，客户端不可读取
	    overwrite:"true"    //一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。
	}
	return async function cookie(ctx,next){
		e++
		console.log("请求了cookie"+e)
		ctx.cookies.set("cookie3","ctxcookies",{
       // domain: 'http://127.0.0.1:8848',  // 写cookie所在的域名
        //path: '/',       // 写cookie所在的路径
        //maxAge: 10 * 60 * 1000, // cookie有效时长
        //expires: new Date('2017-02-15'),  // cookie失效时间
		//Secure:,
		SameSite  :'None',// http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html
        httpOnly: false,  // 是否只用于http请求中获取
        overwrite: true})//这两个冲突
		ctx.set('set-cookie',"cookie3=set-cookie;domain:http://127.0.0.1;SameSite=None;Secure=false")//这两个冲突
		ctx.body={
		  "name":"这是cookie请求",
		  "cookie":"这是前端传来的cookie"+ctx.headers.cookie
		}
		next()
	}
} 