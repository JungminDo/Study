$('.vacation').first().data('price');
        "399.99"
        // 제이쿼리 오브젝트 메소드 사용법
        // .data(<name>, <value>)

            $(document).ready(function() {
                $('.vacation').on('click', 'button', function(){
                    var vacation = $(this).closest('.vacation');
                    var amount = vacation.data('price');
                    var price = $('<p>From $'+amount+'</p>');
                    vacation.append(price);
                    $(this).remove();

                    $('#filters').on('click', '.onsale-filter', function(){

                        $('.highlighted').removeClass('highlighted');
                        $('.vacation').filter('.onsale').addClass('highlighted');

                    });

                    $('#filters').on('click', '.expiring-filter', function(){
                        $('.highlighted').removeClass('highlighted');
                        $('.vacation').filter('.expiring').addClass('highlighted');

                    });

    });
});

    function showTicket() {
        $(this).closest('.confirmation').find('.ticket').slideDown();
    }

    $(document).ready(function(){
        $('.confirmation').on('click', 'button', showTicket);
        $('.confirmation').on('mouseenter', '.flbtn', showTicket);
    });



    // $('li.item-a').closest('ul').css('background-color', 'red'); //closest 사용

    // $('li.item-a').parents('ul').css('background-color', 'blue'); //parents 사용

    // var listItemII = document.getElementById('ii');
    // $(document).on('click', function(event){


    // $('li.item-a').closest('ul', listItemII).css('background-color', 'red');
    // ul 의 후손이자 조상이기 때문에 level-2의 색상이 변경된다.

    // $('li.item-a').closest('#one', listItemII).css('background-color', 'green');
    // one은 ul 의 후손이자 조상이 아니기 때문에 level-1은 색상이 변경되지 않는다.
    // alert('one 은 조상이 아니라 색상이 변경되지 않습니다.');

    // });



    $(document).ready(function(){
        $('.vacation').on('keyup', '.quantity', function(){
            // var price = $(this).closest('.vacation').data('price');
            // price 를 '399.99' 라는 문자로 반환한다.
            var price = +$(this).closest('.vacation').data('price');
            // price 를 399.99 라는 숫자로 반환한다.

            var quantity = +$(this).val();
        $('#total1').text(price * quantity);
        });
    });



    $(document).ready(function(){
        $('.vacation').on('click', '.expand', function(event){
            event.preventDefault();
            $(this).closest('.vacation').find('.cmments').fadeToggle();
        });
    });

    function calculate () {

    var principal = document.loandata.principal.value;
    var interest = document.loandata.interest.value / 100 / 12 ;
    var payments = document.loandata.years.value * 12 ;

    var x = Math.pow(1 + interest, payments);
    var monthly = (principal * x * interest) / (x-1);

    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");

    if(isFinite(monthly)) {
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);
    }else {
        payment.innerHTML = "";
        total.innerHTML = "";
        totalinterest.innerHTML = "";
        }
    }


        // document.write ("<h2>Table of Fibonacci Numbers</h2>");
        // for(i=0, j=1, k=0, fib =0; i < 50; i++, fib=j + k , j = k, k = fib) {
        //     document.write("Fibonacci (" + i + ") = " + fib);
        //     document.write("<br>");

        // }