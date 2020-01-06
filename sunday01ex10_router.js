//이건 외우라고 한다.
//지금 이게 기본적으로 서버 구현하는 거임. 나머지는 다 여기에다 갖다가 살만 붙이면 됨.

const http = require('http')
const express = require('express')
const app = express()
const router = express.Router()


app.set('port', 3000)

router.route('/').get(function(req,res){//라우터 패쓰 만들어주기.
    console.log('/요청 됨...')
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
    res.write('<h1>길동이의 홈페이지</h1>')
    res.write('<a href="/home">길동이의 홈페이지</a>')
    
    res.end()
})


router.route('/home').get(function(req,res){
    console.log('/home 요청 됨...')
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
    res.write('<a href="/">길동이의</a>')
    res.end('<h2>길동이 home page</h2>')
})






// router 미들웨어는 서버 실행 전에 등록한다.
app.use('/', router)
const server = http.createServer(app)//서버 생성
server.listen(app.get('port'), function(){//서버 실행
    console.log('http://localhost:%d', app.get('port'))
    
})
