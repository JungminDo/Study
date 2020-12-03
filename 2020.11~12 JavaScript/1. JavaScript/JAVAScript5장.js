

// $(document).ready(function(){
//     $('.navigation').on('click', 'li', function(){
//         $('.selected').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });


/* 제이쿼리 selector(선택자) */
$(document).ready(function () {
    $('input').on('click', function () {
        $this = $(this);
        $('*').removeClass('selected');
        switch ($this.attr('value')) {
            case '#jquery':
                $('#jquery').addClass('selected');
                break;
            case '.tutorial':
                $('.tutorial').addClass('selected');
                break;
            case 'li':
                $('li').addClass('selected');
                break;
            case '#jquery, #MYSQL':
                $('#jquery, #MYSQL').addClass('selected');
                break;
            case '#list li:eq(2)':
                $('#list li:eq(2)').addClass('selected');
                break;
            case '#list li:gt(1)':
                $('#list li:gt(1)').addClass('selected');
                break;
            case '#list li:lt(2)':
                $('#list li:lt(2)').addClass('selected');
                break;
            case '#list li:even':
                $('#list li:even').addClass('selected');
                break;
            case '#list li:odd':
                $('#list li:odd').addClass('selected');
                break;
            case '#list li:first':
                $('#list li:first').addClass('selected');
                break;
            case '#list li:last':
                $('#list li:last').addClass('selected');
                break;
            case '[target*="BC"]':
                $('li[target*="BC"]').addClass('selected');
                break;
            case '[target="DEFG"]':
                $('li[target="DEFG"]').addClass('selected');
                break;
            case '[target!="DEFG"]':
                $('li[target!="DEFG"]').addClass('selected');
                break;
            case '[target^="B"]':
                $('li[target^="B"]').addClass('selected');
                break;
            case '[target$="H"]':
                $('li[target$="H"]').addClass('selected');
                break;
            case '[target]':
                $('li[target]').addClass('selected');
                break;
            case '[target][id]':
                $('li[target][id]').addClass('selected');
                break;
            case '[type="text"]':
                $('[type="text"]').addClass('selected');
                break;
            case '[type="text"]:disabled':
                $('[type="text"]:disabled').addClass('selected');
                break;
            case '[type="text"]:enabled':
                $('[type="text"]:enabled').addClass('selected');
                break;
            case 'input:checked':
                $('input:checked').parent().addClass('selected');;
                break;
        }
    })
})

/* 제이쿼리 chain 연속으로 쓸수있다. */
$('#tutorial22').attr('href', 'http://jquery.org').attr('target', '_blank').css('color', 'blue');

/* 제이쿼리 event */
/* 1. 바인드 와 언바인드 ,트리거 묶기*/
/* 이벤트 헬퍼를 제공한다 : click ready */

function clickHandler(e) {
    alert('thank you');
}

$(document).ready(function () {
    $('#click_me').on('click', clickHandler);
    $('#remove_event').on('click', function (e) {
        $('#click_me').off('click', clickHandler);
    });
    $('#trigger_event').on('click', function (e) {
        $('#click_me').on('click', clickHandler);
    });
});



/* element 요소를 자식으로 삽입 p 안에 strong 자식으로*/
/*  .appendTo(), .html(), .prepend(), .prependTo(), .text()) */
$(document).ready(function () {
    $('.element').append('<strong>Hello</strong>');
});

/* 형제로 삽입 */
/* (.after(), .before(), .insertAfter(), .insertBefore())  */

$(document).ready(function () {
    $('.element').after('<b>Good Bye</b>');
});

/* 부모로 감싸기 */
/*  (.unwrap(), .wrap(), .wrapAll(), .wrapInner()) */

/*
 $(document).ready(function(){
     $('p').wrap('<div><div><p><em><b></b></em></div></div>');
 });
  */

/* 삭제 */
/* (.detach(), .empty(), .remove(), .unwrap()) */


$(document).ready(function () {
    $('.remove-btn').on('click', function () {
        $('.remove-p').remove()
    });
});

/* 치환 */
/* (.replaceAll(), .replaceWith()) */
/* All 은 소스 타겟 으로 타겟을 소스로 바꾼다. */
/* 선택한 요소를 지정된 요소로 대체한다. */
$(document).ready(function () {
    $('.replaceAll-btn').on('click', function () {
        $('.replace-p').replaceAll('.replaceAll-btn');
    });
});


/* With 는 타겟 소스 로 타겟을 소스로 바꾼다. */
/* 선택한 모든 요소를 지정된 요소로 대체한다. */
$(document).ready(function () {
    $('.replaceWith-btn').on('click', function () {
        $('.replace-p').replaceWith('<p>change all!</p>');
    });
});

/* 클래스  */
/* 클래스를 추가 하거나 제거한다. */
/* (.addClass(), .hasClass(), .removeClass(), .toggleClass()) */
$(document).ready(function () {
    $('.blue').click(function () {
        $(this).toggleClass('highlight');
    });
});

/* 속성제어 */
/* (.attr(), .prop(), .removeAttr(), .removeProp(), .val()) */
/* keyup 으로 input 박스의 글자가 p 태그에 보이게 했다. */
$(document).ready(function () {
    $('.attr-ctl').keyup(function () {
        var value = $(this).val();
        $('.text-ctl').text(value);
    }).keyup();
});



/*  //prompt() 구문은 사용자가 입력한 값을 가져와서 id 변수의 값으로 대입한다.
    id = prompt('아이디를 입력해주세요.');
    if(id=='kor'){
        password = prompt('비밀번호를 입력해주세요.');
            if(password === '1111'){
            alert('인증 되었습니다.');
            } else {
        alert('인증에 실패 했습니다.');
            }
    } else {
        alert('아이디나 비번이 맞지 않습니다.');
    }
    // 중첩된 if문을 하나로 줄이고  && 연산자를 사용해 id의 값이 kor 이고 비번이 1111 이면 참이다.
    id = prompt('아이디를 입력해주세요.');
    password = prompt('비밀번호를 입력해주세요.');
    if(id=='kor' && password=='1111'){
        alert('인증 했습니다.');
    } else {
        alert('인증에 실패 했습니다.');
    }

    */

    //while 문 은  while(조건) 괄호안의 조건이 참이면 중괄호 안의 코드 구간을 반복적으로 실행한다.
    /*
    function numbering() {
        i = 0;
        while(i < 10) {
            document.write(i);
            i += 1;
        }
    }
    numbering();
    */

    // return 함수 내에서 사용한 return 은 return 뒤에 따라오는 값을 함수의 결과로 반환한다.

    /*
    function get_mem1(){
        return 'kor';
    }

    function get_mem2(){
        return 'kor11'
    }

    alert(get_mem1());
    alert(get_mem2());
    */

    //결과는? 30과 50 이다. arg1 에10 arg2 에 20 이 들어가고 그다음 함수가 실행된다.
    /*
    function get_arguments(arg1, arg2){
        return arg1 + arg2
    }

    alert(get_arguments(10, 20));
    alert(get_arguments(20, 30));
    */
    /*
        //배열의 끝에 원소를 추가하자 push 는 인자로 전달된 값을 배열에 추가하는명령어이다.
        var li = ['a', 'b', 'c', 'd', 'e'];
            li.push('f');
                alert(li);

        //concat은 인자로 전달도니 값을 추가하는 명령이다. 여러개를 넣을수있다.
        var li = ['a', 'b', 'c', 'd', 'e'];
            li = li.concat(['f', 'g']);
                alert(li);

        //unshift 는 인자로 전달한 값을 배열의 첫번째 원소로 추가하고 배열의 기존 값을듸 색인을 1씩 증가시킨다.
        var li = ['a', 'b', 'c', 'd', 'e'];
            li.unshift('z');
                alert(li);

        //만약 두번째 인덱스 뒤에 대문자 B를 넣고 싶다면 splice로 첫번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 원소의 숫자만큼의 값을 배열로부터
        //제거한 후에 리턴한다. 그리고 세번째 인자 부터 전달된 인자들을 첫번째 이자의 원소 뒤에 추가한다.
        var li = ['a', 'b', 'c', 'd', 'e'];
            li.splice(2, 0, 'B');
                alert(li);

        //배열의 첫번째 원소를 제거하는 방법은 shift를 사용한다. bcde
        var li = ['a', 'b', 'c', 'd', 'e'];
            li.shift();
            alert(li);

        //배열 끔점의 원소를 배열 li 에서 제거할때 pop를 사용한다. abcd
        var li = ['a', 'b', 'c', 'd', 'e'];
            li.pop();
            alert(li);

        //배열을 정렬하는 방법 sort 와 reverse(역순정렬) 가있다.
        var li = ['c', 'e', 'a', 'b', 'd'];
            li.sort();
            alert(li);

        var li = ['c', 'e', 'a', 'b', 'd'];
            li.reverse();
            alert(li);

        //객체의 생성방법

        var grades = {'kor':10, 'pop':7, 'song': 80 };

        //다른 방법

        var grades = {};
        grades['kor'] = 10;
        grades['pop'] = 6;
        grades['song'] = 80;

        var grades = new Object();
        grades['kor'] = 10;
        grades['pop'] = 6;
        grades['song'] = 80;

        //객체에서 필요한 값을 가져오기. song 이라는 이름(key)으로 저장된
        //값을 가져오는 방법이다. 80

        var grades = {'kor': 10, 'pop': 6, 'song': 80 };
        alert(grades['song']);

        //다른방법으로 객체의 속성에 접근 가능하다.
        alert(grades.song);
     */
    // 시간으로 if else 다시 한번
 /*    var time = 10;
    var goodmorning;

    if (time < 12) {
        goodmorning = 'hello man';
    } else if (time < 20) {
        goodmorning = 'Good Day chief';

    } else {
        goodmorning = 'Good evening';

    }

    console.log(goodmorning);

    //변수 호이스팅

    console.log(foo); //  undefined
    var foo = 123;
    console.log(foo); //  123
    {
    var foo = 456;
    }
    console.log(foo); // 456

    var number = 10;
    var numberName;

    switch(number) {

        case 1:
            numberName = 'one';
            break;
        case 2:
            numberName = 'two';
            break;
        case 3:
            numberName = 'three';
            break;
        case 4:
            numberName = 'four';
            break;
        case 5:
            numberName = 'five';
            break;
        case 6:
            numberName = 'six';
            break;
        case 7:
            numberName = 'seven';
            break;
        case 8:
            numberName = 'eight';
            break;
        case 9:
            numberName = 'nine';
            break;
        case 10:
            numberName = 'ten';
            break;
        case 11:
            numberName = 'eleven';
            break;
        case 12:
            numberName = 'twelv';
            break;
            default:
            numberName = 'Non Number';

    }

        console.log(numberName);


        var emptyObject = {};
        console.log(typeof emptyObject);

        var person = {
            name: 'Kim ',
            gender: 'male',
            sayHi: function() {
                console.log('Hi My name is ' + this.name);
            }
        };

        console.log(typeof person);
        console.log(person);

        person.sayHi();


        // Pass-by-reference
        var koo = {
            val: 30
        }

        var kong = koo;
        console.log(koo.val, kong.val);
        console.log(koo == kong);

        kong.val = 20;
        console.log(koo.val, kong.val);
        console.log(koo == kong);

        // Pass-by-value

        var a = 1;
        var b = a;

        console.log(a,b);       // 1  1
        console.log(a == b);    //true

        a = 10;
        console.log(a,b);   // 10 1
        console.log(a == b); //false

        //Scope 스코프
        var x = 'global';

        function kool(){
            var x = 'function scope';
            console.log(x + '함수내');
        };

        kool();
        console.log(x + '전역변수x');

 */
/*
        if (true) {
            var x = 5; //변수 x는 전역 변수이다.
        }
            console.log(x);


        var a = 10;     // 전역변수

        (function () {
              var b = 20;   // 지역변수
        })();

        console.log(a); // 10
        console.log(b); // "b" is not defined

        var x ='global';

        function koon(){
            var x ='local';
            console.log(x);
        }

        koon(); //local
        console.log(x); //global
*/
/*
        var x = 'global';

        function koop() {
            var x ='local';
            console.log(x);

            function bar() { //내부 함수
                console.log(x); // local
            }
            bar();
        }
        koop();
        console.log(x); // global


        var x = 10;

        function fool() {
            x = 100;
                console.log(x); //100
        }
        fool();
        console.log(x); // 100
 */
        /*
        var x = 10; //전역변수

        function foo(){
        var x = 100; //지역변수
        console.log(x); //100

        function bar(){   // 내부함수
            x = 1000;
            console.log(x); // 1000
        }
        bar();
        }
        foo();
        console.log(x); // 10

        var x;         //호이스팅에 의해 전역 변수 선언
        x = 10;  // x에 값을 할당
        function foo(){       // 펑션 함수 선언
        var x = 100; //지역변수
        console.log(x); //100
        function bar(){   // 내부함수
            x = 1000;     // 내부 함수 x를 1000으로 변경
            console.log(x); // 1000
        }
        bar();
        }
        foo();          // 할당된 전역변수 호출
        console.log(x); // 10
        */

        /*
        var temp = 'this is temp';
        for(var temp=0; temp<5; temp++){
            // do something
        }
        console.log(temp); //5 를 출력한다 for 문에서 선언된 변수도 함수 스코프 내에서 계속 유효하다.
        */

        /*
        var myName = "hi";

        function myName() {
            console.log("yuddomack");
        }
        function yourName() {
            console.log("everyone");
        }

        var yourName = "bye";

        console.log(myName);
        console.log(yourName);
        */
        /*
        function makeFunc() {
        var name = "Mozilla";
        function displayName() {
            alert(name);
        }
        return displayName;
        }

        var myFunc = makeFunc();
      //myFunc변수에 displayName을 리턴함
      //유효범위의 어휘적 환경을 유지
        myFunc();
      //리턴된 displayName 함수를 실행(name 변수에 접근)
      */