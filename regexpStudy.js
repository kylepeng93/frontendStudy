$(function(){
    $('[data-test]').each(function(e){
        var $this = $(this);
        // attr方法获取标签属性中保存的值
        var value = $this.attr('data-test');
        // data方法可以直接以后缀获取该属性的值
        var value1 = $this.data('test');
        $this.css("background", "rgb(123,234,44)");
    })  
})