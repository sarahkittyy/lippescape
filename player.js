class Player
{
	constructor(x, y, s)
	{
		this.img = loadImage('boy.png');
		this.x = x;
		this.y = y;
		this.s = s;
		this.xv = 0;
		this.yv = 0;
		this.credits = 0;
	}
	
	init()
	{
		let ratio = this.img.width / this.img.height;
		this.w = this.s * ratio;
		this.h = this.s;
	}
	
	die()
	{
		this.x = width / 2 - this.w / 2;
		this.y = height / 2 - this.h / 2;
		this.credits = 0;
	}
	
	collides(credit)
	{
		let shave = 20;
		let x = this.x + shave;
		let w = this.w - 2*shave;
		let y = this.y + shave;
		let h = this.h - 2*shave;
		
		if(y + h > credit.y
			&& y < credit.y + credit.w)
		{
			if(x + w > credit.x 
				&& x < credit.x)
			{
				return true;
			}
			else if(x < credit.x + credit.w
				&& x > credit.x)
			{
				return true;
			}
		}
		else if(x < credit.x + credit.w
			&& x + w > credit.x)
		{
			if(y < credit.y + credit.h
				&& y + h > credit.y)
			{
				return true;
			}
			else if(y + h > credit.y
				&& y < credit.y + credit.h)
			{
				return true;
			}
		}
		else
		{
			return false;
		}
	}
	
	collect()
	{
		this.credits += 4;
	}
	
	update()
	{
		let accel = 0.5;
		let touched = (touches.length != 0);
		if(touched)
		{
			let touch = touches[0];
			let dx, dy;
			dx = touch.x - this.x;
			dy = touch.y - this.y;
			let dist = Math.hypot(dx, dy);
			if(dist != 0)
			{
				let xc = (dx/dist) * accel;
				let yc = (dy/dist) * accel;
				
				this.xv += xc;
				this.yv += yc;
			}
		}
		if(keyIsDown(LEFT_ARROW) && !touched)
		{
			this.xv -= accel;
		}
		else if(keyIsDown(RIGHT_ARROW) && !touched)
		{
			this.xv += accel;
		}
		else if (!touched)
		{
			if(this.xv > accel/2)
			{
				this.xv -= accel;	
			}
			else if(this.xv < -accel/2)
			{
				this.xv += accel;
			}
			else
			{
				this.xv = 0;
			}
		}
		if(keyIsDown(UP_ARROW) && !touched)
		{
			this.yv -= accel;	
		}
		else if(keyIsDown(DOWN_ARROW) && !touched) 
		{
			this.yv += accel;
		}
		else if(!touched)
		{
			if(this.yv > accel/2)
			{
				this.yv -= accel;	
			}
			else if(this.yv < -accel/2)
			{
				this.yv += accel;
			}
			else
			{
				this.yv = 0;
			}
		}
		let max = 8;
		this.xv = constrain(this.xv, -max, max);
		this.yv = constrain(this.yv, -max, max);
		
		this.x += this.xv;
		this.y += this.yv;
	}
	
	show()
	{
		image(this.img, this.x, this.y, this.w, this.h);
		textAlign(CENTER, TOP);
		textSize(24);
		fill(80);
		text('Credits: ' + this.credits, width/2, 10);
	}
}