var images = new Array(16);
var index = new Array(16);
var grid = 16;
var path = "Puzzle_Images\\";
var ext = ".jpg";
function populateArray(){
	var i=0;
	while(i<grid){
		images[i]=i;
		i++
	}
	images[15]="blank";
}
function draw2(){
	
	for (var i = 0; i < grid; i++) {
		index[i] = document.getElementById(i);
		
		index[i].src = path+images[i]+ext;
	};
	
}

function shuffle(){
	var rnd;
   	var i=0;
   	while(i<grid){
   			rnd=Math.floor(Math.random()*16)
   			
      var index = rnd;
      // Simple swap
      var a = images[index];
      images[index] = images[i];
      images[i] = a;
      i++;
   	}    
    draw2();//refresh screen
}
