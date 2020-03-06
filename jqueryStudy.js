$(document).ready(function () {
    $('.center-me').click(function() {
        // 点击p标签内的内容会触发点击事件
        // 通过$(this)可以使用jquery提供的方法
        // $(this).hide();
        console.log("click event");
    })
    $('.center-me').dblclick(function() {
        // 双击事件之前会先触发单击事件
        console.log("double click");
    })
    $('.center-me').keypress(function() {
        console.log('keypress event');
    })
    $('.center-me').mouseover(function() {
        console.log("mouseover event");
    })
    $('.center-me').mouseenter(function() {
        console.log("mouseenter event");
    })
    $('.center-me').hover(function() {
        // hover包含了mouseover和mouseleave事件
        console.log('hover event');
    })
    $('.center-me').mouseleave(function() {
        console.log('mouseleave event');
    })  
    $(window).keypress(function(event) {
        console.log(event);
    })
    $(window).keydown(function(event) {
        // $('.btn').toggle(); // 在hide和show之间来回切换
        // $('.container').fadeIn(); //表现出淡入的效果
        // $('.container').fadeOut(); // 表现出淡出的效果
        // $('.container').fadeToggle(); // 在淡入和淡出之间切换
        $('.container').fadeTo('slow',0.4); // 淡出或者淡出到一个介于0和1之间的透明度，1表示完全不透明，0表示完全透明
    })

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    var re = /(y+)/;// 一个或者多个字符y。
    console.log(re.test('ysojs')); // test方法用来检测参数中是否包含了预定义的字符。
    var re1 = new RegExp('(y+)');
    console.log(re1.test('ysYyys'));
    console.log(re1.toString());
    var formatedDate = new Date().Format('yy-MM-dd hh:mm:ss');
    console.log(formatedDate);

    var fmt = 'yy';
    console.log('0012'.substr(2));
    console.log(fmt.replace(/y+/,'2012'));

    var rex = /[\u4e00-\u9fa5]+/;
    console.log(rex.test('魑魅魍魉'));
});