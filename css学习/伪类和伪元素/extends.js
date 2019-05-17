/**
 * Created by Lijing on 2019/1/9.
 */
$(function () {
    // 回顶部
    $("#backtop").click(function () {
        return $("body,html").animate({scrollTop: 0})
    });
    // 屏幕滚动
    $(document).scroll(function () {
        $(this).scrollTop() > 220 ? $("#backtop").removeClass("hidden") : $("#backtop").addClass("hidden")
    })

    $("#weilei").click(function(){
        //$("#weileiExample").animate({height:0})
        //$("#weileiExample").hide(1000);
        //$("#weileiExample").toggle(1000);
        //$("#weileiExample").slideUp(1000);
        $("#weileiExample").slideToggle(1000,function(){debugger;this});
    })

    $("#weileiExample").hide();
})