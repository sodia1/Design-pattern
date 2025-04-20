class Triangle implements ShapeAreaInterface{
    public height: number;
    public width: number;
    constructor(height: number, width: number){
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return (this.height*this.width)/2;
    }
}

class Rectangle implements ShapeAreaInterface{
    public height: number;
    public width: number;
    constructor(height: number, width: number){
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height*this.width;
    }
}

class Circle implements ShapeAreaInterface{
    public radius: number;
    constructor(radius: number){
        this.radius = radius;
    }

    getArea(): number {
        return 3.14*this.radius*this.radius;
    }
}

interface ShapeAreaInterface{
    getArea(): number
}

//bad code
/*
function computeAreaOfShape(shapes: Array<Rectangle | Triangle | Circle>) {
    return shapes.reduce((calculatedArea, shape)=>{
        if(shape instanceof Triangle){
            return calculatedArea + shape.height*shape.width*0.5;
        }
        if(shape instanceof Rectangle){
            return calculatedArea + shape.height*shape.width;
        }
        if(shape instanceof Circle){
            return calculatedArea + 3.14*shape.radius*shape.radius
        }
    },0)
}
*/


//good code
function computeArea(shapes: Array<Rectangle|Triangle|Circle>){
    return shapes.reduce((area, shape)=>{
        return area + shape.getArea();
    },0)
}