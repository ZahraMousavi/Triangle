"use strict";
var triangle_component_1 = require('../app/triangle/triangle.component');
// variables initialization check
describe('Check if all variables correctly initialized', function () {
    var component;
    beforeEach(function () {
        // establish content
        component = new triangle_component_1.TriangleComponent();
    });
    //assert
    it("triangle.firstSide is defined as ''", function () {
        expect(component.triangle.firstSide).toBeDefined();
    });
    //assert
    it("triangle.secondSide is defined as ''", function () {
        expect(component.triangle.secondSide).toBeDefined();
    });
    //assert
    it("triangle.thirdSide is defined as ''", function () {
        expect(component.triangle.thirdSide).toBeDefined();
    });
    //assert
    it("submitted is false", function () {
        expect(component.submitted).not.toBe(true);
    });
    //assert
    it("showInfo is true", function () {
        expect(component.showInfo).toBe(true);
    });
    //assert
    it("message is defined as ''", function () {
        expect(component.message).toBeDefined();
    });
    //assert
    it("errorMessage is defined as ''", function () {
        expect(component.errorMessage).toBeDefined();
    });
    //assert
    it("typeOfTriangle array contains 'a scalene' ", function () {
        expect(component.typeOfTriangle).toContain('a scalene');
    });
    //assert
    it("typeOfTriangle array contains 'an isosceles' ", function () {
        expect(component.typeOfTriangle).toContain('an isosceles');
    });
    //assert
    it("typeOfTriangle array contains 'an equilateral' ", function () {
        expect(component.typeOfTriangle).toContain('an equilateral');
    });
});
// isSumOfFirstTwoSidesGreaterThanTheOther()
describe('isSumOfFirstTwoSidesGreaterThanTheOther(): takes three numbers and check if sum of the first two numbers is greater than the other?', function () {
    var component;
    beforeEach(function () {
        // establish content
        component = new triangle_component_1.TriangleComponent();
    });
    //assert
    it('2 + 3 is > 4 ', function () {
        expect(component.isSumOfFirstTwoSidesGreaterThanTheOther(2, 3, 4)).toEqual(true);
    });
    //assert
    it('1 + 2 is not > 4', function () {
        expect(component.isSumOfFirstTwoSidesGreaterThanTheOther(1, 2, 4)).toEqual(false);
    });
});
// isTriangle()
describe('isTriangle(): takes three numbers and Check if they can form a triangle?', function () {
    var component;
    beforeEach(function () {
        // establish content
        component = new triangle_component_1.TriangleComponent();
    });
    //assert
    it('2, 3, 4 can form a triangle ', function () {
        expect(component.isTriangle(2, 3, 4)).toEqual(true);
    });
    //assert
    it('1, 2, 4 can not form a triangle', function () {
        expect(component.isTriangle(1, 2, 4)).toEqual(false);
    });
    //assert
    it('4, 2, 1 can not form a triangle', function () {
        expect(component.isTriangle(4, 2, 1)).toEqual(false);
    });
});
// isNumber()
describe('isNumber(): takes ASCII code for a key and Check if it is a digit or not?', function () {
    var component;
    beforeEach(function () {
        // establish content
        component = new triangle_component_1.TriangleComponent();
    });
    //assert
    it('0 is a digit ', function () {
        expect(component.isNumber('0'.charCodeAt(0))).toEqual(true);
    });
    //assert
    it('9 is a digit', function () {
        expect(component.isNumber('9'.charCodeAt(0))).toEqual(true);
    });
    //assert
    it('a is not a digit', function () {
        expect(component.isNumber('a'.charCodeAt(0))).not.toEqual(true);
    });
});
// getTypeOfTriangle()
describe('getTypeOfTriangle(): takes three numbers as sides of a triangle and define type of the triangle(Scalene, Isosceles or Equilateral) and return a number which represent the type in typeOfTriangle array.', function () {
    var component;
    beforeEach(function () {
        // establish content
        component = new triangle_component_1.TriangleComponent();
    });
    //assert
    it('1, 1, 1 form an equilateral triangle', function () {
        expect(component.typeOfTriangle[component.getTypeOfTriangle(1, 1, 1)]).toBe(component.typeOfTriangle[2]);
    });
    //assert
    it('3, 3, 5 form an isosceles triangle', function () {
        expect(component.typeOfTriangle[component.getTypeOfTriangle(3, 3, 5)]).toBe(component.typeOfTriangle[1]);
    });
    //assert
    it('3, 4, 5 form a scalene triangle', function () {
        expect(component.typeOfTriangle[component.getTypeOfTriangle(3, 4, 5)]).toBe(component.typeOfTriangle[0]);
    });
});
// isTwoSidesEqual()
describe('isTwoSidesEqual(): takes three numbers as sides of a triangle and define type of the triangle(Scalene, Isosceles or Equilateral) and return a number which represent the type in typeOfTriangle array.', function () {
    var component;
    beforeEach(function () {
        // establish content
        component = new triangle_component_1.TriangleComponent();
    });
    //assert
    it('1 is equal to 1', function () {
        expect(component.isTwoSidesEqual(1, 1)).toBe(true);
    });
    //assert
    it('3 is not equal to 2', function () {
        expect(component.isTwoSidesEqual(3, 2)).not.toBe(true);
    });
});
// resetForm()
describe('resetForm(): reset the form and the messages', function () {
    var component;
    beforeEach(function () {
        // establish content
        component = new triangle_component_1.TriangleComponent();
        component.triangle.firstSide = "SomeThing";
        component.triangle.firstSide = "SomeThing";
        component.triangle.firstSide = "SomeThing";
        component.errorMessage = "SomeThing";
        component.message = "SomeThing";
        component.resetForm();
    });
    //assert
    it('firstSide is reset', function () {
        expect(component.triangle.firstSide).toBe("");
    });
    //assert
    it('secondSide is reset', function () {
        expect(component.triangle.secondSide).toBe("");
    });
    //assert
    it('thirdSide is reset', function () {
        expect(component.triangle.thirdSide).toBe("");
    });
    //assert
    it('message is reset', function () {
        expect(component.message).toBeNull();
    });
    //assert
    it('errorMessage is reset', function () {
        expect(component.errorMessage).toBeNull();
    });
});
//# sourceMappingURL=triangle-form.spec.js.map