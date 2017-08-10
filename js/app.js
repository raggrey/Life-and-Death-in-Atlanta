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


// **** Canvas Puzzle ****

// const PUZZLE_DIFFICULTY = 4;
// const PUZZLE_HOVER_TINT = '#009900'

// var _canvas;
// var _stage;

// var _img;
// var _pieces;
// var _puzzzleWidth;
// var _puzzleHeight;
// var _pieceWidth;
// var _pieceHeight;
// var _currentPiece;
// var _currentDropPiece;

// var _mouse;

// function init(){
// 	_img = new Image();
// 	_img.addEventListener('load',onImage,false);
// 	_img.src = "hairMaster3k.png";
// }

// function onImage(e){
// 	_pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY)
// 	_puzzleHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY)
// 	_puzzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
// 	_puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
// 	setCanvas();
// 	initPuzzle();
// }

// function initPuzzle(){
// 	_pieces = [];
// 	_mouse = {x:0,y:0};
// 	_currentPiece = null;
// 	_currentDropPiece = null;
// 	_stage.drawImage(_img, 0, 0, _puzzzleWidth, _puzzleHeight, 0, 0, _puzzzleWidth, _puzzleHeight)
// 	createTitle("Click to Start Puzzle");
// 	buildPieces();
// }
// // *Builds title, moves containter to center*
// function createTitle(msg){
// 	_stage.fillStyle = "#000000";
// 	_stage.globalAlpha = .4;
// 	_stage.fillRect(100, _puzzleHeight -40, _puzzzleWidth - 200,40);
// 	_stage.fillStyle = "#FFFFFF";
// 	_stage.globalAlpha =1;
// 	_stage.textAlign = "center";
// 	_stage.textBaseline = "middle";
// 	_stage.font = "20px Arial";
// 	_stage.fillText(msg,_puzzzleWidth / 2,_puzzleHeight - 20);
// }

// function buildPieces(){
// 	var i;
// 	var piece;
// 	var xPos = 0;
// 	var yPos = 0;
// 	// --setting the number of pieces:--
// 	for (i = 0;i < PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY;i++){
// 		// --giving xy properties to each piece--
// 		piece = {};
// 		piece.sx = xPos;
// 		piece.sy = yPos;
// 		// --pushing the pieces into the array--
// 		_pieces.push(piece);
// 		xPos += _pieceWidth;
// 		if(xPos >= _puzzzleWidth){
// 			xPos = 0;
// 			yPos += _pieceHeight;
// 		}
// 	} 
// 	// --change for mobile--
// 	document.onmousedown = shufflePuzzle;
// }

// function shufflePuzzle(){
// 	_pieces = shuffleArray(_pieces);
// 	_stage.clearRect(0,0,_puzzzleWidth,_puzzleHeight);
// 	var i;
// 	var piece;
// 	var xPos = 0;
// 	var yPos = 0;
// 	for(i = 0;i < _pieces.length;i++){
// 		piece = _pieces[i];
// 		piece.xPos = xPos;
// 		piece.yPos = yPos;
// 		_stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, xPos, yPos, _pieceWidth, _pieceHeight);
// 		_stage.strokeRect(xPos, yPos, _pieceWidth,_pieceHeight);
// 		xPos += _pieceWidth;
// 		if(xPos >= _puzzzleWidth){
// 			xPos = 0;
// 			yPos += _pieceHeight;
// 		}
// 	}
// 	// --change for mobile--
// 	document.onmousedown = onPuzzleClick;
// }



// // --onPuzzleClick--
// function onPuzzleClick(e){
// 	if(e.layerX || e.layerX == 0){
// 		_mouse.x = e.layerX - _canvas.offsetLeft;
// 		_mouse.y = e.layerY - _canvas.offsetTop;
// 	}
// 	else if(e.offsetX || e.offsetX == 0){
// 		_mouse.x = e.offsetX - _canvas.offsetLeft;
// 		_mouse.y = e.offsetY - _canvas.offsetTop;
// 	}
// 	_currentPiece = checkPieceClicked();
// 	if(_currentPiece != null){
// 		_stage.clearRect(_currentPiece.xPos,_currentPiece.yPos,_pieceWidth,_pieceHeight);
// 		_stage.save();
// 		_stage.globalAlpha = .9;
// 		_stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
// 		_stage.restore();
// 		document.onmousemove = updatePuzzle;
// 		document.onmouseup = pieceDropped;
// 	}

// function checkPieceClicked(){
// 	var	i;
// 	var piece;
// 	for(i = 0;i < _pieces.length; i++){
// 		piece = _pieces[i];
// 		if(_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)){ 
// 			// PIECE NOT HIT
// 		}
// 		else{
// 			return piece;
// 		}
// 	}

// function updatePuzzle(){
// 	_currentPiece = null;
// 	if(e.layerX || e.layerX == 0){
// 		_mouse.x = e.layerX - _canvas.offsetLeft;
// 		_mouse.y = e.layerY - _canvas.offsetTop;
// 	}
// 	else if(e.offsetX || e.offsetX == 0){
// 		_mouse.x = e.offsetX - _canvas.offsetLeft;
// 		_mouse.y = e.offsetY - _canvas.offsetTop;
// 	}
// 	_stage.clearRect(0,0,_puzzzleWidth,_puzzleHeight);
// 	var i;
// 	var piece;
// 	for(i = 0;i < _pieces.length;i++){
// 		piece = _pieces[i];
// 		if(piece == _currentPiece){
// 			continue;
// 		}
// 		_stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
// 		_stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
// 		if(_currentDropPiece == null){
// 			if(_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)){
// 				// NOT OVER
// 			}
// 			else{
// 				_currentDropPiece = piece;
// 				_stage.save();
// 				_stage.globalAlpha = .4;
// 				_stage.fillStyle = PUZZLE_HOVER_TINT;
// 				_stage.fillRect(_currentDropPiece.xPos, _currentDropPiece.yPos, _pieceWidth, _pieceHeight);
// 				_stage.restore();
// 			}
// 		}
// 	}
// 	_stage.save();
// 	_stage.globalAlpha = .6;
// 	_stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
// 	_stage.restore();
// 	_stage.strokeRect(_mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
// }

// function pieceDropped(e){
// 	document.onmousemove = null;
// 	document.onmouseup = null;
// 	if(_currentDropPiece != null){
// 		var tmp = {xPos:_currentPiece.xPos,yPos:_currentPiece.yPos};
// 		_currentPiece.xPos = _currentDropPiece.xPos;
// 		_currentPiece.yPos = _currentDropPiece.yPos;
// 		_currentDropPiece.xPos = tmp.xPos;
// 		_currentDropPiece.yPos = tmp.yPos;
// 	}
// 	resetPuzzleAndCheckWin();
// }

// function resetPuzzleAndCheckWin(){
// 	_stage.clearRect(0,0,_puzzzleWidth,_pieceHeight);
// 	var gameWin = true;
// 	var i;
// 	var piece;
// 	for(i = 0;i < _pieces.length;i++){
// 		piece = _pieces[i];
// 		_stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
// 		_stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
// 		if(piece.xPos != piece.sx || piece.yPos != piece.sy){
// 			gameWin = false;
// 		}
// 	}
// 	if(gameWin){
// 		setTimeout(gameOver,500);
// 	}
// }

// function gameOver(){
// 	document.onmousedown = null;
// 	document.onmousemove = null;
// 	document.onmouseup = null;
// 	initPuzzle();
// }

// // --shuffleArray function--
// function shuffleArray(o){
// 	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
// 		return o;
// }


});