var $dlgAbout = (function() {
    var $dlg=$(''
          + '<div class="notepad-dlg-mask notepad-dlg-about">'
          + '<div class="dialogbox notepad-dlgbox">'
          + '<div class="notepad-dlg-titlebar">'
          + '<p class="title">关于“记事本”</p>'
          + '<span class="close-btn">✖</span>'
          + '</div>'
          + '<div class="main notepad-dlg-main">'
          + '<h1 class="slogan">jsnotepad</h1>'
          + '<hr>'
          + '<div class="info">'
          + '<p>作者：杨茜</p>'
          + '<p>QQ：2462006777</p>'
          + '<p>仓库地址：<a href="https://github.com/yangxi1998/spa2/jsnotepad-about/" target="_blank">https://github.com/wangding/spa2/jsnotepad-about</a></p>'
          + '</div>'
          + '<input class="btn-ok btn" type="button" value="确定">'
          +'</div>'
        +'</div>'
        +'</div>');
    
  var $btnOk = $dlg.find('.btn-ok'),
      $btnClose = $dlg.find('.close-btn'),
      $titleBar = $dlg.find('.notepad-dlg-titlebar');

  function destory() { $dlg.remove();  }
   var show=function(){
        $('body').append($dlg);
       $dlg.find('.dialogbox').draggable({handle: $titleBar});

       $btnOk.click(destory);
        $btnClose.click(destory);
  };
  return {show: show};
})();
