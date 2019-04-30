$(function(){
  var $url=$('input[type="url"]'),
      $btnStore=$('input[type="button"]'),
      $img=$('img'),
      $tmpImg=$('<img>'); //内存中的图片
  var data='';
  $tmpImg.attr('crossOrigin','anonymous');//跨域
  //var imgURL=localStorage.getItem('url');
  //showImg(imgURL);
  $btnStore.click(function(){ //一点击图片显示到页面和localStorage中保存图片的base64格式
    var url=$url.val();
    if(url==='')return;
    localStorage.setItem('url',data);
    $tmpImg.attr('src',url);
    showImg(url);
  });
  $tmpImg.load(function(){ //在localStorage中保存图片的base64格式
    var can=$('<canvas>').get(0);
    var ctx=can.getContext('2d');
    can.width=this.width;
    can.height=this.height;
    ctx.drawImage(this,0,0,can.width,can.height);
    var data=can.toDataURL();
    localStorage.setItem('url',data);
    showImg(data);
  })
  function showImg(url){
    $img.attr('src',url);
    $img.css({'display':'block'});
  }
});
