function compareVariable(){
    let num1 = 10;

    const num2 = 30;
    num2 = 20;
    alert('num2: '+ num2);
}


/*ID란에 입력된 값을 팝업창에 띄우기*/
function popId(){
    let userId = document.getElementById('txt_id').value;

    if (!userId){
        alert('아이디를 입력해주세요.');
    }
    else{
        alert(userId);
    }
}
