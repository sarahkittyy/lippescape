//uwu
class Lipp
{
	constructor(img, s)
	{
		this.img = img;
		this.w = s;
		this.h = s;
		this.init();
	}
	
	init()
	{
		if(Math.random() > 0.5)
		{
			this.x = Math.random() * width;
			this.y = (Math.random() > 0.5) ? (-this.h) : (height + 15);
		}
		else
		{
			this.y = Math.random() * height;
			this.x = (Math.random() > 0.5) ? (-this.w) : (width + 15);
		}
		
	}
	
	update(player)
	{
		let speed = Math.random() * 2;
		let dx = player.x - this.x;
		let dy = player.y - this.y;
		let dist = Math.hypot(dx, dy);
		if(dist === 0)
		{
			return;
		}
		let xv = dx/dist * speed;
		let yv = dy/dist * speed;
		
		this.x += xv;
		this.y += yv;
	}
	
	show()
	{
		image(this.img, this.x, this.y, this.w, this.h);
	}
}
