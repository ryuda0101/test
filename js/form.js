// 변수 생성
const cont8_boxs = document.querySelectorAll(".cont8 .right_box .box");

const send_btn = document.querySelector(".cont8 .right_box .btn");

let checkList = [
    {
        regexCheck:/^[ㄱ-힣]{2,4}$/,
        correct:"Ok",
        wrong:"your name must consist of at least 2 characters",
        trueOrfalse:false
    },
    {
        regexCheck:/^[\w]+\@+[a-z]+\.[a-z]{2,3}$/,
        correct:"Ok",
        wrong:"Please enter a valid email address.",
        trueOrfalse:false
    },
    {
        regexCheck:/^[\d]{10,13}$/,
        correct:"Ok",
        wrong:"Please enter at least 10 characters.",
        trueOrfalse:false
    },
    {
        regexCheck:/^[\d]{10,11}$/,
        correct:"Ok",
        wrong:"Please enter a valid phone number.",
        trueOrfalse:false
    }
]

let lastCheck = false;

// 유효성 검사 시작
cont8_boxs.forEach(function(item,index){
    item.querySelector("input").addEventListener("keyup",function(){
        let value = item.querySelector("input").value;
        let checkResult = checkList[index].regexCheck.test(value);

        if(checkResult){
            cont8_boxs[index].querySelector("span").innerText = checkList[index].correct;
            cont8_boxs[index].querySelector("span").style.color = "green";
            checkList[index].trueOrfalse = true;
        }
        else {
            cont8_boxs[index].querySelector("span").innerText = checkList[index].wrong;
            cont8_boxs[index].querySelector("span").style.color = "red";
            checkList[index].trueOrfalse = false;
        }
    });
});

send_btn.addEventListener("click",function(e){
    // 페이지 이동 방지
    e.preventDefault();

    lastCheck = checkList.every(element => element.trueOrfalse == true);
    // every함수로 해당 값이 trueOrfalse의 값들이 전부 true라면 lastCheck도 true / 하나라도 false라면 lastCheck는 false
    console.log(lastCheck);

    // true
    if (lastCheck) {
        alert("Send a message.");
    }
    // false
    else {
        alert("Please enter a valid information.");
    }
});