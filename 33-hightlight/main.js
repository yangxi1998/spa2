/*global hljs:true*/
$(function(){
  //var $code=$('div>pre');
  var $btnAddCode=$(/*'input[type="button"]'*/'#add');
  $btnAddCode.click(function(){
    var $code=$('<div><pre class="javascript"></pre><input type="button" value="删除"></div>');
    $code.find('pre').html($('.code').val());
    $('div.main').append($code);
    hljs.highlightBlock($code.find('pre').get(0));
    var $btnDelCode=$code.find('input');
    console.log($btnDelCode);
    $btnDelCode.click(function(e){
      console.log(e.target);
      $code.remove();
    });
  });
});
