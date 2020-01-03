// parallax
 $(window).scroll(function() {
   var wscroll = $(this).scrollTop();
   
   $('.jumbotron img').css({
     'transform' : 'translate(0px, '+ wscroll/4 +'%)'
   });
   
    $('.jumbotron h3').css({
     'transform' : 'translate(0px, '+ wscroll/2  +'%)'
   });
   
    $('.jumbotron h5 ').css({
     'transform' : 'translate(0px, '+ wscroll/1.2 +'%)'
   });
   });
   