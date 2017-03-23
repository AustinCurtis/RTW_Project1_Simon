function setup() {
	createCanvas(windowWidth, windowHeight);

	

	fill('green');
	rect(0, 0, windowWidth/2, windowHeight/2);
	fill('red');
	rect(windowWidth/2, 0, windowWidth/2, windowHeight/2);
	fill('yellow');
	rect(0, windowHeight/2, windowWidth/2, windowHeight/2);
	fill('blue');
	rect(windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);

	strokeWeight(30);
	line(windowWidth/2, 0, windowWidth/2, windowHeight);

	strokeWeight(30);
	line(0, windowHeight/2, windowWidth, windowHeight/2);


	
	
}

function draw() {

	

}

function touchStarted(){
	var x = mouseX;
	var y = mouseY;

	if (x < windowWidth/2 && y < windowHeight/2) {
		console.log("Green");
		fGreen();
		socket.emit('Green', socket.id);
	} else if(x < windowWidth/2 && y > windowHeight/2 ){
		console.log("Yellow");
		fYellow();
		socket.emit('Yellow', socket.id);
	}else if(x > windowWidth/2 && y < windowHeight/2){
		console.log("Red");
		fRed();
		socket.emit('Red', socket.id);
	}else{
		console.log("Blue");
		fBlue();
		socket.emit('Blue', socket.id);
	}
}

function reset(){
	stroke('black');
	fill('green');
	rect(0, 0, windowWidth/2, windowHeight/2);
	fill('red');
	rect(windowWidth/2, 0, windowWidth/2, windowHeight/2);
	fill('yellow');
	rect(0, windowHeight/2, windowWidth/2, windowHeight/2);
	fill('blue');
	rect(windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);

	strokeWeight(30);
	line(windowWidth/2, 0, windowWidth/2, windowHeight);

	strokeWeight(30);
	line(0, windowHeight/2, windowWidth, windowHeight/2);
}

 function fGreen(){
 	console.log("Green-Fun");
 	noStroke();
 	fill('green');
	rect(0, 0, (windowWidth/2)+20, (windowHeight/2)+20);

	stroke('chartreuse');
	strokeWeight(30);
	line((windowWidth/2)+20, 0, (windowWidth/2)+20, (windowHeight/2)+20);

	strokeWeight(30);
	line(0, (windowHeight/2)+20, (windowWidth/2)+20, (windowHeight/2)+20);

	sGreen();

	setTimeout(reset, 1000);
 }

 function fRed(){
 	noStroke();
 	fill('red');
	rect((windowWidth/2)-20, 0, (windowWidth/2)+20, (windowHeight/2)+20);

	stroke('chartreuse');
	strokeWeight(30);
	line((windowWidth/2)-20, 0, (windowWidth/2)-20, (windowHeight/2)+20);

	strokeWeight(30);
	line((windowWidth/2)-20, (windowHeight/2)+20, windowWidth, (windowHeight/2)+20);

	sRed();

	setTimeout(reset, 1000);


 }

 function fYellow(){
 	noStroke();
 	fill('yellow');
	rect(0, (windowHeight/2)-20, (windowWidth/2)+20, windowHeight);

	stroke('chartreuse');
	strokeWeight(30);
	line((windowWidth/2)+20, (windowHeight/2)-20, (windowWidth/2)+20, windowHeight);

	strokeWeight(30);
	line(0, (windowHeight/2)-20, (windowWidth/2)+20, (windowHeight/2)-20);

	sYellow();

	setTimeout(reset, 1000);

 }

 function fBlue(){
 	noStroke();
 	fill('blue');
	rect((windowWidth/2)-20, (windowHeight/2)-20, (windowWidth/2)+20, (windowHeight/2)+20);

	stroke('chartreuse');
	strokeWeight(30);
	line((windowWidth/2)-20,  (windowHeight/2)-20, windowWidth, (windowHeight/2)-20);

	strokeWeight(30);
	line((windowWidth/2)-20, (windowHeight/2)-20, (windowWidth/2)-20, windowHeight);

	sBlue();

	setTimeout(reset, 1000);

 }

 function sGreen(){
 	var wave = new p5.Oscillator();
 	wave.setType('sine');
 	wave.start();
 	wave.amp(0.5);
 	wave.freq(880);
 	wave.stop(0.75);

 }

  function sRed(){
 	var wave = new p5.Oscillator();
 	wave.setType('sine');
 	wave.start();
 	wave.amp(0.5);
 	wave.freq(987);
 	wave.stop(0.75);

 }

  function sYellow(){
 	var wave = new p5.Oscillator();
 	wave.setType('sine');
 	wave.start();
 	wave.amp(0.5);
 	wave.freq(1108);
 	wave.stop(0.75);

 }

  function sBlue(){
 	var wave = new p5.Oscillator();
 	wave.setType('sine');
 	wave.start();
 	wave.amp(0.5);
 	wave.freq(1318);
 	wave.stop(0.75);

 }

   function playVic(){
 	var wave = new p5.Oscillator();
 	var wave2 = new p5.Oscillator();
 	var wave3 = new p5.Oscillator();
 	wave.setType('sine');
 	wave2.setType('sine');
 	wave3.setType('sine');
 	wave.start();
 	wave.amp(0.5);
 	wave.freq(987);
 	wave.stop(0.75);

 	setInterval(function() {
		wave2.start();
 		wave2.amp(0.5);
 		wave2.freq(1108);
 		wave2.stop(0.75);
	}, 1000 );
 	

 	setInterval(function() {
		wave2.start();
 		wave2.amp(0.5);
 		wave2.freq(1318);
 		wave2.stop(0.75);
	}, 2000 );

 }

 function fail(){
 	var wave = new p5.Oscillator();
 	wave.setType('sine');
 	wave.start();
 	wave.amp(0.5);
 	wave.freq(300);
 	wave.stop(0.75);
 }


// P5 STUFF

// bgcol = 'pink';

// function setup() {
// 	createCanvas(windowWidth, windowHeight);

// }

// function draw() {
// 	background(bgcol);

// }

// function touchStarted() {
// 	bgcol = 'green';
// 	return false;
// }

// function touchEnded() {
// 	bgcol = 'pink';
// 	console.log('end');
// 	return false;
// }




