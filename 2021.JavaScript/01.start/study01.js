


// var name ="vlobal var";

// function home() {
//     var homevar = "homevar";
//     for(let i=0; i<100; i++) {
//         // console.log(i);
//     }
//     console.log(i);

// // let 은 블럭단위의 스코프가 지원 된다.

// }

// home();

// closure 상황에서 let이 어떻게 동작되는가
// 아래의 코드를 실행하면 어느 li를 클릭해도 4번째 리스트 가 나온다.
// closure 때문에 생기는 문제!!
//

// var list = document.querySelectorAll("li");
// for(var i=0; i < list.length; i++) {
// 지역변수화 시켜서 문제를 해결 시킬수 있다.
// 하지만 간단하게 let 을쓰면 해결할수 있다.
//     list[i].addEventListener("click", function(){
//         console.log(i + "번째 리스트입니다.");
//     });
//     console.log(1);
// }


// let 을 써서 해결한 코드 지역변수를 사용한것처럼 인식한다.
// var list = document.querySelectorAll("li");
// for(let i=0; i < list.length; i++) {

//     list[i].addEventListener("click", function(){
//         console.log(i + "번째 리스트입니다.");

//     });
//     console.log(1);
// }

// const
// HOME_NAME 대문자 상수니까 변경하지마 하듯이 선언했지만 지금은 const 를쓴다.
// const 로 변경을 금지 시킨다.
// type과 상관없지 재 할당할때 막는다.
// 변경이 필요하면 let 키워드를 사용한다.
// function conststudy() {
//     const homename = 'my house';
//     // homename = ["1","2"];
//     console.log(homename);
//     // const 를 기본으로 사용한다. es6 베이스 코딩 기법
//     // 변경이 될 수 있는 변수는 let 을 사용한다.
//     // var 는 사용하지 않는다.
// }

// conststudy();

// const 2
function constsudy2() {
    const list = ["apple", "orange", "banana"];
    list.push("cake");
    console.log(list);
}

// const 를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
// 일종의 값을 재할당하는 코드가 불가능하다.
// immutable array 를 어떻게 만드는가?
// 에디터에서 글을 쓸때 임시저장할때 뒤로 가기 또는 앞으로 가기눌러 어떠 값을 되돌리는값을 보여줄때
// array 같은 경우 이전에 어떤 값인지 모른다.

// constsudy2();
const list = ["apple", "orange", "banana"];
list2 = [].concat(list, "cake");
console.log(1+ list);
console.log(2+ list2);
console.log(list === list2);