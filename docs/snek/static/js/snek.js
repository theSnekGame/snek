function Snake(color){
	this.xLoc = (19+color)*scale;
	this.yLoc = 19*scale;
	this.xspeed = pow(-1,color+1)*scale;
	this.yspeed = 0;
	
	this.update = function(){
		this.xLoc += this.xspeed;
		this.yLoc += this.yspeed;
		this.xLoc = constrain(this.xLoc, 0, width-scale);
		this.yLoc = constrain(this.yLoc, 0, height-scale);
		for (i=this.tail.length-1;i>=0;i--){
			if(i==0){
				this.tail[i].x = this.xLoc;
				this.tail[i].y = this.yLoc;
				
			}
			else if(i!=0){
				this.tail[i].x = this.tail[i-1].x;
				this.tail[i].y = this.tail[i-1].y;
			}
		}
	}
	this.show = function(){
		stroke(255-(255*color));
		strokeWeight(2);
		fill(255,0,0);
		rect(this.xLoc, this.yLoc, scale, scale);
		fill(255);
	}
	this.direction = function(x,y){
		this.xspeed = x*scale;
		this.yspeed = y*scale;
	}
	
	this.tail = [new segment];
	this.grow = function(){
		this.tail.push(new segment(color,this.tail.length))
	}
	
	this.kill = function(){
		if(players ==1){
			end = true;
			alert(`final length is ${sscore}`)
		}
		else{
			if(color == 0){
				alert(`mongoose wins round ${round}`);
				mscore +=1;
				round +=1;
				twoPlayerSetup();
			}
			else if(color==1){
				alert(`snek wins round ${round}`);
				sscore +=1;
				round +=1;
				twoPlayerSetup();
			}
		}
	}
	
}
function segment(color,index){
	this.x = 0;
	this.y = 0;
	
	this.show = function(){
		fill(255-(255*color));
		rect(this.x, this.y, scale, scale);
		colorMode(HSB);
		fill((32*index)%255,255,255);
		colorMode(RGB);
		rect(this.x+2, this.y+2, scale-4, scale-4);
		fill(255);
	}
	
	this.kill = function(){
		if (mongoose.xLoc == this.x && mongoose.yLoc == this.y && players == 2){
			mongoose.kill();
		}
		else if (snek.xLoc == this.x && snek.yLoc == this.y){
			snek.kill();
		}
	}
}