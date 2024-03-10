const mariadb = require("mysql"); //mysql 모듈 불러오기

const conn = mariadb.createConnection(
    //연결생성
    {
        host: "localhost", //로컬호스트 적는 자리
        port: 3306,
        user: "root",
        password: "root",
        database: "Tennis",
    } //데이터베이스에 접속하는 방법
);

module.exports = conn; //연결을 다른 곳에서 사용할 수 있게..
