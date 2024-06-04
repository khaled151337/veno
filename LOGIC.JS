let aaalll = document.querySelector(".JsAll");
let baataa = document.querySelector(".JsBata");
let puuuma = document.querySelector(".JsPima");
let niiike = document.querySelector(".JsNike");
let guucci = document.querySelector(".JsGucci");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let ten = document.querySelector("#ten");
let eleven = document.querySelector("#eleven");
let twelve = document.querySelector("#twelve");
let thirteen = document.querySelector("#thirteen");
let fourteen = document.querySelector("#fourteen");
let fifteen = document.querySelector("#fifteen");
let sixteen = document.querySelector("#sixteen");

aaalll.addEventListener("click", function(){
    aaalll.classList.add("active");
    baataa.classList.remove("active");
    puuuma.classList.remove("active");
    niiike.classList.remove("active");
    guucci.classList.remove("active");

    one.classList.add("rotateAll");
    two.classList.add("rotateAll");
    three.classList.add("rotateAll");
    four.classList.add("rotateAll");

    five.classList.add("rotateAll");
    six.classList.add("rotateAll");
    seven.classList.add("rotateAll");
    eight.classList.add("rotateAll");

    nine.classList.add("rotateAll");
    ten.classList.add("rotateAll");
    eleven.classList.add("rotateAll");
    twelve.classList.add("rotateAll");

    thirteen.classList.add("rotateAll");
    fourteen.classList.add("rotateAll");
    fifteen.classList.add("rotateAll");
    sixteen.classList.add("rotateAll");


    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
    four.style.display = "block";

    five.style.display = "block";
    six.style.display = "block";
    seven.style.display = "block";
    eight.style.display = "block";

    nine.style.display = "block";
    ten.style.display = "block";
    eleven.style.display = "block";
    twelve.style.display = "block";

    thirteen.style.display = "block";
    fourteen.style.display = "block";
    fifteen.style.display = "block";
    sixteen.style.display = "block";
});

baataa.addEventListener("click", function(){
    aaalll.classList.remove("active");
    baataa.classList.add("active");
    puuuma.classList.remove("active");
    niiike.classList.remove("active");
    guucci.classList.remove("active");

    thirteen.style.display = "block";
    fourteen.style.display = "block";
    fifteen.style.display = "block";
    sixteen.style.display = "block";

    //animation
    one.classList.remove("rotate");
    two.classList.remove("rotate");
    three.classList.remove("rotate");
    four.classList.remove("rotate");

    five.classList.remove("rotate");
    six.classList.remove("rotate");
    seven.classList.remove("rotate");
    eight.classList.remove("rotate");

    nine.classList.remove("rotate");
    ten.classList.remove("rotate");
    eleven.classList.remove("rotate");
    twelve.classList.remove("rotate");

    thirteen.classList.add("rotate");
    fourteen.classList.add("rotate");
    fifteen.classList.add("rotate");
    sixteen.classList.add("rotate");


    one.classList.remove("rotateAll");
    two.classList.remove("rotateAll");
    three.classList.remove("rotateAll");
    four.classList.remove("rotateAll");

    five.classList.remove("rotateAll");
    six.classList.remove("rotateAll");
    seven.classList.remove("rotateAll");
    eight.classList.remove("rotateAll");

    nine.classList.remove("rotateAll");
    ten.classList.remove("rotateAll");
    eleven.classList.remove("rotateAll");
    twelve.classList.remove("rotateAll");

    thirteen.classList.remove("rotateAll");
    fourteen.classList.remove("rotateAll");
    fifteen.classList.remove("rotateAll");
    sixteen.classList.remove("rotateAll");
    //animation


    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";
    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
});

puuuma.addEventListener("click", function(){
    aaalll.classList.remove("active");
    baataa.classList.remove("active");
    puuuma.classList.add("active");
    niiike.classList.remove("active");
    guucci.classList.remove("active");

  

    

    one.classList.add("rotate");
    two.classList.add("rotate");
    three.classList.add("rotate");
    four.classList.add("rotate");

    five.classList.remove("rotate");
    six.classList.remove("rotate");
    seven.classList.remove("rotate");
    eight.classList.remove("rotate");

    nine.classList.remove("rotate");
    ten.classList.remove("rotate");
    eleven.classList.remove("rotate");
    twelve.classList.remove("rotate");

    thirteen.classList.remove("rotate");
    fourteen.classList.remove("rotate");
    fifteen.classList.remove("rotate");
    sixteen.classList.remove("rotate");

    one.classList.remove("rotateAll");
    two.classList.remove("rotateAll");
    three.classList.remove("rotateAll");
    four.classList.remove("rotateAll");

    five.classList.remove("rotateAll");
    six.classList.remove("rotateAll");
    seven.classList.remove("rotateAll");
    eight.classList.remove("rotateAll");

    nine.classList.remove("rotateAll");
    ten.classList.remove("rotateAll");
    eleven.classList.remove("rotateAll");
    twelve.classList.remove("rotateAll");

    thirteen.classList.remove("rotateAll");
    fourteen.classList.remove("rotateAll");
    fifteen.classList.remove("rotateAll");
    sixteen.classList.remove("rotateAll");



    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
    four.style.display = "block";

    five.style.display = "none";
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";

    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";

    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
});

niiike.addEventListener("click", function(){
    aaalll.classList.remove("active");
    baataa.classList.remove("active");
    puuuma.classList.remove("active");
    niiike.classList.add("active");
    guucci.classList.remove("active");


    
    one.classList.remove("rotate");
    two.classList.remove("rotate");
    three.classList.remove("rotate");
    four.classList.remove("rotate");

    five.classList.add("rotate");
    six.classList.add("rotate");
    seven.classList.add("rotate");
    eight.classList.add("rotate");

    nine.classList.remove("rotate");
    ten.classList.remove("rotate");
    eleven.classList.remove("rotate");
    twelve.classList.remove("rotate");

    thirteen.classList.remove("rotate");
    fourteen.classList.remove("rotate");
    fifteen.classList.remove("rotate");
    sixteen.classList.remove("rotate");

    one.classList.remove("rotateAll");
    two.classList.remove("rotateAll");
    three.classList.remove("rotateAll");
    four.classList.remove("rotateAll");

    five.classList.remove("rotateAll");
    six.classList.remove("rotateAll");
    seven.classList.remove("rotateAll");
    eight.classList.remove("rotateAll");

    nine.classList.remove("rotateAll");
    ten.classList.remove("rotateAll");
    eleven.classList.remove("rotateAll");
    twelve.classList.remove("rotateAll");

    thirteen.classList.remove("rotateAll");
    fourteen.classList.remove("rotateAll");
    fifteen.classList.remove("rotateAll");
    sixteen.classList.remove("rotateAll");


    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    five.style.display = "block";
    six.style.display = "block";
    seven.style.display = "block";
    eight.style.display = "block";

    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";

    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
});

guucci.addEventListener("click", function(){
    aaalll.classList.remove("active");
    baataa.classList.remove("active");
    puuuma.classList.remove("active");
    niiike.classList.remove("active");
    guucci.classList.add("active");

    one.classList.remove("rotate");
    two.classList.remove("rotate");
    three.classList.remove("rotate");
    four.classList.remove("rotate");

    five.classList.remove("rotate");
    six.classList.remove("rotate");
    seven.classList.remove("rotate");
    eight.classList.remove("rotate");

    nine.classList.add("rotate");
    ten.classList.add("rotate");
    eleven.classList.add("rotate");
    twelve.classList.add("rotate");

    thirteen.classList.remove("rotate");
    fourteen.classList.remove("rotate");
    fifteen.classList.remove("rotate");
    sixteen.classList.remove("rotate");

    one.classList.remove("rotateAll");
    two.classList.remove("rotateAll");
    three.classList.remove("rotateAll");
    four.classList.remove("rotateAll");

    five.classList.remove("rotateAll");
    six.classList.remove("rotateAll");
    seven.classList.remove("rotateAll");
    eight.classList.remove("rotateAll");

    nine.classList.remove("rotateAll");
    ten.classList.remove("rotateAll");
    eleven.classList.remove("rotateAll");
    twelve.classList.remove("rotateAll");

    thirteen.classList.remove("rotateAll");
    fourteen.classList.remove("rotateAll");
    fifteen.classList.remove("rotateAll");
    sixteen.classList.remove("rotateAll");


    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    five.style.display = "none";
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";

    nine.style.display = "block";
    ten.style.display = "block";
    eleven.style.display = "block";
    twelve.style.display = "block";

    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";

});


//jQuery......>

// $(function(){
//     let heading = $('.test');

//     heading.on("click", function(){
//         $(this).hide();
//     });

//     let addBorder = $(".border");
//     let removeBorder = $(".remove");

//     let show = $(".show");
//     let hide = $(".hide");
//     let toggle = $(".toggle");

//     let box = $(".box");

//     addBorder.on("click", function(){
//         box.css({
//             border: "5px solid red"
            
//         });
//         addBorder.css({
//             display: "none"
//         });
//         removeBorder.css({
//             display: "inline-block"
//         });
//     });

//     removeBorder.on("click", function(){
//         removeBorder.css({
//             display: "none"
//         });
//         addBorder.css({
//             display: "inline-block"
//         });

//         box.css({
//             border: "5px solid green"
//         });
//     });

//     show.on("click", function(){
//         box.slideDown();
//     });

//     hide.on("click", function(){
//         box.slideUp();
//     });

//     toggle.on("click", function(){
//         box.slideToggle();
//     });

   



// });


// $(function(){
//     let refresh = $(".ref")
//     let start = $(".start");
//     let stop = $(".stop");

//     let box_two = $(".box_two");

//     refresh.on("click", function(){
//         box_two.animate({
//             width: '1%'
//         })
//     })


//     start.on("click", function(){
//          box_two.animate({
//              width: '100%'
//          },5000);
//     });

//     stop.on("click", function(){
//         box_two.stop();
//     });


// });

// $(function(){
//     let question = $(".question");
//     let answer = $(".answer");

//     let span = $('span');
//     let iii = $("i");



//     question.on("click", function(){
//         answer.slideToggle()

      
//     });

//     let question_two = $(".question_two");
//     let answer_two = $(".answer_two");

//     question_two.on("click", function(){
//         answer_two.slideToggle()
//     });

//     let question_three = $(".question_three");
//     let answer_three = $(".answer_three");

//     question_three.on("click", function(){
//         answer_three.slideToggle()
//     });
// });

$(function(){
    $('.slick_parent').slick({
        infinite: true,
        slidesToShow:  3,
        slidesToScroll: 3,
        prevArrow: '<span class="left" onclick="audio.play();"> <i class="fa-solid fa-arrow-left"></i> </span>',
        nextArrow: '<span class="right" onclick="audio.play();"> <i class="fa-solid fa-arrow-right"></i> </span>',

        centerMode: true,
        centerPadding: '0px',
    });

    new VenoBox({
        selector: '.my-video-links',
    });

});

let firstCard = document.querySelector("#first_card");
let secondCard = document.querySelector("#second_card");
let thirdCard = document.querySelector("#third_card");

window.addEventListener('scroll', function(){
    let test = this.document.documentElement.scrollTop;
    if(test > 1300){
        firstCard.classList.add("first");
    }
    else{
        firstCard.classList.remove("first");
    }
});

const audio = new Audio();
audio.src = "boom.unknown";


