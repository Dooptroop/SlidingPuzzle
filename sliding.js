var images = new Array(16);
var index = new Array(16);
var match = new Array(16);
var grid = 16;
var path = "Puzzle_Images\\";
var ext = ".jpg";

function populateArray(){
	var i=0;
	while(i<grid){
		match[i]=true;
		images[i]=i;
		i++
	}
	images[15]="blank";
	draw();
}

function draw(){
	
	for (var i = 0; i < grid; i++) {
		index[i] = document.getElementById(i);
		
		index[i].src = path+images[i]+ext;

	};
	
}

function shuffle(){
	populateArray();
	for (var i = 0; i < match.length; i++) {
		match[i]=false;
	};
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
   	
    draw();//refresh screen
}

function imageClick(){
	var arg = parseInt(arguments[0]);
	var down = catchNegative(arg+4);
	var up = catchNegative(arg-4);
	var left = catchNegative(arg-1);
	var right = catchNegative(arg+1);
	
	//window.alert(""+arguments[0]+""); // static postion of board
    //window.alert(""+images[arguments[0]]+"");// image piece (0-15 / blank)
	//window.alert(""+(down+4)+""); // static postion of board DOWN
    //window.alert(""+(arguments[0]+1)+""); // static postion of board RIGHT

	if(arg==images[arg]){
		//window.alert("enter if");
		match[arg]=true;//piece is in its rightfull position
	}
	else {
		//window.alert("enter else");

		blankCheck(arg,down);
		blankCheck(arg,up);
		blankCheck(arg,left);
		blankCheck(arg,right);
	}
		

}

// functions for imageClick
// catch Negative returns the value if positive,  if negative return 0
function catchNegative(){

	if(arguments[0]<0)
		return 0;
		else return arguments[0];

}

// this will check for blank 
function blankCheck(){
	//window.alert("enter blankCheck")
	var index=arguments[0], indexToCheck=arguments[1];
	//window.alert("index "+index+" indexToCheck "+indexToCheck);
	window.alert(images[indexToCheck]);
	if(images[indexToCheck]=="blank"){
		//window.alert("enter swap");

		swapPosition(index, indexToCheck);
	}
	else {return};

}

// this swaps the position of the two args sent
function swapPosition(){
	//window.alert("Enter swapPosition");
	var index1 = arguments[0], index2 = arguments[1];
	//window.alert("arg1 "+index1+" arg2 "+index2);
	var a = images[index1];
    images[index1] = images[index2];
    images[index2] = a;
    //window.alert("arg1 "+index1+" arg2 "+index2);
    draw();

}
function testWin(){
	for (var i = 0; i < match.length; i++) {
		if(match[i]==true)
			continue;
		else 
			return;
	};
	for (var i = 0; i < images.length; i++) {
		if(images[i]=="blank"){
			images[i]=15;
			draw();
		}
		else
			continue;
	};
	draw();
}
