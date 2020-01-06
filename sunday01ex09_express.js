// express 설치 : npm install express --save(S)
const express = require('express')
const http = require('http')

//express 객체 생성
const app = express()//이렇게 express만 한 번 실횅해주면 app이 생성됨.


app.get('/', function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'})
    res.write('<h1>길동이의 홈페이지</h1>')
    res.end()
})


app.get('/profile', function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'})
    res.write('<h2>길동이의 profile 홈페이지</h2>')
    res.end()
})


const server = http.createServer(app)//여기에 app을 인자로 넣어주면 express로 시작하게 된단걸 의미.
server.listen(3000, function(){
    console.log('http://licalhost:3000')
})

