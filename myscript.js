/// 添加一个保存按钮

var addhtmlsdata = ' <div class="showbutton"><div class="save_btn fulicollort" id="savedoctolocal">保存</div><div class="save_btn fulicollort" id="downloaddoc">下载</div></div>';

$("body").append(addhtmlsdata);




var locationdata = location.href;

 console.log(locationdata);


$("#savedoctolocal").on( "click",function(){
   var nextpagelinks = $("script[type='application/payload+json']").html();
   var jsondata = JSON.parse(nextpagelinks);
    console.log(jsondata.article.content);
    console.log(markdown.toHTML(jsondata.article.content));
    console.log(jsondata);
});






function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}





