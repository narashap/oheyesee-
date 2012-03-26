// JavaScript Document

	$(document).ready (function() {
		var $container = $('#container');
		$container.isotope({
			itemSelector : '.item',
		
		});
			
			// filter items when filter link is clicked
		$('#filters a').click(function(){
  				var selector = $(this).attr('data-filter');
  				$container.isotope({ filter: selector });
  				return false; 
			});
		});	
		
		
	$(function(){
  	var $container = $('#container');
	$container.isotope({
		itemSelector : '.item',
		masonry : {
			columnWidth : 50
			}
	});

	//expanded and relayout
	$('.item').click(function(){
		if($(this).hasClass('expanded')){
			$(this).removeClass('expanded');
			$(this).children('.showexpanded').hide()

		}else{
			$(this).addClass('expanded');
			$(this).children('.showexpanded').show()
		}
		$container.isotope('reLayout');
	});
	$container.delegate( '.item', 'click', function(){
        $(this).toggleClass('large');
        $container.isotope('reLayout');
    });
    $(window).load(function(){
       	$('body').find('.toexpand').addClass('expanded').delay(100).children('.showexpanded').show();
    	$container.isotope('reLayout');
    })
   	
	     // toggle variable sizes of all elements
      $('#toggle-sizes').find('a').click(function(){
        $container
          .toggleClass('variable-sizes')
          .isotope('reLayout');
        return false;
      });


});
	