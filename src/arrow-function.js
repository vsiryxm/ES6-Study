
/**
 * 箭头函数
 */
 

/* eslint-disable */

{
  console.log('Hello,ES6');
}

// ES5
{
  var numbers = [10, 20, 30, 40];
  //遍历数组
  var bianli = numbers.map(function(v) {
      return v + 1;
  });
  console.log(numbers, bianli);
}

// ES6
{
  let numbers = [10, 20, 30, 40];
  //let bianli = numbers.map((v) => { return v+1;});
  let bianli = numbers.map(v => v + 1);
  console.info(numbers, bianli);
}