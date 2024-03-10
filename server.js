let http = require("http"); //http모듈 불러오는 것
let url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname; //요청한 url의 pathname(경로) -> localhost:8888/(여기)
        route(pathname, handle, response);
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start; //바깥에서 start를 사용할 수 있도록 해주는 함수.
