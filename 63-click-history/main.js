$(function(){
  //当url地址只要变化，浏览器的向左和向右箭头就会后退和前进
  var $btn=$('input[type="button"]');
  var n=0;
  setBtnTitle(n);
  $btn.click(function(){
    var url=location.origin+location.pathname+'#/'+(++n);      //location.origin浏览器的url地址http://192.168.121.144:8080
    history.pushState(null,null,url);
    setBtnTitle(n);
  });
  function setBtnTitle(n){
    $btn.val('被按了'+n+'次');
  }
  window.onpopstate=function(){
    var url=location.href;//当前浏览器的地址栏现实的URl地址
    var n=(location.href.match(/(\d*)$/)[0]);
    setBtnTitle(n);
  }
});
