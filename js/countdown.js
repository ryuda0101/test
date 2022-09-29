// 변수 생성
let countValue = [
    {
        plus:50,
        tag:".cont4 .cont4_bot .box1 h2",
        complete:1200,
        speed:50 
    },
    {
        plus:10,
        tag:".cont4 .cont4_bot .box2 h2",
        complete:120,
        speed:80
    },
    {
        plus:1,
        tag:".cont4 .cont4_bot .box3 h2",
        complete:5,
        speed:100
    },
    {
        plus:1,
        tag:".cont4 .cont4_bot .box4 h2",
        complete:20,
        speed:80
    }
]

// 스크롤 동작 / 함수 이용한 카운트 작동
let countStart = document.querySelector(".cont4 .cont4_bot").offsetTop;
let check = true;

window.addEventListener("scroll",function(){
    let scTop = window.scrollY;
    if (scTop >= countStart) {
        // 카운트 기능 멈춰주는 조건문 실행
        if (check == true){
            // forEach 반복문으로 list변수에 있는 데이터 가져오기
            countValue.forEach(function(el,index){
                // 함수 호출
                count(el.plus, el.tag, el.complete, el.speed);
            });
        }
    }
});

// 함수 정의
function count(plus,tag,com,speed){
    // 상단의 check값 false로 바꿔줘서 위의 조건문 실행 못하게 하기 / setInterval 안에 넣어주지 않아야 반복실행으로 코드가 꼬이지 않는다.
    // 즉, count 함수가 실행됨과 동시에 check를 false로 만들어줘서 스크롤시 동작은 한번만 동작되도록 해준다!
    check = false;
    // 지역변수로 0을 담은 변수 num을 설정해줘야 함수가 다음 활동을 할때 문제가 없다. 
    let num = 0;
    // setInterval로 자동실행 시작
    let act = setInterval(function(){
        num += plus;
        if(num >= com){
            // 만약 complete값에 도달한다면 clearInterval로 카운트를 멈춰준다.
            clearInterval(act);
            // 화면에는 complete의 값을 보여준다.
            document.querySelector(tag).innerHTML = com;
        }
        else {
            // 화면에는 카운트 되고 있는 num값을 보여준다.
            document.querySelector(tag).innerHTML = num;
        }
    },speed);
}