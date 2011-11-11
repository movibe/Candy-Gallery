/*
*	Candy Gallery			
*
*	@author:			Stephen Radford, Creare Web Design http://www.webdesigncreare.co.uk
*	@version:			1.2.1
*	@Last Update:		11.11.2011
*	@licence:			MIT (http://www.opensource.org/licenses/mit-license.php)
*						GPL	(http://www.gnu.org/licenses/gpl.html)
*	@documentation:		{to come}
*	@feedback:			stephen.radford@creare.co.uk
*
*/

(function($) {

$.fn.candygallery = function(options) { 
  var defaults = { 
    maxwidth:		203,
    thumbwidth:		50,
    thumbopacity:	0.7,
    title: 'true',
    changeon: 'click',
    thumbposition: 'after'
  }; 
 
  var options = $.extend({}, defaults, options); 

  return this.each(function() { 
  
    obj = $(this);   
	var img = $(obj).children('img:first-child').attr('src');
	
	
	$(obj).children('img').wrap('<li />');
	$(obj).children('li').wrapAll('<ul id="gallery-ul" />');
	
	if (options.thumbposition == 'after') {
		$('#gallery-ul').before('<div id="big-image"></div>');
	}
	if (options.thumbposition == 'before') {
		$('#gallery-ul').after('<div id="big-image"></div>');
	}
	$('<img src="'+ img +'" />').appendTo('#big-image');
	
	if (options.title == "true") {
		$('<div id="gallery-title"></div>').appendTo('#big-image');
		$('#gallery-title').text($('#gallery-ul > li:first-child > img').attr('alt'));
	}
	
	$('#big-image > img').attr('width', options.maxwidth);
	$('#gallery-ul > li').css({
		'width': options.thumbwidth +'px',
		'height': options.thumbwidth +'px',
		'opacity': options.thumbopacity
	});
	$('#gallery-ul > li:first-child').addClass('active-thumb');
	
	if (options.changeon == 'click') {
		$('#gallery-ul > li > img').click(function() {
			var title = $(this).attr('alt');
			$('#big-image > img').remove();
			$(this).clone().appendTo($('#big-image'));
			$('#big-image > img').attr('width', options.maxwidth);
			$('.active-thumb').removeClass('active-thumb');
			$(this).parent().addClass('active-thumb');
			$('#gallery-title').text('');
			$('#gallery-title').text(title);
		});
	}
	
	else if (options.changeon == 'hover') {
		$('#gallery-ul > li > img').hover(function() {
			var title = $(this).attr('alt');
			$('#big-image > img').remove();
			$(this).clone().appendTo($('#big-image'));
			$('#big-image > img').attr('width', options.maxwidth);
			$('.active-thumb').removeClass('active-thumb');
			$(this).parent().addClass('active-thumb');
			$('#gallery-title').text('');
			$('#gallery-title').text(title);
		});
	}
	
  }); 
};
})(jQuery); 