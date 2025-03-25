//complete this code
class Rectangle {
	private width: number;
	private height: number;
	constructor(width: number, height: number){
		this.width = width;
		this.height = height;
	}
	get width(): number{
		return this.width;
	}
	get height(): number{
		return this.height;
	}
	getArea(): number{
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	private side: number;
	constructor(side: number){
		// this.side = side;
		super(side,side);
	}
	
	getPerimeter(): number{
		return 4*this.side;
	}
}
const rectangle = new Rectangle(5,10);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

const square = new Square(7);
console.log(square.width);
console.log(square.height);
console.log(square.getArea());
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
