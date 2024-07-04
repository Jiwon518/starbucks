//요소 찾기
//class가 search인 것을 찾음
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//search라는 클래스를 가지고 있는 div요소를 선택하면 이벤트 핸들러를 실행한다.
searchEl.addEventListener('click', function(){
  //Logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  //특정 요소에 클래스 정보를 가지고 있는 객체에서 어떠한 클래스 내용을 추가하겠다.
  searchEl.classList.add('focused');
  //속성의 이름과 실제 값을 추가한다.
  searchInputEl.setAttribute('placeholder', '통합검색');
});

//focus가 해제 될 때
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//document는 html 자체
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//window 윈도우 객체 -> 우리가 보고 있는 화면 자체
window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼보이기!
    gsap.to(toTopEl, .2, {
      x: 0 
    })
  } else{
   //배지 보이기
   gsap.to(badgeEl, .6, {
    opacity: 1,
    display: 'block'
  });
  // 버튼 숨기기!
  gsap.to(toTopEl, .2, {
    x: 100 
  });
}
}, 300));
//_.throttle(사용하려 하는 함수, 시간);


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
    opacity: 1,

  });
});

//슬라이드 동작
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 30, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
 });


new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 15,
  slidesPerView: 5,
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

 const promotionEl = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion')
 let isHidePromotion = false;
 promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
 })


 // 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


//  animation
function floatingObject(selector, delay, size){
  // gsap.to(요쇼, 시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), //애니메이션 동작시간
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 15);

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});  


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올 해 날짜