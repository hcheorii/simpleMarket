//Router가 경로를 정해주면 뭐 해야하는지 알려주는 코드

const mariadb = require("./database/connect/mariadb");

function main(response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Main page");
    mariadb.query("SELECT * FROM product", function (err, rows) {
        console.log(rows);
    }); //sql던지기 , rows는 결과

    response.end();
}

function login(response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Login page");
    response.end();
}

let handle = {}; //key, value쌍으로 이루어진

handle["/"] = main;
handle["/login"] = login;

exports.handle = handle;
