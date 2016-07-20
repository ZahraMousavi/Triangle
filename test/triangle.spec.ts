import { TriangleComponent } from '../app/triangle/triangle.component';

// variables initialization check
describe('Check if all variables correctly initialized', () => {
let component : TriangleComponent;  
  beforeEach(() => {
    // establish content
    component = new TriangleComponent();
  });
  //assert
  it("triangle.firstSide is defined as ''", () => {
  expect(component.triangle.firstSide).toBeDefined();
});
  //assert
  it("triangle.secondSide is defined as ''", () => {
  expect(component.triangle.secondSide).toBeDefined();
});
  //assert
  it("triangle.thirdSide is defined as ''", () => {
  expect(component.triangle.thirdSide).toBeDefined();
});
  //assert
  it("submitted is false", () => {
  expect(component.submitted).not.toBe(true);
});
  //assert
  it("showInfo is true", () => {
  expect(component.showInfo).toBe(true);
});
  //assert
  it("message is defined as ''", () => {
  expect(component.message).toBeDefined();
});
  //assert
  it("errorMessage is defined as ''", () => {
  expect(component.errorMessage).toBeDefined();
});
   //return "a scalene" for 0, "an isosceles" for 1, "an equilateral" for 2 and "invalid input" for 3
  //assert
  it("typeOfTriangle array contains 'a scalene' ", () => {
  expect(component.typeOfTriangle).toContain('a scalene');
});
  //assert
  it("typeOfTriangle array contains 'an isosceles' ", () => {
  expect(component.typeOfTriangle).toContain('an isosceles');
});
  //assert
  it("typeOfTriangle array contains 'an equilateral' ", () => {
  expect(component.typeOfTriangle).toContain('an equilateral');
});
   //assert
  it('typeOfTriangle[3] is "invalid input"', () => {
  expect(component.typeOfTriangle[3]).toBe("invalid input");
});
   //assert
  it('typeOfTriangle[2] is "an equilateral"', () => {
  expect(component.typeOfTriangle[2]).toBe('an equilateral');
});
   //assert
  it('typeOfTriangle[1] is "an isosceles"', () => {
  expect(component.typeOfTriangle[1]).toBe('an isosceles');
});
   //assert
  it('typeOfTriangle[0] is "a scalene"', () => {
  expect(component.typeOfTriangle[0]).toBe('a scalene');
});
});

// isASCIICodeOfANumber()
describe('isASCIICodeOfANumber(): If input is a number and is an ASCII code between 48 for 0 and 57 for 9, return true, otherwise return false.', () => {
let component : TriangleComponent;  
beforeEach(() => {
    // establish content
    component = new TriangleComponent();
  });
   //assert
  it('NaN is not ASCII code of a digit', () => {
  expect(component.isASCIICodeOfANumber (NaN)).not.toEqual(true);
});
   //assert
  it('null is not ASCII code of a digit', () => {
  expect(component.isASCIICodeOfANumber (null)).not.toEqual(true);
});
   //assert
  it('undefined is not ASCII code of a digit', () => {
  expect(component.isASCIICodeOfANumber (undefined)).not.toEqual(true);
});
   //assert
  it('"0" is not ASCII code of a digit ', () => {
  expect(component.isASCIICodeOfANumber ('0')).not.toEqual(true);
});
   //assert
  it('48 is ASCII code of 0 which is ASCII code of a digit ', () => {
  expect(component.isASCIICodeOfANumber (48)).toEqual(true);
});
   //assert
  it('ASCII code of 9 is ASCII code of a digit', () => {
  expect(component.isASCIICodeOfANumber ('9'.charCodeAt(0))).toEqual(true);
});
   //assert
  it('ASCII code "a" is not ASCII code of a digit', () => {
  expect(component.isASCIICodeOfANumber ('a'.charCodeAt(0))).not.toEqual(true);
});
});

// isTriangle()
describe('isTriangle(): If inputs are valid numbers greater than zero and three numbers provided can form a triangle( meet all three conditions: a+b>c and a+c>b and b+c>a), return true otherwise return false', () => {
let component : TriangleComponent;  
beforeEach(() => {
    // establish content
    component = new TriangleComponent();
});
   //assert
  it('null, 3, 4 can not form a triangle ', () => {
  expect(component.isTriangle (null, 3, 4)).not.toEqual(true);
});
   //assert
  it('2, NaN, 4 can not form a triangle ', () => {
  expect(component.isTriangle (2, NaN, 4)).not.toEqual(true);
});
   //assert
  it('2, 3, undefined can not form a triangle ', () => {
  expect(component.isTriangle (2, 3, undefined)).not.toEqual(true);
});
   //assert
  it('2, 3, "a" can not form a triangle ', () => {
  expect(component.isTriangle (2, 3, "a")).not.toEqual(true);
});
   //assert
  it('2, 3, 4 can form a triangle ', () => {
  expect(component.isTriangle (2,3,4)).toEqual(true);
});
   //assert
  it('20, 20, 10 can form a triangle ', () => {
  expect(component.isTriangle (20, 20, 10)).toEqual(true);
});
   //assert
  it('200, 200, 200 can form a triangle ', () => {
  expect(component.isTriangle (200,200,200)).toEqual(true);
});
   //assert
  it('1, 2, 4 can not form a triangle', () => {
  expect(component.isTriangle (1,2,4)).toEqual(false);
});
   //assert
  it('4, 2, 1 can not form a triangle', () => {
  expect(component.isTriangle (4,2,1)).toEqual(false);
});
});

// isSumOfFirstTwoSidesGreaterThanTheOther()
describe('isSumOfFirstTwoSidesGreaterThanTheOther(): If inputs are valid numbers and sum of the first two numbers is greater than the other number, return true otherwise return false', () => {
let component : TriangleComponent;  
  beforeEach(() => {
    // establish content
    component = new TriangleComponent();
  });
  //assert
  it('2 + 3 is > 4 ', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (2,3,4)).toEqual(true);
});
   //assert
  it('1 + 2 is not > 4', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (1,2,4)).toEqual(false);
});
  //assert
  it('-2 + 3 is > 0 ', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (-2,3,0)).toEqual(true);
});
  //assert
  it('null is not number ', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (null,3,4)).toEqual(false);
});
  //assert
  it('NaN + 3 > 4 is false ', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (NaN,3,4)).toEqual(false);
});
  //assert
  it('2 + 3 > NaN is false ', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (2,3,NaN)).toEqual(false);
});
  //assert
  it('undefined is not number ', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (undefined,3,4)).toEqual(false);
});
});

// numberOfEqualPairs()
describe('numberOfEqualPairs(): If inputs are not valid numbers return 3, if all the numbers are different return 0, if two numbers are equal return 1 and if all the numbers are equal return 2', () => {
let component : TriangleComponent;  
beforeEach(() => {
    // establish content
    component = new TriangleComponent();
  });
   //assert
  it('Among 100, 100, 100 there are three equal pairs(return 2)', () => {
  expect(component.numberOfEqualPairs (100, 100, 100)).toBe(2);
});
   //assert
  it('Among 33, 33, 50 there is one equal pair(return 1)', () => {
  expect(component.numberOfEqualPairs (33, 33, 50)).toBe(1);
});
   //assert
  it('Among -2, 0, 50 there is no equal pair(return 0)', () => {
  expect(component.numberOfEqualPairs (-2, 0, 50)).toBe(0);
});
   //assert
  it('null is not valid(return 3)', () => {
  expect(component.numberOfEqualPairs (null, 0, 50)).toBe(3);
});
   //assert
  it('NaN is not valid(return 3)', () => {
  expect(component.numberOfEqualPairs (NaN, 0, 50)).toBe(3);
});
   //assert
  it('undefined is not valid(return 3)', () => {
  expect(component.numberOfEqualPairs (undefined, 0, 50)).toBe(3);
});
});

// isTwoNumbersEqual()
describe('isTwoNumbersEqual(): If both of inputs are valid numbers and equal return true otherwise return false', () => {
let component : TriangleComponent;  

  beforeEach(() => {
    // establish content
    component = new TriangleComponent();
  });
   //assert
  it('1 is equal to 1', () => {
  expect(component.isTwoNumbersEqual (1, 1)).toBe(true);
});
   //assert
  it('3 is not equal to 2', () => {
  expect(component.isTwoNumbersEqual (3, 2)).not.toBe(true);
});
   //assert
  it('null is invalid', () => {
  expect(component.isTwoNumbersEqual (null, 1)).not.toBe(true);
});
   //assert
  it('NaN is not eual to NaN', () => {
  expect(component.isTwoNumbersEqual (NaN, NaN)).not.toBe(true);
});
   //assert
  it('undefined is invalid', () => {
  expect(component.isTwoNumbersEqual (undefined, 1)).not.toBe(true);
});
});

// resetFormAndMessageBoxes()
describe('resetFormAndMessageBoxes(): reset form and message boxs', () => {
let component : TriangleComponent;  
  beforeEach(() => {
    // establish content
    component = new TriangleComponent();  
    component.triangle.firstSide = "SomeThing";       
    component.triangle.firstSide = "SomeThing";       
    component.triangle.firstSide = "SomeThing";
    component.errorMessage = "SomeThing";    
    component.message = "SomeThing";
    component.resetFormAndMessageBoxes(); 
});
   //assert
  it('firstSide is reset', () => {
    expect(component.triangle.firstSide).toBe(""); 
});  
   //assert
  it('secondSide is reset', () => {
    expect(component.triangle.secondSide).toBe(""); 
});  
   //assert
  it('thirdSide is reset', () => {
    expect(component.triangle.thirdSide).toBe(""); 
});  
   //assert
  it('message is reset', () => {
    expect(component.message).toBeNull(); 
});  
   //assert
  it('errorMessage is reset', () => {
    expect(component.errorMessage).toBeNull(); 
}); 
});