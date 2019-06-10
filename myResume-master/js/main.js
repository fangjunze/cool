
$(function(){
	$(window).resize();
	$("#block-nav").css("z-index", 1);

	// 导航条固定顶部
	$("#block-nav").navFixed();

	//平滑滚动导航
	$('#fstPage-down a, nav a, #logo').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
		event.preventDefault();
	});
});

$(window).resize(function(){ 

	//首页满屏
	$("#block-firstPage").css("height", $(window).height());
	//首页文字效果
	$('.blockTitle').stop().fadeIn("normal").animate({
		"top" : ($(window).height() - $('.blockTitle').outerHeight())/2
	},500); 

	$("#block-wantMore").css("height", $(window).height()-52 + "px");
	$('#block-wantMore>p').css("top", ($("#block-wantMore").outerHeight(true) - $('#block-wantMore>p').outerHeight())/2 + "px"); 
});

//留言板的实现
function saveStorage(id)
{
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time,data);
    alert("数据已保存。");
    loadStorage('msg');
}
function loadStorage(id)
{
    var result = '<table border="1">';
    for(var i = 0;i < localStorage.length;i++)
    {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        var datestr = date.toGMTString();
        result += '<tr><td>' + value + '</td><td>' + datestr + '</td></tr>';
    }
    result += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}
function clearStorage()
{
    localStorage.clear();
    alert("全部数据被清除。");
    loadStorage('msg');
}
function showStorage(id)
{
	var data = document.getElementById(id).value;
    var time = new Date().getTime();
    loadStorage('msg');
}

//多媒体控制
function $$(id) {
    return document.getElementById(id);
}   
function v_move(v){
	$$("pTip").style.display=(v)?"block":"none";
}
function v_loadstart() {
	$$("spnPlayTip").innerHTML="开始加载";
}
function v_palying(){
	$$("spnPlayTip").innerHTML="正在播放";
}
function v_pause(){
	$$("spnPlayTip").innerHTML="已经暂停";
}
function v_ended(){
	$$("spnPlayTip").innerHTML="播放完成";
}
function v_timeupdate(e){
	var strCurTime=RuleTime(Math.floor(e.currentTime/60),2)+":"+
	               RuleTime(Math.floor(e.currentTime%60),2);
    	var strEndTime=RuleTime(Math.floor(e.duration/60),2)+":"+
	               RuleTime(Math.floor(e.duration%60),2);
	$$("spnTimeTip").innerHTML=strCurTime+" / "+strEndTime;
}
//转换时间显示格式
function RuleTime(num, n) {
    var len = num.toString().length;
    while(len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}


