import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { Triangle }    from './triangle';

@Component({
  templateUrl: 'app/triangle/triangle.component.html',
  styleUrls:['app/triangle/triangle.css']
})

export class TriangleComponent {
// initialize variables
triangle = new Triangle(null, null, null);
submitted = false;
showInfo = true;
message: string = null;
errorMessage: string = null;
typeOfTriangle: string[] = ['a scalene', 'an isosceles', 'an equilateral', 'invalid input'];

// If inputs are valid numbers greater than zero and three numbers provided can form a triangle( meet all three conditions: a+b>c and a+c>b and b+c>a), return true otherwise return false
isTriangle(a: number, b: number, c: number): boolean {
  // check for invalid data
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || a <= 0 || b <= 0 || c <= 0 ){
    return false;
  }
  // Check if a+b>c and a+c>b and b+c>a
  if (!this.isSumOfFirstTwoSidesGreaterThanTheOther(a, b, c)) {
    return false;
  }
  if (!this.isSumOfFirstTwoSidesGreaterThanTheOther(a, c, b)) {
    return false;
  }
  if (!this.isSumOfFirstTwoSidesGreaterThanTheOther(b, c, a)) {
    return false;
  }
  return true;
}

// If inputs are valid numbers and sum of the first two numbers is greater than the other number, return true otherwise return false
isSumOfFirstTwoSidesGreaterThanTheOther (a: number, b: number, c: number) {
  // check for invalid data
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ){
    return false;
  }
  return a + b > c;
};

// If inputs are not valid numbers return 3, if all the numbers are different return 0, if two numbers are equal return 1 and if all the numbers are equal return 2
numberOfEqualPairs(a: number, b: number, c: number): number {
    // check for invalid data
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'|| isNaN(a) || isNaN(b) || isNaN(c)) {
    return 3;
  }
  var count = 0;
  if (this.isTwoNumbersEqual(a, b)) {
    count++;
  }
  if (this.isTwoNumbersEqual(a, c)) {
    count++;
  }
  if (this.isTwoNumbersEqual(b, c)) {
    count++;
  }
  if (count === 3) {
    count = 2;
  }
  return count;
};

// If both of inputs are valid numbers and equal return true otherwise return false 
isTwoNumbersEqual(a: number, b: number): boolean {
if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }  
  return a === b;
}

 // call resetForm function after given seconds
resetFormAfter(seconds) {
  setTimeout(() => {
  this.resetFormAndMessageBoxes();
  }, seconds * 1000);
}

// reset form and message boxs
resetFormAndMessageBoxes(){
    this.errorMessage =
    this.message =
    this.triangle.firstSide =
    this.triangle.secondSide =
    this.triangle.thirdSide = null;
}

// show either error message or type of triangle 
onSubmit() {
  // aliasing input numbers
  var firstSide = this.triangle.firstSide;
  var secondSide = this.triangle.secondSide;
  var thirdSide = this.triangle.thirdSide;
  // check if these three numbers can form a triangle
  if (!this.isTriangle(firstSide, secondSide, thirdSide)) {
    // show error message
    this.errorMessage = "These numbers can not be sides of a triangle";
    // clear error message and inputboxes after 3 seconds
    this.resetFormAfter(4);
  } else {
    // check type of the triangle
    this.message = this.typeOfTriangle[this.numberOfEqualPairs(firstSide, secondSide, thirdSide)];
    // clear message and inputboxes after 6 seconds
    this.resetFormAfter(6);
  }
  this.submitted = true;
}

}