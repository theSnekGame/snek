function Food(){
	this.x = floor(random(40))*scale;
	this.y = floor(random(40))*scale;
	
	this.show = function(){
		stroke(218,172,213)
		fill(142,69,133);
		rect(this.x,this.y,scale,scale)
	}
	
	this.anotherOne = function(){
		this.x = floor(random(40))*scale;
		this.y = floor(random(40))*scale;
	}
	
	this.eat = function(){
		if (mongoose.xLoc == this.x && mongoose.yLoc == this.y && players == 2){
			mongoose.grow();
			this.anotherOne();
			
		}
		else if (snek.xLoc == this.x && snek.yLoc == this.y){
			snek.grow();
			this.anotherOne();
			if (players ==1){sscore++} 
		}
	}
	
}