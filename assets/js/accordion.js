$(function() {
      $('#accordion').find('.accordion-heading').click(function(){
          // Do not toogle if already expanded
          if (!$(this).hasClass('heading-collapsed')) {
              // Switch bg
              $('.accordion-panel .accordion-heading').removeClass('heading-collapsed');
              $(this).addClass('heading-collapsed');
              // Switch icon
              $('.accordion-panel .accordion-heading span').removeClass('glyphicon-plus').addClass('glyphicon-minus');
              $(this).children('span').removeClass('glyphicon-minus').addClass('glyphicon-plus');
              // Expand or collapse this panel
              $(this).next().slideToggle(500);
              // Hide the other panels
              $('.accordion-content').not($(this).next()).slideUp(500);
          }
      });
  });