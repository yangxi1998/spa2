var PasswordTextbox = function(config) {
    var $pwd     = $('<input type="password" id="pwd">'),
              $pwdText = $('<input type="text" class="pwd-text">'),
                    $eye     = $('<div id="eye"></div>'),
                          $div     = $('<div class="wd-password">密码：</div>');

      $div.append($pwd);
        $div.append($eye);
          $div.append($pwdText);
            $(config.container).append($div);

            $pwd.on('input', function(){
                  $pwdText.val($pwd.val());
                    
            });

            $eye.mouseover(function(){
                  $pwdText.css('z-index', '10');
                    
            });

            $eye.mouseout(function(){
                  $pwdText.css('z-index', '-10');
                    
            });

            this.getPwd = function() {
                  return $pwdText.val();
                    
            };

};
