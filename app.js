document.addEventListener("DOMContentLoaded",function(){
    $('.anchor__list a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        console.log(target)
      ;
        $('html,body').animate({scrollTop: $(target).offset().top}, '500');
        return false;
      });
})