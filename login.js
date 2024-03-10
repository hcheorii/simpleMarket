function compareVariable() {
    //let과 const의 차이는 초기화 유무 차이.
    let num1 = 10; //계속 변경가능.
    num1 = 20; //먼저 들어간 값을 빼고 20을 넣은 것.
    alert(`num1 = ${num1}`); //20
}

// id란에 입력된 값을 팝업창에 띄우기
function popId() {
    let userId = document.getElementById("txt_id").value;
    if (userId == "") {
        alert("아이디를 입력해주세요.");
    } else {
        alert(userId);
    }
}
// 나만의 함수 만들고, 버튼 클릭하면 호출하기.
function myFunction() {
    onclick = "alert('1')";
    onclick = "alert('2)";
    onclick = "alert('3')";
}
