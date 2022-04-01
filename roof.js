class roof
{
	constructor(x,y)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h);
 		World.add(world, this.roof);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push();
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
			fill(128,128,128);
			rect(0,0,this.w, this.h);
			pop;
			
	}

}