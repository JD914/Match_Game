/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/* Card values */
 var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
 var memory_values = [];
 var memory_tile_ids = [];
 var tiles_flipped = 0;
 Array.prototype.memory_tile_shuffle = function(){
     var i = this.length, j, temp;
     while(--i > 0){
         j = Math.floor(Math.random() * (i+1));
         temp = this[j];
         this[j] = this[i];
         this[i] = temp;
     }
 }
 function newBoard(){
 	tiles_flipped = 0;
 	var output = '';
     memory_array.memory_tile_shuffle();
 	for(var i = 0; i < memory_array.length; i++){
 		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
 	}
 	document.getElementById('memory_board').innerHTML = output;
 }

 window.addEventListener(newBoard());
/* function to flip cards */
 function memoryFlipTile(tile,val){
 	if(tile.innerHTML == "" && memory_values.length < 2){
 		tile.style.background = '#FFF';
 		tile.innerHTML = val;
 		if(memory_values.length == 0){
 			memory_values.push(val);
 			memory_tile_ids.push(tile.id);
 		} else if(memory_values.length == 1){
 			memory_values.push(val);
 			memory_tile_ids.push(tile.id);
 			if(memory_values[0] == memory_values[1]){
 				tiles_flipped += 2;
 				// Clear both arrays
 				memory_values = [];
             	memory_tile_ids = [];
 				// Check to see if the whole board is cleared
 				if(tiles_flipped == memory_array.length){
 					alert("Board cleared... generating new board");
 					document.getElementById('memory_board').innerHTML = "";
 					newBoard();
 				}
 			} else {
 				function flip2Back(){
 				    // Flip the 2 tiles back over
 				    var tile_1 = document.getElementById(memory_tile_ids[0]);
 				    var tile_2 = document.getElementById(memory_tile_ids[1]);
 				    tile_1.style.background = 'url(img.png) no-repeat';
             	    tile_1.innerHTML = "";
 				    tile_2.style.background = 'url(img.png) no-repeat';
             	    tile_2.innerHTML = "";
 				    // Clear both arrays
 				    memory_values = [];
             	    memory_tile_ids = [];
 				}
 				setTimeout(flip2Back, 700);
 			}
    }
 	}
 }
