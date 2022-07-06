$("#btn1").click(function () {
    $(".row-one h1").toggle()
});

$("#btn2").click(function () {
    let row1 = $(".row-two div").eq(0);
    let row2 = $(".row-two div").eq(1);
    row1.before(row2);
});

$(function () {    
    $(".modal").css( "display", "block" );
    $('main').css('filter','blur(5px)');
});

$('.btn-close').click(function () {
    $(".modal").css( "display", "none" );
    $('main').css('filter','none');
});

