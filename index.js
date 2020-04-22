// Your code here

class Polygon{
    constructor(array){
        this.sides = array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(
            ( a, b ) => a + b
          )
    }
}

class Triangle extends Polygon {
    get isValid(){
        let x = this.sides[0]
        let y = this.sides[1]
        let z = this.sides[2]

        if ((x + y) > z && (x + z) > y && (y + z) > x){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{

    get isValid(){
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]

        if (a === b && c === d && a === c && b === d){
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.sides[0] * this.sides[1]
    }

}