$(function () {

    //ã‚¢ã‚³ãƒ¼ãƒ‡ã‚£ã‚ªãƒ³ãƒ¡ãƒ‹ãƒ¥ãƒ¼
    $('nav li,nav > ul > li> a[href^=#]').on('click', function () {
        (window.innerWidth ? window.innerWidth : $(window).width()) <= 600 && (
            $(this).children('ul:not(:animated)').slideToggle(),
            $(this).children('span').toggleClass('open'),
            $(".sub-menu").not($(this).children('.sub-menu')).slideUp(),
            $('nav li').children('span').not($(this).children('span')).removeClass('open')
        )
    });

    //å°ç”»é¢æ™‚ã«ãƒ¡ãƒ‹ãƒ¥ãƒ¼å†…ãƒªãƒ³ã‚¯ã‚’æŠ¼ã—ãŸå ´åˆã€ä¸€åº¦é–‰ã˜ã‚‹
    //ãƒšãƒ¼ã‚¸å†…ãƒªãƒ³ã‚¯ç”¨
    $("nav a").on("click", function() {
        (window.innerWidth ? window.innerWidth : $(window).width()) <= 600 && $("#open").click()
    });

    //å°ç”»é¢æ™‚ã«ãƒ¡ãƒ‹ãƒ¥ãƒ¼ã‚’é–‰ã˜ã¦ã‹ã‚‰ãƒªã‚µã‚¤ã‚ºã™ã‚‹ã¨ãƒ¡ãƒ‹ãƒ¥ãƒ¼ãŒè¡¨ç¤ºã•ã‚Œãªã„ã®ã‚’é˜²ã
    $(window).resize(function() {
        var menu = $("#menu"),
            sub = $(".sub-menu"),
            w = window.innerWidth ? window.innerWidth : $(window).width();
        w > 600 && menu.is(":hidden") && menu.attr("style", ""),
        w > 600 && sub.is(":hidden") && sub.attr("style", "")
    });

    //ãƒ¡ãƒ‹ãƒ¥ãƒ¼ã‚’é–‹ããƒœã‚¿ãƒ³ã®å‹•ä½œ
    var pull = $('#open');
    var menu = $('#menu');
    var menuOpen = false;
    $(pull).on('click', function (e) {
        e.preventDefault();
        if (menuOpen) {
            menu.slideUp();
            menuOpen = false;
            pull.text('Open Menu'); //Open Menuã¯è‡ªç”±ã«å¤‰æ›´å¯
        } else {
            menu.slideDown();
            menuOpen = true;
            pull.text('Close'); //Closeã¯è‡ªç”±ã«å¤‰æ›´å¯
        }
        return false;
    });
    
});