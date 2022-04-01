class bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false
			restitution:1
			friction:0
			density:0.8
			
			}
		
		this.y=y;
		this.r=r
		
		this.body=Bodies.ellipse(this.x, this.y, (this.r)/2, options)
		World.add(world, this.bob);

	}
	display()
	{
			
			var paperpos=this.body.position;

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER);
			fill(255,0,255);
			ellipse(0,0,this.r, this.r);
			pop;
			
	}

}

