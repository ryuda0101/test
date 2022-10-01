// 헤더 gnb메뉴 스크롤시 position:fixed로 변경되는것 작업
// 변수 생성
const header = document.querySelector("#header");
const headerClass = document.querySelector(".fixed");

// 헤더 gnb메뉴 클릭시 해당 위치로 자동스크롤 기능 구현
// 변수 생성
const headerGnb = document.querySelectorAll("#header .center ul li");
const consts = document.querySelectorAll("#container > div")

// 헤더 햄버거 메뉴 작업
// 변수 생성
const sub_gnb = document.querySelectorAll("#header .sub_menu .sub_gnb li");
const sub_menu = document.querySelector("#header .sub_menu");
const ham_btn = document.querySelector("#header .center .ham_menu");

ham_btn.addEventListener("click",function(el,index){
    sub_menu.classList.toggle("show");
});


window.addEventListener("scroll",function(){
    // 스크롤시 현재 위치값 변수로 담아주기
    let scTop = window.scrollY;
    // 만약 가장 상단의 위치를 벗어나면 class fixed를 달아줘서 화면에 고정되도록 하기 
    if (scTop != 0) {
        header.classList.add("fixed");
    }
    else {
        header.classList.remove("fixed");
    }

    // gnb메뉴에 반복문 달아주기
    headerGnb.forEach(function(element,index){
        // 각 cont의 시작 위치값 변수로 담아주기
        let contTop = consts[index].offsetTop;
        // 만약 현재의 위치값이 cont[?]의 위치값보다 크거나 같다면
        if (scTop >= contTop) {
            // 전체 gnb메뉴에 class.remove("on")으로 비활성화를 해주고
            headerGnb.forEach(function(el,index){
                el.classList.remove("on")
            });
            // 특정 gnb에만 class on을 붙여준다.
            headerGnb[index].classList.add("on");
        }

        // gnb 메뉴[?] 클릭시
        element.addEventListener("click",function(event){
            // a태그 눌러도 상단으로 이동되는것 방지
            event.preventDefault();
            // 클릭한 gnb메뉴의 순번과 일치하는 cont의 순번으로 화면을 이동시켜준다.
            window.scrollTo({
                top:contTop,
                behavior:"smooth"
            })
        });
    });

    // sub_gnb
    sub_gnb.forEach(function(element,index){
        // 각 cont의 시작 위치값 변수로 담아주기
        let contTop = consts[index].offsetTop;
        // 만약 현재의 위치값이 cont[?]의 위치값보다 크거나 같다면
        if (scTop >= contTop) {
            // 전체 sub_gnb메뉴에 class.remove("on")으로 비활성화를 해주고
            sub_gnb.forEach(function(el,index){
                el.classList.remove("on")
            });
            // 특정 sub_gnb메뉴에 class on을 붙여준다.
            sub_gnb[index].classList.add("on");
        }

        // sub_gnb 메뉴[?] 클릭시
        element.addEventListener("click",function(event){
            // a태그 눌러도 상단으로 이동되는것 방지
            event.preventDefault();
            // 클릭한 gnb메뉴의 순번과 일치하는 cont의 순번으로 화면을 이동시켜준다.
            window.scrollTo({
                top:contTop,
                behavior:"smooth"
            })
        });

    });
});

