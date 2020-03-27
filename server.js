console.log("app is running");
console.time()
const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new koa();
const header = require("./js/header.js");
const cookie = require("./js/cookie.js")
const session = require('koa-session')



app.use(header);
app.use(cookie(app))//设置了很多信息的cookie







app.listen(3000)
console.timeEnd()


