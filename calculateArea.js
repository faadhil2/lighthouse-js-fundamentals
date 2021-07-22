let calculateRectangleArea = function (length, width){
  let area = length * width;
  if (length < 0 || width < 0){
    return undefined;
  }
  return area;
}



let calculateTriangleArea = function (base, height){
  let area = (base * height) / 2;
  if (base < 0 || height < 0){
    return undefined;
  }
  return area;
}



let calculateCircleArea = function (radius){
  let area = (Math.PI) * Math.pow(radius,2);

  if (radius < 0){
    return undefined;
  }
  return area;
}



console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined