// menuスライダー
$(function() {
  const slideR = '.js-slideR';
  
  $(document).on('click', slideR + ' .menu', function() {
    if ($(slideR).hasClass('off')) {
      $(slideR).removeClass('off');
      $(slideR).animate({
        'marginRight': '290px'
      }, 500).addClass('on');
    } else {
      $(slideR).addClass('off');
      $(slideR).removeClass('on');
      $('.js-slideR .sub_navi').slideUp();
      $('.acc_btn').removeClass('on');
      $(slideR).animate({
        'marginRight': '0px'
      }, 500);
    }
  });

  $(document).on('click', '.acc_btn', function() {
    var status = $(this).parent().parent().attr('id');
    $('#' + status + ' .acc_btn').removeClass('on');
    $('#' + status + ' .acc_btn').children('.sub_navi').slideUp();
    if ($(this).children('.sub_navi').css('display') == 'none') {
      $(this).addClass('on');
      $(this).children('.sub_navi').slideDown();
    }
  });
  
  setTimeout(function(){
    $('.js_hover_img_change').each(function() {
      var img_off = $(this).attr('src');
      var img_on  = $(this).attr('src').replace('off','on');
      $(this).hover(
        function () {
          $(this).attr('src', img_on);
        },
        function () {
          $(this).attr('src', img_off);
        }
      );
    });
    $('a[href^="#"].js_swing').click(function(){
      var adjust = 0;
      var speed = 700;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  },500);

});
