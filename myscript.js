/// 添加一个保存按钮

var addhtmlsdata = '<div class="showbutton"><div class="save_btn fulicollort" id="savedoctolocal">保存</div><div class="save_btn fulicollort" id="downloaddoc">下载</div></div>';

$("body").append(addhtmlsdata);


var locationdata = location.href;

 console.log(locationdata);


$("#savedoctolocal").on( "click",function(){
    const nextpagelinks = $("script[type='application/payload+json']").html();
    const jsondata = JSON.parse(nextpagelinks);
    // console.log(jsondata.article.content);
    const htmldata = markdown.toHTML(jsondata.article.content);
    console.log(htmldata);
    console.log(jsondata);

    const pdf = new jsPDF('p', 'pt', 'letter');
    let canvas = pdf.canvas;
    pdf.output('datauristring');
    pdf.save( 'demo.pdf');



});






function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}





