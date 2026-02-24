$(function() {
  var pagetop = $('#pagetop');
  //ãƒœã‚¿ãƒ³ã®åˆæœŸä½ç½®
  var position = {bottom: "-80px",right: "30px"}
  pagetop.css(position);
  $(window).scroll(function() {
  //ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ãŒ100ä»¥ä¸Šã«ãªã£ãŸã‚‰
        if($(window).scrollTop() >= 100){
  //è¡¨ç¤º
            pagetop.stop().animate({bottom:'20px'},300);
      } else {
  //ä»¥ä¸‹ãªã‚‰éš ã™
            pagetop.stop().animate({bottom:'-80px'},300);
      }
   });
    //ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«
  $('a[href^=#]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    //500ã¯é€Ÿåº¦
    $("html, body").animate({scrollTop:position}, 500, 'swing');
        return false;
  });
});
