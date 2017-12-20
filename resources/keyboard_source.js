var canvas= document.getElementById("canvas");
var ctx= canvas.getContext("2d");
var width= canvas.width;
var height= canvas.height;

var circle= function (x, y, radius, fillCircle) {
	  ctx.beginPath();
	  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	  if (fillCircle){
		  	ctx.fill();
		  	ctx.fillStyle= "Purple";		  	
	  }else {
		  	ctx.stroke();
	  }
};

var Ball= function () {
	  this.x = width/2;
	  this.y = height/2;
	  this.xSpeed = 5;
	  this.ySpeed = 0;
	  this.speed = 5;
	  this.radius = 10;
};

Ball.prototype.move= function () {
	  if (this.speed < 0){
	  	this.speed = 0;
	  }
	  this.x += this.xSpeed;
	  this.y += this.ySpeed;

	  if (this.x < 0){
	  	this.xSpeed = this.speed;
	  }else if (this.x > width){
	  	this.xSpeed = -this.speed;
	  }
	  if (this.y < 0){
	  	this.ySpeed= this.speed;
	  }else if (this.y > height){
	  	this.ySpeed= -this.speed;
	  }
};

Ball.prototype.draw= function () {
	/*
		if (this.x < 0){
			this.x= 0;
		}else if(this.x > width){
			this.x= width;
		}
		if (this.y < 0){
			this.y= 0;
		}else if (this.y > height){
			this.y = height;
		}
		*/
		if (this.radius < 0){
			this.radius = 3;
		}

	  circle(this.x, this.y, this.radius, true);
};

Ball.prototype.setDirection= function (direction) {
	if(direction === "up"){
		this.xSpeed= 0;
		this.ySpeed= -this.speed;
	}else if(direction === "down"){
		this.xSpeed= 0;
		this.ySpeed= this.speed;
	}else if(direction === "left"){
		this.xSpeed= -this.speed;
		this.ySpeed= 0;
	}else if(direction === "right"){
		this.xSpeed= this.speed;
		this.ySpeed= 0;
	}else if(direction === "stop"){
		this.xSpeed= 0;
		this.ySpeed= 0;
	}
	//console.log('this.xSpeed', this.xSpeed);
	//console.log('this.ySpeed', this.ySpeed);
};

Ball.prototype.setSpeed= function (speed) {
  if (speed === 1){
  	this.speed= 2;
  }else if(speed === 2){
  	this.speed= 4;
  }else if(speed === 3){
  	this.speed= 6;
  }else if(speed === 4){
  	this.speed= 8;
  }else if(speed === 5){
  	this.speed= 10;
  }else if(speed === 6){
  	this.speed= 12;
  }else if(speed === 7){
  	this.speed= 14;
  }else if(speed === 8){
  	this.speed= 16;
  }else if(speed === 9){
  	this.speed= 18;
  }else if(speed === 10){
  	this.speed += 5;
  }else if(speed === 11){
  	this.speed -= 5;
  }
};

Ball.prototype.setRadius= function (radius) {
  if (radius === 12){
  	this.radius -=1;
  }else if (radius === 13){
  	this.radius +=1;
  }
};

var ball= new Ball();

var keyActions= {
	32: "stop",
	37: "left",
	38: "up",
	39: "right",
	40: "down"
};

var speeds= {
	97: 1,
	98: 2,
	99: 3,
	100: 4,
	101: 5,
	102: 6,
	103: 7,
	104: 8,
	105: 9,
	88: 10,
	90: 11
};

var radiuses= {
	67: 12,
	86: 13
};

$("body").keydown(function (event) {
  var direction= keyActions[event.keyCode];
  var speed= speeds[event.keyCode];
  var radius= radiuses[event.keyCode];
  ball.setRadius(radius);
  console.log("radius", radius);
  ball.setSpeed(speed);
  console.log("speed", speed);
  ball.setDirection(direction);
  console.log("direction", direction);
});



setInterval(function(){
	ctx.clearRect(0, 0, width, height);
	ball.draw();
	ball.move();
	ctx.strokeRect(0, 0, width, height);
}, 30);
