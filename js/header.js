
let times = 0
const header = (ctx,next)=>{
	times++;
	console.log('这是第'+times+'次请求')
	ctx.set('Access-Control-Allow-Origin','http://127.0.0.1:8848');
	ctx.set("ceshi1",'gggg');//不能为中文
	ctx.set("ceshi2",'gggg');
	ctx.set('Access-Control-Allow-Headers','qianduanceshi1,qianduanceshi2');
	ctx.set("Access-Control-Expose-Headers",'ceshi1,ceshi2,Date')
	ctx.set('Access-Control-Allow-Credentidals','true')
	
	
	let url =ctx.url;
	 
	//从request中获取GET请求
	let request =ctx.request;
	let req_query = request.query;
	let req_querystring = request.querystring;
	 
	//从上下文中直接获取
	let ctx_query = ctx.query;
	let ctx_querystring = ctx.querystring;
	 
	ctx.body={
	    url,
	    req_query,
	    req_querystring,
	    ctx_query,
	    ctx_querystring
	}
	next()
}
	


module.exports=header