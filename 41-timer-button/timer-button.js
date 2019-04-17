//<input type="button" value="同意(6s)" disabled/>
/*
$(function(){ //全局的

var $timer=(function(){ 
  
  var  cfg={
        container:'.main',
        title:'确定',
        time:9,
        enable:false,  //默认禁用
        clickHandle:null
    },
    n=cfg.time;
  var init=function(cfg){

    var $container=$(cfg.container);
    第一种方式 模板串方式
    
    var DOM='<input class="timer-button" type="button" value="同意(6s)" disabled/>';
    $container.html(DOM); //模板串可以绘制非常复杂的DOM结构
  
    第二种
    var $timerBtn=$('<input class="timer-button" type="button" value="'+cfg.title+'('+n+'s)" disabled/>');
    $timerBtn.appendTo($container);  下面和这/内部样式
    
  $btnAgree.css({
    'font-size':'1.2em',
    'height':'60px',
    'width':'150px'
  });
  
    
    var timer=window.setInterval(function(){
      n--;
      if(n===0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);

      }else{
        $btnAgree.val("cfg.title+'('+n+'s'");
      }
    },1000);
    $btnAgree.click(function(){
      //alert('SPA! 01-timer-button task!');
      cfg.clickHandle();
    });
  };
  var remove=function(){
    var $btn=$('.main').find('.timer-button');
    $btn.remove();
    n=6;
  };
  return {init:init,remove:remove};
}()); //函数的立即执行表达式

*/
function TimerBtn(){
// this.init=function(){
  var  cfg={
    container:'.main',
    title:'确定',
    time:9,
    enable:false,  //默认禁用
    clickHandle:null
  };
// },
   
 //var $timerBtn=$('<input class="timer-button" type="button" value="'+cfg.title+'('+n+'s)" disabled/>');
 
  var n=cfg.time;
  var init=function(cfg){

    var $container=$(cfg.container);
     
    var $timerBtn=$('<input class="timer-button" type="button" value="'+cfg.title+'('+n+'s)" disabled/>');
    $timerBtn.appendTo($container);
    var timer=window.setInterval(function(){
      n--;
      if(n===0){
        window.clearInterval(timer);
        $timerBtn.removeAttr('disabled');
        $timerBtn.val(cfg.title);

      }else{
        $timerBtn.val(cfg.title+'('+n+'s)');
      }
    },1000);
    $timerBtn.click(function(){
      //alert('SPA! 01-timer-button task!');
      cfg.clickHandle();
    });
  };
  var remove=function(){
    $timerBtn.remove();
  };
  return {init:init,remove:remove};

 
  
}


//上面形式 闭包防止全局变量污染   init初始化 ，什么时候想初始化就调用
//下面形式 封装之前
/*
$(function(){  //相当于window.onload=function(){} ,$(function(){})是其简写形式
  ...
})
*/
