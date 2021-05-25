class Paper{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
    this.image = loadImage("paper.png");
    this.x = x
    this.y = y
    this.r = r
    this.body = Bodies.circle(this.x, this.y,(this.r-20)/2,options);

    World.add(world,this.body);

    }
    display(){
    
        push()
	    pop()
    }



}