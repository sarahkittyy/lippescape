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
		this.x = 200;
		this.y = 200;
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
		if(keyIsDown(LEFT_ARROW))
		{
			this.xv -= accel;
		}
		else if(keyIsDown(RIGHT_ARROW))
		{
			this.xv += accel;
		}
		else
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
		if(keyIsDown(UP_ARROW))
		{
			this.yv -= accel;	
		}
		else if(keyIsDown(DOWN_ARROW))
		{
			this.yv += accel;
		}
		else
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