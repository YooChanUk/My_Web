//gnb_all.js

$(function(){
    var depth1 = $(".gnb > li"),
        header = $("header");


    //depth1에 마우스가 올라가면 header의 길이를 300px로 올려라
    depth1.mouseenter(function(){
        header.stop().animate({height:"300px"});
    }).mouseleave(function(){
        header.stop().animate({height:"50px"});
    });
    //depth1에 마우스가 떠나면 header 높이(길이) 50px로 하여라

    //.stop() 은 현재 동작하는 애니메이션에 대해서만 동작중단
    //다른 종류의 큐를 중단하고 싶으면.clearQueue()
});//ready