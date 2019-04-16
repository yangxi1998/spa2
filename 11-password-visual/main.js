$(function(){
  var $eye=$('#eye'),
      $pwdText=$('.pwd-text'),
      $pwd=$('#pwd');
  $pwd.on('input',function(){
    $pwdText.val($pwd.val());
  });
  $eye.mouseover(function(){
    $pwdText.css('z-index','10');
  });
  $eye.mouseout(function(){
    $pwdText.css('z-index','-10');
  });

  
});
