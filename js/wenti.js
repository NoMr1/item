$(function () {
    var liList  = $('.wenti-list1');
    var lis= liList.children();
    console.log(lis);
    $('.wenti-list1').children('li').click(function () {
        if($(this).children('p').css('display')=='none'){
            $(this).children('i').css('transform','rotateZ(90deg)');
            $(this).children('p').show(300);
        }else{
            $(this).children('i').css('transform','rotateZ(0deg)');
            $(this).children('p').hide(300);
        }

    })
});
