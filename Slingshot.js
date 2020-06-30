class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 100
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
          
    }

    fly(){
        this.sling.bodyA = null;
    }
    reattach(newBody){
        this.sling.bodyA = newBody 
    }

    display(){
        if(this.sling.bodyA){
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y)
       }
    }
    
}
