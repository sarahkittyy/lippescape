let player;
let lipps;
let lipp_img;

let canvas;

let credit;
let credit_img;

let clock;

let lost = false;

function addLipp()
{
	lipps.push(new Lipp(lipp_img, 64));
}

function preload()
{
	player = new Player(200, 200, 125);
	credit_img = loadImage('cc.png');
	lipp_img = loadImage('lipp.png');
	lipps = [];
}

let windowborder = 50;

function windowResized()
{
	resizeCanvas(windowWidth - windowborder, windowHeight - windowborder);
	player.die();
	credit.scatter();
	lipps = [];
}

function setup()
{
	canvas = createCanvas(windowWidth - windowborder, windowHeight - windowborder);
	player.init();
	credit = new Credit(credit_img, 48);
}

function draw()
{
	background(127,100,255);
	
	for (let lipp of lipps)
	{
		lipp.update(player);
		lipp.show();
		if(player.collides(lipp))
		{
			player.die();
			lipps = []
			break;
		}
	}
	credit.show();
	player.update();
	if(player.collides(credit))
	{
		player.collect();
		addLipp();
		credit.scatter();
	}
	player.show();
}