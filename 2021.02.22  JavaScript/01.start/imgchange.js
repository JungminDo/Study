function oneimg() {
    var img_src;
    for (var i = 1; i <= 10; i++) {
        img_src = '../images/one' + i + '.png';
    }
    return img_src;
}

function twoimg() {

    var img_src;
    for (var i = 1; i <= 15; i++) {
        img_src = '../images/two' + i + '.png';
    }
    return img_src;
}



// 이미지 변경 방법

var num = 1;

function changeImg(idx) {   // idx 라는 매개변수를 사용한 changeImg 이름의 함수 생성

    if(idx){
        if (num == 10) return; // num이 10일때 num++ 이전에 강제 종료
        num++;  //다음 버튼을 누르면 idx 값이 1 이 되어 num 의 값이 1만큼 증가
    } else {
        if (num == 1) return; // num 이 0일때 num-- 이전에 강제 종료
        num--; //이전 버튼을 누르면 idx 값이 0 이 되어 num 의 값이 1만큼 감소
    }

    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "../images/one0" + num + ".png");  // id 값이 photo 인 이미지태그 선택후 src 속성값을 수정

}




// 이미지 콜라 뒤에 번호가 증가하면서 움직임표현


// var setId;

// function colaSprite(speed) {
//     var colaBox = QSAll('.colaBox'),
//         view = QS('view'),
//         chaOutlineSpriteArray = new Array(colaBox.length),
//         spriteArray = [];
//     // setId;

//     for (var i = 0; i < colaBox.length; i++) {
//         var num = document.createElement('img');

//         num.src = '../images/cola/' + colaBox[i].getAttribute('num') + '/' + colaBox[i].getAttribute('num') + '_1.png';

//         colaBox[i].appendCola(num);
//         colaBox[i].addEventListener(eventSelector.downEvent, function () {
//             spriteArray = [];


//             var target = this,
//                 name = target.getAttribute('num'),
//                 count = target.getAttribute('spriteCount'),
//                 type = target.getAttribute('spriteType'),
//                 num = target.colaNodes[0];

//             clearInterval(setId);
//             console.log(type)
//             if (type == 'noStep') {
//                 for (var j = 0; j < colaBox.length; j++) {
//                     colaBox[j].style.pointerEvents = 'auto';
//                 }
//             }

//             for (var j = 0; j < count; j++) {
//                 spriteArray.push('../images/cola/' + name + '/' + name + '_' + (j + 1) + '.png');
//             }

//             var spriteIdx = 0,
//                 spriteLen = spriteArray.length,
//                 lastIdx;

//             setTimeout(function () {
//                 setId = setInterval(function () {
//                     spriteIdx++;
//                     if (spriteIdx === spriteLen) {
//                         clearInterval(setId);
//                         target.colaNodes[0].src = spriteArray[spriteLen - 1];
//                         if (type == 'step') {
//                             for (var j = 0; j < colaBox.length; j++) {
//                                 colaBox[j].style.pointerEvents = 'auto';
//                             }
//                         }
//                         target.style.pointerEvents = 'auto';
//                     } else {
//                         target.colaNodes[0].src = spriteArray[spriteIdx];
//                     }
//                 }, speed);

//             }, 20);

//         });
//     }
// }