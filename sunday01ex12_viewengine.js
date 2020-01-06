

const http = require('http')
const express = require('express')
const app = express()
const router = express.Router()


app.set('port', 3000)//port번호 셋팅해주는 거.
// ejs 모듈 설치 : npm install djs -D(개발자 모드로 설치함. packge.json 에 표시됨. -S는 걍 설치하는거.)
app.set('view engine', 'ejs') //확장자 앞의 속성에다 ejs를 너허줬고. 그러니 파일 만들떄 ejs 안써줘도 되겠지.
app.set('views', __dirname + '/views')//절대경로 dirname 지정해주고 views라는 폴더경로 만들어줌. 접두어(경로)

/*
    app.use(function(req, res, next){
        //사용자 정의 미들웨어(일종의 필터.)
        console.log('>>>>>>> 첫번쨰 미들웨어 실행')

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})

        next()
    })
*/



router.route('/').get(function(req,res){
    console.log('get - /요청됨')
    res.write('<a href="/home">Go home</a>')
    res.end('<h2>homepagesㅇㅇㅇ</h2>')//res.end를 안해주면 무한루프 돌음.
    
})


router.route('/home').get(function(req,res){
    console.log('get - /home 요청됨')
    
    req.app.render('home', {'user':'길동'}, function(err, html){//지금 이 블록이 ejs 미들웨어임.
        if(err){
            console.log('렌더링 에러: ', err)
            return;//에러가 있으면 에러 걍 던져주고 끝내는 거임.
        }
        
        res.end(html)
    })//경로, 전달할 객체, 처리하는 부분은 콜백함수. nodeJS는 err가 첫번째 인자임. 2번쨰 인자는 html
    
})

router.route('/profile').get(function(req,res){
    console.log('get -/profile 요청됨')
    req.app.render('profile', {}, function(err, html){
        if(err){
            console.log('렌더링 에러', err)
            return
        }       
        
        res.end(html)
    })
})









app.use('/', router)//이게 미들웨어 설정해주는겨
const server = http.createServer(app)
server.listen(app.get('port'), function(){
    console.log('http://localhost:%d', app.get('port'))
})

