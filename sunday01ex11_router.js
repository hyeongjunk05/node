

const http = require('http')
const express = require('express')
const app = express()
const router = express.Router()


app.set('port', 3000)//port번호 셋팅해주는 거.

app.use(function(req, res, next){
    //사용자 정의 미들웨어(일종의 필터.)
    console.log('>>>>>>> 첫번쨰 미들웨어 실행')
    
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
    
    next()
})

app.use('/', function(req, res, next){
    //사용자 정의 미들웨어
    console.log('>>>>>>> / 두번쨰 미들웨어 실행')
    res.write('<a href="/home">Go home</a>')
    
    next()
})


router.route('/').get(function(req,res){
    console.log('get - /요청됨')
    res.write('<a href="/home">Go home</a>')
    res.end('<h2>homepagesㅇㅇㅇ</h2>')//res.end를 안해주면 무한루프 돌음.
    
})


router.route('/home').get(function(req,res){
    console.log('get - /요청됨')
    
    res.end('<h2>home....</h2>')
    
})









app.use('/', router)//이게 미들웨어 설정해주는겨
const server = http.createServer(app)
server.listen(app.get('port'), function(){
    console.log('http://localhost:%d', app.get('port'))
})

