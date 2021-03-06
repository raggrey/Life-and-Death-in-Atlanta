$(document).ready(function(){

// *** Background Change ***

var backgroundName = $('body').attr('id')

	$('#content').css('background-image','url(./images/' + backgroundName + '.png)');

// *** Button Choice Animation ***
// **(credit: animate.css by Daniel Eden)**

$('.choices').click(function(event){
	event.preventDefault();
	showOptions();
});
	function showOptions(){
		$('.optionA').slideDown();
		$('.optionB').slideDown();
		$('.choices').hide();
		$('.buttons').addClass('animated bounceInUp');
		$('.buttons').css('visibility', 'visible');
	}

// *** UFO FadeIn pg9 ***

$('#continueUFO').hover(function(){
	$('.storyBox').fadeOut();
	$('#ufoDiv').fadeIn(3000);
	$('audio')[0].play();
});

// *** Dog Meme animation pg5 ***

$('#buttonB5').hover(function(){
	$('.optionA').slideUp();
	$('.optionB').slideUp();
	$('#dogMeme').fadeIn(1500);
	$('audio')[0].play();
});



// *** Fail Sounds(in case autoplay fails) ***

$('div.storyBox p').click(function(){ 
	event.preventDefault();
	$('audio')[0].play();
});

// *** Puzzle pg6 ***
// **(credit: jqJigsawPuzzle by jfmdev)**


});