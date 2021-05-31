class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        polygon = Bodies.circle
        World.add(world,polygon);
        slingshot = new Slingshot(this.polygon,{x:100,y:200});
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
ImageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)
      
        if(this.polygon.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
           }
        }
    }