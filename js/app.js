$(document).ready(function(){


// *** Background Change ***

var backgroundName = $('body').attr('id')

	$('#content').css('background-image','url(./images/' + backgroundName + '.png)');

// *** Button Choice Animation ***

$('.choices').click(function(event){
	event.preventDefault();
	showOptions();
});
	function showOptions(){
		$('.optionA').slideDown();
		$('.optionB').slideDown();
		$('.choices').hide();
		$('.buttons').addClass('animated bounceInDown');
		$('.buttons').css('visibility', 'visible');
	}

// *** UFO FadeIn pg9 ***

$('#continueUFO').hover(function(){
	$('.storyBox').fadeOut();
	$('#image').fadeIn(3000);
	$()
});




// ************************************


// };

});