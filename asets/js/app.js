$(function(){

/*var header = $("#header"),
    introH = $("#intro").innerHeight(),
    skrollOffset = $(window).skrollTop();

    checkSkroll(skrollOffset);

    $(window).on("skroll", function() {
   skrollOffset = $(this).skrollTop();
   
   checkSkroll(skrollOffset);
});

function checkSkroll(skrollOffset) {
   if( skrollOffset >= introH ) {
      header.addClass("fixed");
   } else{
      header.removeClass("fixed"); 
   }
   }*/






 $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      var blockId = $(this).data('scroll'),
          blockOffset = $(blockId).offset().top;
  
          $("html, body").animate({
           scrollTop: blockOffset
          });
   
         });

      });
      
       window.onscroll = function showHeader () {

         var header = document.querySelector('.header');
   
         if(window.pageYOffset > 200){
            header.classList.add('header__fixed');
            
         }else{
            header.classList.remove('header__fixed');
            
         }
      }
