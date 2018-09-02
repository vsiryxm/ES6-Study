/* eslint-disable */

//### 默认参数

//ES5 默认参数
{
  function fun1(x, y, z) {
    if(y === undefined) {
      y = 2;
    }
    if(z === undefined) {
      z = 3;
    }
    return x+y+z;
  }
  console.info(fun1(1, 3));
}

//ES6 默认参数
{
  function fun1(x, y=2, z=3) {
    return x+y+z;
  }
  console.info(fun1(1));
}

{
  function checkMust() {
    throw new Error('错啦错啦，x为必填项！');
  }
  function fun1(x=checkMust(), y=2, z=3) {
    return x+y+z;
  }
  console.info(fun1(1));
  try {
    fun1();
  } catch (error) {
    console.info(error);
  }
}

//### 可变参数接收处理

//ES5 可变参数
{
  function fun1() {
    var a = Array.prototype.slice.call(arguments);
    var sum = 0;
    a.forEach(
      function(item) {
          sum += item;
      }
    );
    return sum;
  }
  console.info(fun1(1,2,3));
}

// ES6 可变参数
{
  function fun1(...a) {
    var sum = 0;
    a.forEach(item => sum+=item);
    return sum;
  }
  console.info(fun1(1,2,3));
}

//### 合并数组

// ES5 合并数组
{
  var a = ['ouyang', 'ella', true, 7];
  var b = ['huige'].concat(a);
  console.info(b);
}

// ES6 利用扩展运算符合并数组
{
  let a = ['ouyang', 'ella', true, 7];
  let b = ['huige', ...a];
  console.info(b);
}