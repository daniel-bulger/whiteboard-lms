
if($("frame[name = 'nav']").length > 0){
    chrome.storage.sync.get('session_timeout',function(timeout){
        timeout = (timeout["session_timeout"]);
        //$($("frame[name = 'nav']")[0].contentDocument).find("body .bouncer .bgBanner")[0].style.backgroundColor=color;
        setInterval(function(){
            $.get('https://bblms-fe1.server.rpi.edu/webapps/portal/frameset.jsp', function(data) {
            });
        },1000*60*14);
        if(timeout > 0){
            setTimeout(function(){window.location.href = "https://bblms-fe1.server.rpi.edu/webapps/login?action=logout";},1000 * timeout);
        }
    });
}
else{ // we are on the homepage
    $("div.loginBody").css("background","none").css("padding-top","100px");
    $("div#loginBox").before(
        "<div style='width:100%;height:200px;border:3px black solid; background-color:white'>"+
        "<p style='color:black; font-size:64px;font-family:Permanent Marker; text-align:center;padding-top:50px'>Whiteboard</p></div>"+
        "<div style='position:relative; left:-3px;width:102%;border-top:3px black solid'></div><br /><br />");
}