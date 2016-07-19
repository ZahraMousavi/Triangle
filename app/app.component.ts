import {Component} from "angular2/core";

@Component ({
    selector : 'tr-app',
    template : `  
    <div id="container">
<form>
    First side: <input type="text" id="firstSide" [(ngModel)]=firstSide (keypress)="isNumber($event.keyCode)" required><br><br> 
    Second side: <input type="text" id="secondSide" [(ngModel)]=secondSide (keypress)="isNumber($event.keyCode)" required><br><br> 
    Third side: <input type="text" id="thirdSide" [(ngModel)]=thirdSide (keypress)="isNumber($event.keyCode)" required><br><br>
    <button type="submit" (click)='showTypeOfRectangle()'>Define type of triangle</button>
</form>
    <div id = "message">{{message}}</div>
  </div>`
})

export class AppComponent{

   firstSide : number;
   secondSide : number;
   thirdSide : number;
   message : string;

   typeOfTriangle : string[] = ['Scalene', 'Isosceles', 'Equilateral'];

// prevent user to enter anything else than number inside inputboxes
isNumber (charCode:number): boolean {
     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

// check if any of textboxes are empty 
isValidNumber(a : number):boolean{
  if (isNaN(a)) 
  {
    return false;
  } else {
      return true;
  }
}

// Check if three numbers can form a triangle or not?
isTriangle (a : number, b : number, c : number) : boolean{

  var isTriangle = true;

// Check if a+b>c and a+c>b and b+c>a
  if (! this.isSumOfFirstTwoSidesGreaterThanTheOther(a, b, c)){
    isTriangle = false;
  }
  if (! this.isSumOfFirstTwoSidesGreaterThanTheOther(a, c, b)){
    isTriangle = false;
  }
  if (! this.isSumOfFirstTwoSidesGreaterThanTheOther(b, c, a)){
    isTriangle = false;
  } 
  
  return isTriangle;
}

// Check if sum of the first two numbers is greater than the other number
isSumOfFirstTwoSidesGreaterThanTheOther = function(a : number, b : number, c : number){
  return a + b > c;
};  

// determine the type of the triangle (Scalene, Isosceles or Equilateral)
 getTypeOfTriangle (a:number, b:number, c:number) : number{

// if none of the sides are equal it matches the this.typeOfTriangle[0]
  var typeOfTriangle = 0;
  
  if (this.isTwoSidesEqual(a, b)){
      typeOfTriangle ++;
  }
  if (this.isTwoSidesEqual(a, c)){
      typeOfTriangle ++;
  }
  if (this.isTwoSidesEqual(b, c)){
      typeOfTriangle ++;
  } 
  
  // if all three sides are equal it matches the this.typeOfTriangle[2]
  if (typeOfTriangle === 3){
      typeOfTriangle=2;
    }
  return typeOfTriangle;
};

// check if two sides are equal 
isTwoSidesEqual (a : number, b : number) : boolean{
  return a === b;
}

// 
showTypeOfRectangle(){    
    // convert input type text to number
    var firstSide = Number(this.firstSide);
    var secondSide = Number(this.secondSide);
    var thirdSide = Number(this.thirdSide);

    // check if the inputs are valid numbers >0
    if (!(this.isValidNumber(firstSide) && this.isValidNumber(secondSide) && this.isValidNumber(thirdSide))) {
        this.message = "You entered wrong input";
    } else { // check if these three numbers can form a triangle
        if (!this.isTriangle(firstSide, secondSide, thirdSide)){
            this.message = "These numbers can not be sides of a triangle";
        } else{
            // check type of the triangle
            this.message = this.typeOfTriangle[this.getTypeOfTriangle (firstSide, secondSide, thirdSide)];
        }
    }

}

}