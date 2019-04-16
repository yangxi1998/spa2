$(function(){
  var $progress=$('progress'),
      $start=$('#start'),
      $stop=$('#stop'),
      $reset=$('#reset'),
      i=0,
      timer=0;  //定时器对象赋值为0
  $start.click(function(){
    timer=window.setInterval((function(){
      $progress.attr('value',++i);
      if(i>=100){
        console.log(i);
        window.clearInterval(timer);
        alert('下载完毕！');
      }
    }),100);
  });
  $stop.click(function(){
    window.clearInterval(timer);
    timer=0;
  });
  $reset.click(function(){
    $progress.attr('value',i=0);
    window.clearInterval(timer);
  });



});
