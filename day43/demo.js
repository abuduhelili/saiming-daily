$("button:eq(0)").click(function () {
    // 创建一个tr并添加
    var $tr = $("<tr></tr>").appendTo("tbody");
    // 创建td1并添加
    var $td1 = $("<td></td>").appendTo($tr);
    var $checkbox = $("<input type='checkbox'/>").appendTo($td1);
    // 创建td2并添加
    var bookName = $(":text:eq(0)").val();//获取文本框的值
    var $td2 = $("<td></td>").appendTo($tr).html(bookName);
    // 创建td3并添加
    var price = $(":text:eq(1)").val();//获取第2个文本框的值
    var $td3 = $("<td></td>").appendTo($tr).html(price);
    // 创建td4并添加
    var $td4 = $("<td></td>").appendTo($tr);
    // 创建删除按钮
    var $btn = $("<button>删除</button>").appendTo($td4);
    $btn.click(function () {
        $(this).parents("tr").remove();
    })

    //后添加的checkbox的点击事件
    $checkbox.click(function () {
        //获取后添加的所有的checkbox的个数
        var len1 = $(":checkbox:gt(0)").length;
        // 获取后添加的所有的checkbox,选中的个数
        var len2 = $(":checkbox:gt(0):checked").length;
        if (len1 == len2) {
            $(":checkbox:eq(0)").prop("checked", true);
        }
        else {
            $(":checkbox:eq(0)").prop("checked", false);
        }
        $("span:eq(0)").html(len2)
    })

})
//checkbox全选的点击事件
$(":checkbox:eq(0)").click(function () {
    var flag = $(this).prop("checked");
    $(":checkbox:gt(0)").prop("checked", flag);

    var len = $(":checkbox:gt(0):checked").length;
    $("span:eq(0)").html(len)
})