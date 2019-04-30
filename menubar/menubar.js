$menubar=(function(){
  var $DOM=$(''
     +'<div class="notepad-menubar">'
     + '<ul class="titles">'
     +' </ul>'
     +' <ul class="menus">'
      +'</ul>'
      +'</div>');
  var $titles=$DOM.find('.titles');
  var menuData=null;
  function createTitles(){
    for(var i=0;i<menuData.length;i++){
      var $title=$('<li class="menu-title"></li>');
      $title.html(menuData[i].title);
      $titles.append($title);
    }
  }
  function createMenus(){
    for(var i=0;i<menuData.length;i++){
      var items=menuData[i].items;
      var $menu=$('.menus');
      for(var j=0;j<items.length;j++){
        if(items[j].title=='hr'){
          var $hr=$('<li class="menu-hr"></li>');
          $menu.append($hr);
          continue;
        }
        var $item=$('<li class="menu-item"><span class="shortcut">Ctrl+N</span></li>'
     );
        $item.html(items[j].title);
        if(items[j].shortcut!==''){
          var $shortcut=$('<span class="shortcut"></span>');
          $shortcut.html(items[j].shortcut);
          $item.append($shortcut);
        }
        $menu.append($item);
      }
      //$menu.css({left.menuData})
      $DOM.append($menu);
    }

  }
  function show(data){
    menuData=data;
    $body=$('body');
    $body.append($DOM);
    createMenus();
    createTitles();
  }
    return {show:show};

  
}());
