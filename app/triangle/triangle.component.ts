import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { Triangle }    from './triangle';

@Component({
  selector: 'triangle-form',
  templateUrl: 'app/triangle/triangle.component.html',
  styleUrls:['app/triangle/triangle.css']
})

export class TriangleComponent {
// initialize variables
triangle = new Triangle('', '', '');
submitted = false;
showInfo = true;
message: string = "";
errorMessage: string = "";
typeOfTriangle: string[] = ['a scalene', 'an isosceles', 'an equilateral'];

// prevent user to enter anything else than number inside inputboxes 
// (Ascii code for digits are between 48 for 0 and 57 for 9)
isNumber(charCode: number): boolean {
  if (charCode < 48 || charCode > 57) {
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
isSumOfFirstTwoSidesGreaterThanTheOther (a: number, b: number, c: number) {
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

 // call resetForm function after given seconds
resetFormAfter(seconds) {
  setTimeout(() => {
  this.resetForm();
  }, seconds * 1000);
}

// reset forms and messages
resetForm(){
    this.errorMessage = null;
    this.message = null;
    this.triangle.firstSide = "";
    this.triangle.secondSide = "";
    this.triangle.thirdSide = "";
}

// show either error message or type of triangle 
onSubmit() {
  // convert input type text to number
  var firstSide = Number(this.triangle.firstSide);
  var secondSide = Number(this.triangle.secondSide);
  var thirdSide = Number(this.triangle.thirdSide);
  // check if these three numbers can form a triangle
  if (!this.isTriangle(firstSide, secondSide, thirdSide)) {
    // show error message
    this.errorMessage = "These numbers can not be sides of a triangle";
    // clear error message and inputboxes after 3 seconds
    this.resetFormAfter(4);
  } else {
    // check type of the triangle
    this.message = this.typeOfTriangle[this.getTypeOfTriangle(firstSide, secondSide, thirdSide)];
    // clear message and inputboxes after 6 seconds
    this.resetFormAfter(6);
  }
  this.submitted = true;
}

}