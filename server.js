console.log("app is running");
console.time()
const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new koa();
const header = require("./js/header.js");
const cookie = require("./js/cookie.js")

app.use(cookie(app));
//app.use(header);






app.listen(3000)
console.timeEnd()


