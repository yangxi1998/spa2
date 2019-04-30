var $dlgSearch = (function() {
  var $dlg=$(''
          + '<div class="notepad-dlg-search">'
          + '<div class="dialogbox notepad-dlgbox">'  /*指定多个class的意思，在HTML的层面上说的话，这样指定的class是同级的。同级的class需要看CSS文件的先后次序，后加载的css会覆盖前面加载的css。写到style的话因为是最后解析的所以是最高的一个优先级*/
          + '<div class="notepad-dlg-titlebar">'
          + '<p class="title">查找</p>'
          + '<span class="close-btn">✖</span>'
          + '</div>'
          + '<div class="main notepad-dlg-main">'
          + '<label for="">查找内容(N):</label>'
          + '<input class="txt-content" type="text" autofocus><br>'
          + '<input type="checkbox" value="capital-sense">区分大小写(C)'
          + '<fieldset class="search-direction">'
          + '<legend>方向</legend>'
          + '<input type="radio" value="up">向上(U)'
          + '<input type="radio" value="down" checked>向下(D)'
          + '</fieldset>'
          + '<input class="btn-search btn" type="button" value="查找下一个(F)">'
          + '<input class="btn-cancel btn" type="button" value="取消">'
          + '</div>'
          + '</div>'
          + '</div>');

  var $btnClose = $dlg.find('.close-btn'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnSearch = $dlg.find('.btn-search'),
      $txtContent = $dlg.find('.txt-content'),
      $titleBar = $dlg.find('.notepad-dlg-titlebar');

  function destory() { $dlg.remove();  }
  function init() {
    $dlg.find('.dialogbox').draggable({handle: $titleBar});
    $dlg.find('input[value="up"]').removeAttr('checked');//checked 属性规定在页面加载时应该被预先选定的 input 元素
    $dlg.find('input[value="down"]')[0].checked = true;
    $dlg.find('input[type="checkbox"]').removeAttr('checked');
    $btnSearch.attr('disabled', 'disabled');
    $txtContent.val('');
    $txtContent.focus();
  }
  var show=function(){
    $('body').append($dlg);
    init();
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.notepad-dlg-titlebar')});

    $btnCancel.click(destory);
    $btnClose.click(destory);
    $txtContent.keyup(function(){
      if($txtContent.val() !== '') {
        $btnSearch.removeAttr('disabled');
      } else {
        $btnSearch.attr('disabled', 'disabled');
      }
    });
    $btnSearch.click(function() {
      searchHandler({
        content: $txtContent.val(),
        capitalSense: $dlg.find('input[type="checkbox"]:checked').val() === 'capital-sense',//大写
        direction: $dlg.find('input[name="direction"]:checked').val() //:checked 选择器匹配每个选中的输入元素（仅适用于单选按钮或复选框）
              
      });
          
    });
    $dlg.click(function(e) {
      $txtContent.focus();
      e.stopPropagation();
                      
    });
  };
  return {show: show};
})();
