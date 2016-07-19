import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { TriangleSides }    from './triangle-sides';

@Component({
  selector: 'triangle-form',
  templateUrl: 'app/triangle-form.component.html',
  styleUrls:['app/triangle-form.css']
})

export class TriangleFormComponent {

triangle = new TriangleSides('', '', '');
submitted = false;
showInfo = true;
message: string = "";
errorMessage: string = "";
typeOfTriangle: string[] = ['a scalene', 'an isosceles', 'an equilateral'];

// prevent user to enter anything else than number inside inputboxes
isNumber(charCode: number): boolean {
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// Check if three numbers can form a triangle or not?
isTriangle(a: number, b: number, c: number): boolean {
  var isTriangle = true;
  // Check if a+b>c and a+c>b and b+c>a
  if (!this.isSumOfFirstTwoSidesGreaterThanTheOther(a, b, c)) {
    isTriangle = false;
  }
  if (!this.isSumOfFirstTwoSidesGreaterThanTheOther(a, c, b)) {
    isTriangle = false;
  }
  if (!this.isSumOfFirstTwoSidesGreaterThanTheOther(b, c, a)) {
    isTriangle = false;
  }
  return isTriangle;
}

// Check if sum of the first two numbers is greater than the other number
isSumOfFirstTwoSidesGreaterThanTheOther = function(a: number, b: number, c: number) {
  return a + b > c;
};

// determine the type of the triangle (Scalene, Isosceles or Equilateral)
getTypeOfTriangle(a: number, b: number, c: number): number {
  // if none of the sides are equal it matches the this.typeOfTriangle[0]
  var typeOfTriangle = 0;
  if (this.isTwoSidesEqual(a, b)) {
    typeOfTriangle++;
  }
  if (this.isTwoSidesEqual(a, c)) {
    typeOfTriangle++;
  }
  if (this.isTwoSidesEqual(b, c)) {
    typeOfTriangle++;
  }
  // if all three sides are equal it matches the this.typeOfTriangle[2]
  if (typeOfTriangle === 3) {
    typeOfTriangle = 2;
  }
  return typeOfTriangle;
};

// check if two sides are equal 
isTwoSidesEqual(a: number, b: number): boolean {
  return a === b;
}

 // reset form after given seconds
resetForm(seconds) {
  setTimeout(() => {
    this.errorMessage = null;
    this.message = null;
    this.triangle.firstSide = "";
    this.triangle.secondSide = "";
    this.triangle.thirdSide = "";
  }, seconds * 1000);
}

// show either error message or type of triangle 
onSubmit() {
  // convert input type text to number
  var firstSide = Number(this.triangle.firstSide);
  var secondSide = Number(this.triangle.secondSide);
  var thirdSide = Number(this.triangle.thirdSide);
  // check if these three numbers can form a triangle
  if (!this.isTriangle(firstSide, secondSide, thirdSide)) {
    // showing error message
    this.errorMessage = "These numbers can not be sides of a triangle";
    // clearing error message and inputboxes after 3s
    this.resetForm(4);
  } else {
    // check type of the triangle
    this.message = this.typeOfTriangle[this.getTypeOfTriangle(firstSide, secondSide, thirdSide)];
    this.resetForm(6);
  }
  this.submitted = true;
}

}