$(function () {
    $("#trigger6").powerFloat({
		eventType: "hover",		
        width: 250,
        target: [
            {
                href: "##",
                text: "这是文章1的说"	
            },
            {
                href: "##",
                text: "啊，看，文章2"	
            },
            {
                href: "##",
                text: "啊啦，不好，我把文章3忘家里了！"	
            },
            {
                href: "##",
                text: "马萨噶，这就是传说中的...文章4..."	
            },
            {
                href: "##",
                text: "什么嘛，就是文章5，害我白期待一场"	
            }
        ],
        targetMode: "list",
        position: "2-1"
	});
});
