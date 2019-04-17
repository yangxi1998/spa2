$(function() {
  var $width=$('#width'),$height=$('#height'),$form=$('form'),$perimeter=$('#perimeter'),$area=$('#area');
  $form.submit(function(e){
    e.preventDefault();         // 阻止表单提交
    var w=Number($width.val()),
        h=Number($height.val());
    var p=2*(w+h),
        a=w*h; 
    $perimeter.val(p);
    $area.val(a);
  });
});

