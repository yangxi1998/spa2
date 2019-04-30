$(function(){
  var $btn=$('input[type="button"]');
  var n=localStorage.getItem('n');
  if(n==null){
    n=0;
  }
  setBtnTitle(n);
  $btn.click(function(){
    localStorage.setItem('n',++n);
    setBtnTitle(n);
  });
  function setBtnTitle(n){
    $btn.val('被按了'+n+'次');
  }
});
