$(function(){
  var $range=$('input[type="range"]');
  var $txtAge=$('#age');
  $range.change(function(){//当元素的值发生改变时，会发生 change 事件。该事件仅适用于文本域
    $txtAge.html($range.val());  //sapn标签设置值
  });
});
