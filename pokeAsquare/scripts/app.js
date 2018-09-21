$('button').on('click', () => {
	console.log('click works');
	// when the user clicks the button,
	// popilate the squares
	creteSquares(30);
})

// create a function named creteSquares,
// that takes a parameter of an arbitary 
// number and creates divs according to the 

const creteSquares = (numberOfSquares) =>{
	for(let i =0; i < numberOfSquares; i++){
		//creates divs
		const $div = $('<div/>');
		//attach to the square class
		$('.squares').append($div);
	}
}