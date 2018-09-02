/* eslint-disable */

// ES3
{
  var Person = function() {
    var data = {
      name: '海阳之新',
      sex: '男',
      age: 33
    };
    this.get = function(key) {
      return data[key];
    }
    this.set = function(key, value) {
      if(key !== 'sex') {
        data[key] = value;
      }
    }
  }

  var person = new Person();
  console.info({
    name: person.get('name'), 
    sex: person.get('sex'), 
    age: person.get('age')
  });
  person.set('sex', '女');
  person.set('name', 'Simon');
  console.info({
    name: person.get('name'), 
    sex: person.get('sex'), 
    age: person.get('age')
  });
  
}

//ES5
{
  var Person = {
    name: '海阳之新',
    age: 33
  };
  Object.defineProperty(Person, 'sex', {
    writable: false,
    value: '男'
  });
  console.info({
    name: Person.name, 
    sex: Person.sex, 
    age: Person.age
  });
  Person.name = 'Simon';
  try {
    Person.sex = '女';
  } catch (error) {
    console.info(error);
  }
  console.info({
    name: Person.name, 
    sex: Person.sex, 
    age: Person.age
  });

}

// ES6
{
  let Person = {
    name: '海阳之新', 
    sex: '男', 
    age: 33
  };
  let person = new Proxy(Person, {
    get(target, key) {
      return target[key];
    },
    set(target, key, value) {
      if(key !== 'sex') {
        target[key] = value;
      }
    }
  });
  console.info({
    name: person.name,
    sex: person.sex,
    age: person.age
  });
  try {
    person.sex = '女';
  } catch (error) {
    console.info(error);
  }

}