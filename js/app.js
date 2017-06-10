$(document).ready(function(){
	// alert($('#alarm4').attr('id'));
// var visibility = 

var backgroundName = $('body').attr('id')

	$('#content').css('background-image','url(./images/' + backgroundName + '.png)');



// ***Button Choice Animation***

$('.choices').click(function(event){
	event.preventDefault();
	showOptions();
});
	function showOptions(){
		$('.optionA').slideDown();
		$('.optionB').slideDown();
		$('.choices').hide();
		$('.buttons').addClass('animated bounce');
		$('.buttons').css('visibility', 'visible');
	}

// ************************************

// function init() {
//   var pg1BG = 'changableBackgroudImage';
//   document.body.style.background = 'url(../images/alarm4.jpg) no-repeat center center'
// };

});