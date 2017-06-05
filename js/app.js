$(document).ready(function(){

// $("#buttonA").click(turnPg1a() {
// 	console.log("the button works")

// function(turnPg1a){
// 	document.getElementByClassName("content").style.background = url(../images/alarm4.png);
// }


// });
// Page1

// $("#buttonA").click(function() {
// 	console.log("the button works!") <--no syntax error found
// });
// ******************************

// *************************************
// $(#buttonA).click(function(){
// 	$('cover').css(background:url(../images/alarm4.png))
// });
// ***********************************

$('.choices').click(function(event){
	event.preventDefault();
	showOptions();
});
	function showOptions(){
		$('.optionA').slideDown();
		$('.optionB').slideDown();
		$('.choices').hide();
	}

// ************************************

// function init() {
//   var pg1BG = 'changableBackgroudImage';
//   document.body.style.background = 'url(../images/alarm4.jpg) no-repeat center center'
// };

});