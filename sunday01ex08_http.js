

var http = require('http')
var server = http.createServer()


server.on('request', function(req,res){
    res.writeHead(200, {'Content-type' : 'text/html;charset=utf8'})
    res.write('<h2>길동이의 홈페이지에 오신것을 환영합니다.</h2>')
    res.end('hello world')
    
    server.close()
})


server.on('connection', function(socket){
    console.log('>>>>소켓 연결 됨...')
})

server.on('close',function(){
    console.log('close')
})


// 아래가 서버 실행 코드.
server.listen(3000, function(){
    console.log('서버 실행중...')
    
})