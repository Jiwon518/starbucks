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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올 해 날짜