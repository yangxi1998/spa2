$(function() {
  var $width=$('#width'),$height=$('#height'),$btnCal=$('#calcute'),$perimeter=$('#perimeter'),$area=$('#area'),$widthValidation=$('#width-validation'),$heightValidation=$('#height-validation');
  function Rectangle(width, height) {
    var w = Number(width),
        h = Number(height);
    this.area = function() {
      return w * h;
    };
    this.perimeter = function() {
      return 2 * (w + h);
    };
  }

  $btnCal.click(function(){
    var w=$width.val(),
        h=$height.val();
    if(w===''){  //集中验证
      $widthValidation.html('宽度不能为空！');
      $width.select();
      return;
    }
    else if(h===''){
      $heightValidation.html('高度不能为空！');
      $height.select();
      return;
    }
    else if(Number(w)<0){
      $widthValidation.val('宽度不能为负');
      $width.select();
      return;
    }
    else if(Number(h)<0){
      $heightValidation.html('高度不能为负！');
      $height.select();
      return;
    }
    else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
      $widthValidation.html('宽度不是合法数字！');
      $width.select();
      return;
    }
    else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(h)){
      $heightValidation.html('高度不是合法数字！');
      $height.select();
      return;
    }
    else{
      $heightValidation.val('');
      $widthValidation.val('');
    }

    var r=new Rectangle(w,h);//eslint-disable-line no-undef
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});

