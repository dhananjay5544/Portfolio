$(document).ready(function () {
    var $win = $(window);
    $win.on('scroll', function () {
        var top = $win.scrollTop();
        console.log(top);
        var top1 = top + 70;
        if (top > 0 && top < 350) {
            $('.social').css('width', '' + top1 / 6 + 'px');
            $('.social').css('transform', 'rotate(' + top + 'deg)');
        } else {
            $('.social').css('width', 'auto');
            $('.social').css('transform', 'rotate(0deg)');
        }
    });

    //for continous toggle of name....
    /*
    var position = $(window).scrollTop();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            $(".name").animate({
                width: "toggle"
            }, 1500);
        } 
        position = scroll;
    });
    */
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

});