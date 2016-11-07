/**
 * Created by nastya on 05.11.16.
 */

$(document).ready(function () {
    $(".top_baner").mousemove(function (e) {
        var moveX = (e.pageX = - 1 / 15);
        var moveY = (e.pageY = - 1 / 15);
        $(this).css("background-position", moveX + "px " + moveY + "px")
    })
})