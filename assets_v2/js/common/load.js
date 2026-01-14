// sales_tool include設定
$(function() {
  $.ajaxSetup({
    cache: false
  });
  $("#g-header").load("/uos/sales_tool/assets_v2/inc/layout/g-header.html");
  $("#g-nav-right").load("/uos/sales_tool/assets_v2/inc/layout/g-nav_right.html");
  
  // include呼び出しが存在した場合
  if ($('div').hasClass('html_inc') === true) { 
    var path_name = location.pathname;
    var last_name = path_name.match(/([^\/]+)/g);
    var html_name = last_name[last_name.length - 1];
    $(".html_inc").load("/uos/sales_tool/assets_v2/inc/content/" + html_name);
  }
});
