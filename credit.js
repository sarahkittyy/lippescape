class Credit
{
	constructor(img, s)
	{
		this.img = img;
		this.w = s;
		this.h = s;
		this.scatter();
	}
	
	scatter()
	{
		this.x = Math.random()*(width - this.w);
		this.y = Math.random()*(height - this.w);
	}
	
	show()
	{
		image(this.img, this.x, this.y, this.w, this.h);
	}
}