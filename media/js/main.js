t(function(t, e) {
    if (!NexT.utils.isMobile()) {
        $.scrollto = function (t, e) { 
            $(t).click(function () { 
                return $(this).addClass("active").siblings().removeClass("active"), $("html, body").animate({ 
                    scrollTop: $("body").offset().top 
              }, e), !1 
          }) 
      }; 
      var n = $(".back-to-top"), 
      r = $(window).height() - 980 + "px"; 
      $(window).scroll(function () { 
          $(window).scrollTop() > 700 && "-900px" === n.css("top") ? n.css("top", r) : $(window).scrollTop() <= 700 && "-900px" !== n.css("top") && n.css("top", "-900px") 
      }), 
      $.scrollto(".back-to-top", 800) 
  } 
})