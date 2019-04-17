var $dlgGoto=(function(){
    //DOM绘制
    var $dlg=$(''
      +'<div class="notepad-goto-dlg">'
      +'<div class="dialogbox">'
      +'<div class="titlebar">'
      +'<p class="title">转到指定行</p>'
      +'<span class="btn-close">×</span>'
      +'</div>'
      +'<div class="main">'
      +'<label >行号(L):</label><br>'
      +'<input type="text" class="line-num" autofocus><br>'
      +'<input type="button" value="转到" class="btn-goto">'
      +'<input type="button" value="取消" class="btn-cancel">'
      +'</div>'
      +'</div>'
      +'</div>');

  var $btnClose=$dlg.find('.btn-close'),
      $btnCancel=$dlg.find('.btn-cancel'),
      $btnGoto=$dlg.find('.btn-goto'),
      $titleBar=$dlg.find('.titlebar'),
      $txtLineNum=$dlg.find('.line-num');
  var cfg={
    curLine:1,
    totalLines:1,
    gotoHandler:null
  }
  function validation(){
    var num=Number($txtLineNum.val());
    if(num==0||num>cfg.totalLines){
      alert('行数超过了总行数');
      return false;
    }
    return true;
  }
  function gotoHandler(){
    if(!validation()) return;
    cfg.gotoHandler($txtLineNum.val());
    destory();
  }
  function filterKey(e){
    if(!/[0-9]/.test(e.key)){
      e.preventDefault();
      alert('不能输入数字以外的非法字符');
    }
  }
  function destory(){$dlg.remove();}
  var init=function(conf){
    $.extend(cfg,conf);
    $('body').append($dlg);
    $btnClose.click(function(){$dlg.remove();});
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')}); //可以拖动
    $txtLineNum.val(cfg.curLine);
    $txtLineNum.keypress(filterKey);
    //事件绑定
    $btnClose.click(/*function(){$dlg.remove();}*/destory);
    $btnCancel.click(destory);
    $btnGoto.click(gotoHandler);

  };
  return {init:init};
})();
