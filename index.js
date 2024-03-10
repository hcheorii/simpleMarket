let server = require("./server");
let router = require("./router");
let requestHandler = require("./requestHandler");
server.start(router.route, requestHandler.handle);
const mariadb = require("./database/connect/mariadb"); //db 불러오기
mariadb.connect(); //연결
