let boxs = document.querySelector('.cont4 .boxs');
let iso = new Isotope( boxs, {
  // options
  itemSelector: '.box',
  layoutMode: 'masonry'
});

// 버튼태그 변수 생성
const btnList = document.querySelectorAll(".cont4 .box_menu li");

// 버튼 클릭시 정렬
btnList.forEach(function(el,index){
    el.addEventListener("click",function(e){
        e.preventDefault();
        // 클릭된 li 메뉴는 classList add 해주기
        btnList.forEach(function(element,index){
            element.classList.remove("on");
        });
        el.classList.add("on");

        let data = el.getAttribute("data-list")
        iso.arrange({
            filter: data,
            transitionDuration: '1s'
        });
    });
});