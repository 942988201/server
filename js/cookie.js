// //const session = require('koa-session')


module.exports = function(app){
	 let e=0

	return async function cookie(ctx,next){
		e++
		console.log("请求"+e)
		
		 //ctx.set('Access-Control-Allow-Origin','http://127.0.0.1:8848');
		 
		ctx.body={
		  "gg":555
		}
	}
} 