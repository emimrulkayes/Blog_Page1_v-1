


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 50) {
      $("nav").addClass("sticky");
    }else {
      $("nav").removeClass("sticky");
    }
  });

  // Collapse menu button........

  $(document).ready(function () {
    $('.first-button').on('click', function () {
      $('.animated-icon').toggleClass('open');
    });
  });