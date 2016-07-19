import { AppComponent } from '../app/app.component';


// If the sum of the first two numbers are greater than the other 
describe('Is sum of the first two numbers greater than the other?', () => {
let component : AppComponent;  

  beforeEach(() => {
    // establish content
    component = new AppComponent();
  });

  it('2 + 3 is > 4 ', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (2,3,4)).toEqual(true);
});

  it('1 + 2 is not > 4', () => {
  expect(component.isSumOfFirstTwoSidesGreaterThanTheOther (1,2,4)).toEqual(false);
});

});


// Check if tree given numbers can form a triangle
describe('Check if tree given numbers can form a triangle?', () => {
let component : AppComponent;  

  beforeEach(() => {
    // establish content
    component = new AppComponent();
  });

  it('2 , 3 , 4 can form a triangle ', () => {
  expect(component.isTriangle (2,3,4)).toEqual(true);
});

  it('1 , 2 , 4 can not form a triangle', () => {
  expect(component.isTriangle (1,2,4)).toEqual(false);
});

  it('4 , 2 , 1 can not form a triangle', () => {
  expect(component.isTriangle (4,2,1)).toEqual(false);
});

});