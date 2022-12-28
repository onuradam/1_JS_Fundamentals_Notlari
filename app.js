/* Log to Console */

  //console.log('Hello World');
  //console.log(123);
  //console.log(true);
  //var greeting = 'Hello';
  //console.log(greeting);
  //console.log([1, 2, 3, 4]);
  //console.log({a:1, b:2});
  //console.table({a:1, b:2});

  //console.error('This is some error');
  //console.clear(); /* Console u temizler. */
  //console.warn('This is a warning.')

  //console.time('Hello'); /* time ve timeEnd arasına koyulan bütün kodların ne kadar sürdüğünü hesaplar. */
    //console.log('Hello World');
    //console.log('Hello World');
    //console.log('Hello World');
    //console.log('Hello World');
    //console.log('Hello World');
    //console.log('Hello World');
    //console.log('Hello World');
  //console.timeEnd('Hello');
//-----------------------------------------------------------------------------------------------------------------------------------------------

/* var, let, const */

/* VAR */
  /* var name = 'John Doe';
  console.log(name);
  name = 'Jane Doe'; // var değerleri değiştirilebilir.
  console.log(name); */

  // Init var
    /* var greeting; // var kullanılarak boş değer tanımlanabilir. 
    console.log(greeting); // çıktı olarak undefined verecektir.
    greeting = 'Hello';
    console.log(greeting); */

  // letters, numbers, _, $
  // Can not start with number
    //var 1name = 'John'; hata verecektir.
    //var $name = 'John';
    //var _name = 'John';

  // Multi word vars
    //var firstName = 'John'; Camel Case
    //var first_name = 'Jane'; Underscore
    //var FirstName = 'Jane'; Pascal Case
    //var firstname = 'Jane'; Pascal Case


/* LET */
  //let name;
  //name = 'John Doe';
  //console.log(name);
  //name = 'Jane Doe'; // let değerleri var a benzer olarak değiştirilebilir.
  //console.log(name);

/* CONST */
  //const name = 'John';
  //console.log(name);
  //name = 'Jane'; // const değerleri değiştirilemez.
  //const greeting; // const da boş değer girilemez.

  /* const person = {
    name: 'John',
    age: 30
  } */

  //person.name = 'Sara'; // constların kendi değeri değiştirilemez fakat içerisi değiştirilebilir.
  //person.age = 32;
  //console.log(person);

  //const numbers = [1, 2, 3, 4, 5];
  //numbers.push(6);
  //console.log(numbers);
//------------------------------------------------------------------------------------------------------------

/* VARIABLES */

/* Primitive Types */
  //1) String
    //const name = 'John Doe';
  //2) Number
    //const age = 45;
  //3) Boolean
    //const hasKids = true;
  //4)Null
    //const car = null;
  //5) Undefined;
    //let test;
  //6) Symbol
    //const sym = Symbol();
  
    //console.log(typeof sym);

/* Reference Types - Objects */
  //1)Array
    //const hobbies= ['movies', 'music'];
  //2)Object literal
    /*const address = {
      city: 'Boston',
      state: 'MA'
    }*/
  //3)Date
    //const today = new Date();
    //console.log(today);

    //console.log(typeof today);
//---------------------------------------------------------------------------------------------------------------------------------------

/* TYPE CONVERSION */
    
  //let val;

  //1)String e dönüştürme
    //String() Metodu
      //Number to string
        //val = String(5555);
        //val = String(4 + 4);
      //Bool to string
        //val = String(true);
      //Date to string
        //val = String(new Date());
      //Array to string
        //val = String([1, 2, 3, 4]);
    
    //toString() metodu
        //val = (5).toString();
        //val = (true).toString();

  //2)String den sayıya dönüştürme  
    //Number() metodu
      //val = Number('5');
      //val = Number(true); 1 çıktısı verir.
      //val = Number(false); 0 çıktısı verir.
      //val = Number(null); 0 çıktısı verir.
      //val = Number('Hello');
      //val = Number([1,2,3,4]);
    
    //parseInt() metodu
      //val = parseInt('100');
      //val = parseInt('100.30'); // çıktı olarak int verir.
    //parseFloat() metodu
      //val = parseFloat('100.30');

  //Output
    //console.log(val);
    //console.log(typeof val);
    //console.log(val.length);
    //console.log(val.toFixed(2));

    //const val1 = '5';
    //const val2 = 6;
    //const sum = val1 + val2;

    //console.log(sum);
    //console.log(typeof sum);
//------------------------------------------------------------------------------------------------------------------

/* NUMBERS AND MATH OBJECTS */
  //const num1 = 100;
  //const num2 = 50;
  //let val;

  //Simple math with numbers
    //val = num1 + num2;
    //val = num1 - num2;
    //val = num1 * num2;
    //val = num1 / num2;
    //val = num1 % num2; // kalanı hesaplar.

  //Math Object
    //val = Math.PI; // pi sayısı
    //val = Math.E; // e sayısı
    //val = Math.round(2.8); // yuvarlama yapar.
    //val = Math.ceil(2.4); // yukarı yuvarlar.
    //val = Math.floor(2.8); // aşağı yuvarlar.
    //val = Math.sqrt(64);
    //val = Math.abs(-3); // mutlak değer.
    //val = Math.pow(8, 2); // üs alma.
    //val = Math.min(2,33,4,1,43,-4); // en küçük değeri çıkarma.
    //val = Math.max(2,33,4,1,43,-4); // en büyük değeri çıkarma.
    //val = Math.random(); // rastgele değer ataması yapar.

    //val = Math.floor(Math.random() * 20 + 1); // istenilen aralıkta rastgele sayı ataması yapılır.

  //console.log(val);
//-------------------------------------------------------------------------------------------------------------------------

/* String Methods & Concatenation */
  //const firstName = 'William';
  //const lastName = 'Johnson';
  //const age = 36;
  //const str = 'Hello there my name is jane doe'
  //const tags = 'web design,web development,programming'

  //let val;

  //val = firstName + lastName;

  //Concatenation
    //val = firstName + ' ' + lastName;

  //Append
    //val = 'Brad ';
    //val += 'Traversy';

    //val = 'Hello, my name is ' + firstName + ' and I am ' + age;

  //Escaping
    //val = "That's awesome, I can't wait";
    //val = 'That\'s awesome, I can\'t wait'; // '\' işareti escpae

  //Length
    //val = firstName.length;

  //concat
    //val = firstName.concat(' ', lastName);

  //Change case
    //val = firstName.toUpperCase();
    //val = firstName.toLowerCase();

  //Indexleme
    //val = firstName[0];
    //val = firstName[2];

  //indexOf()
    //val = firstName.indexOf('l');
    //val = firstName.lastIndexOf('l'); //tersten indexleme

  //charAt()
    //val = firstName.charAt('0'); //W çıktısı verir.

  //Get last character
    //val = firstName.charAt(firstName.length - 1);

  //Substring
    //val = firstName.substring(0, 4);

  //slice()
    //val = firstName.slice(0, 4);
    //val = firstName.slice(-3);

  //split()
    //val = str.split(' ');
    //val = tags.split(','); // ayırıcı tanımlanarak her biri bir array elemanına atanır.

  //replace()
    //val = str.replace('jane', 'Jack');

  //includes()
    //val = str.includes('Hello'); // str içerisinde Hello olduğu için true çıktısı verir.
    //val = str.includes('deneme'); // false

    //console.log(val);
//---------------------------------------------------------------------------------------------------------------

/* Template Literals */
    //const name = 'John';
    //const age = 35;
    //const job = 'Web Developer';
    //const city = 'Miami';
    //let html;

    //Without template strings (es5)
      //html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

      /* 
        html = '<ul>' +
                '<li>Name: ' + name + '</li>' +
                '<li>age: ' + age + '</li>' +
                '<li>job: ' + job + '</li>' +
                '<li>city: ' + city + '</li>'
      */

    //With template strings (es6)
      /* 
        html = `
        <ul>
          <li>Name: ${name}</li>
          <li>Age: ${age}</li>
          <li>Job: ${job}</li>
          <li>City: ${city}</li>
          <li>${2 + 2}</li>
          <li>${hello()}</li>
          <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
        </ul>
      `;
      */

      /* function hello() {
        return 'Hello';
      } 
      */

      //document.body.innerHTML = html;
//---------------------------------------------------------------------------------------------------------------------------------------------------

/* Array & Array Methods */

      //Create some arrays
        //const numbers = [43, 56, 33, 23, 44, 36, 5];
        //const numbers2 = new Array(22, 45, 33, 76, 54);
        //const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
        //const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

        //let val;
      
      //Get array length
        //val = numbers.length;

      //Chech if is array
        //val = Array.isArray(numbers); //true
        //val = Array.isArray('Deneme'); //false

      //Get single value
        //val = numbers[3];
        //val = numbers[0];

      //Insert into array
        //numbers[2] = 100;

      //Find index of value
        //val = numbers.indexOf(36);

      //Mutating arrays
        //Add on to end
          //numbers.push(250); //sonuna ekleme yapar.
        //Add on to front
          //numbers.unshift(129);
        //Take off from end
          //numbers.pop(); //sondaki elemanı siler.
        //Take off from front
          //numbers.shift(); //baştaki elemanı siler. 
        //Splice values
          //numbers.splice(1, 2); //1.indexteki değerden başlayarak 2.indexteki değeri kaldırır.
        //Reverse
          //numbers.reverse(); //arrayi ters çevirir.

      //Concatenate arrays
        //val = numbers.concat(numbers2); //birleştirir.
      
      //Sorting
        //val = fruit.sort();
        //val = numbers.sort(); //ilk basamağa göre sıralar sayının tümüne göre değil.
        //Use the compare function
          //val = numbers.sort(function(x, y) {
            //return x- y;
          //});
        //Reverse sort
          //val = numbers.sort(function(y, x) {
            //return x- y;
          //})

      //Find
        /* 
        function under50(num) {
          return num < 50;
        }; 
        */

        //val = numbers.find(under50); // 43 50'den küçük ilk elemandır fonk. bunu verecektir.

        /* 
        function over50(num) {
          return num > 50;
        }; 
        */

        //val = numbers.find(over50); //56'yı verecektir. 56 50'den sonra gelen ilk büyük eleman.

        //console.log(numbers);
        //console.log(val);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Object Literals */
  /*   
  const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
      city: 'Miami',
      state: 'FL'
    },
    getBirthYear: function() {
      return 2017 - this.age;
    }
  } 
  */

  //let val;

  //val = person;
  
  //Get specific value
    //val = person.firstName;
    //val = person['firstName'];
    //val = person.age;
    //val = person.hobbies;
    //val = person.hobbies[1];
    //val = person.address.state;
    //val = person.address['city'];
    //val = person.getBirthYear();
    
  //console.log(val);

  /* 
  const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 23},
    {name: 'Jane', age: 23}
  ]; 
  */

  /* 
  for(let i = 0; i < people.length; i ++) {
    console.log(people[i].name);
  }; 
  */
//---------------------------------------------------------------------------------------------------------------------------

/* Dates and Times */

  //let val;

  //const today = new Date();
  //let birthday = new Date('9-10-1981 11:25:00');
  //birthday = new Date('September 10 1981');
  //birthday = new Date('9/10/1981');

  //val = today.getMonth(); //gerçek zamanda 12.aydaysak çıktı olarak 11 veriyor. Bunun sebebi 0 başlangıç. Ocak 0, Şubat 1 olarak gider.
  //val = today.getDate(); //günde sorun yok.
  //val = today.getDay(); // 0 indexi pazardan başlar gün salıysa 0 pazar 1 pzt 2 salı.
  //val = today.getFullYear(); //yılı alır.
  //val = today.getHours();
  //val = today.getMinutes();
  //val = today.getSeconds();
  //val = today.getMilliseconds();
  //val = today.getTime();

  //birthday.setMonth(2);
  //birthday.setDate(12);
  //birthday.setFullYear(2020);
  //birthday.setHours(3);
  //birthday.setMinutes(30);
  //birthday.setSeconds(25);


  //console.log(birthday);
  //console.log(typeof val);
//---------------------------------------------------------------------------------------------------------------------------------------------------------

/* If Statements & Comparison Operators */

  /* 
  if(something) {
    do something
  } else {
    do something else
  }; 
  */

  //const id = '100';

  //Equal To
    /* 
    if(id == 101) {
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }; 
    */

  //Not equal to
    /* 
    if(id != 101) {
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }; 
    */

  //Equal to value and type: sadece değere değil değişkenin tipine de bakar.
    //const id2 = '100';

    /* 
    if(id2 === 100) { //tipleri aynı olmadığı için incorrect
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }; 
    */

  //Equal to value and type: sadece değere değil değişkenin tipine de bakar.
    //const id3 = '100';

    /* 
    if(id3 !== 100) { //tipleri aynı olmadığı için incorrect
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }; 
    */

    /*
    if(id) { // BU YÖNTEM ID TANIMLI OLMADIĞINDA HATA VERİR DİĞER YÖNTEM ALTTA.
      console.log(`The ID is ${id}`);
    } else {
      console.log('No ID');
    }
    */

  //Test if undefined
    /*
    if(typeof id !== 'undefined') { // ID Tanımlı olmadığı için No ID verir.
      console.log(`The ID is ${id}`);
    } else {
      console.log('No ID');
    }
    */

  //Greater or less than
    /*
    if(id > 200) {
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }; 
    */

  //IF ELSE
    //const color = 'yellow';
    /*
    if(color === 'red') {
      console.log('Color is red');
    } else if(color === 'blue') {
      console.log('Color is blue');
    } else {
      console.log('Color is not red or blue')
    }
    */
  
  //Logical Operators
    /* const name = 'Steve';
    const age = 80; */

    //AND &&
      /*
      if(age > 0 && age < 12) {
        console.log(`${name} is a child`);
      } else if(age >= 13 && age <= 19) {
        console.log(`${name} is a teenager`)
      } else {
        console.log(`${name} is an adult`)
      }
      */
    
    //OR ||
      /*
      if(age < 16 || age > 65) {
        console.log(`${name} can not run in race`);
      } else {
        console.log(`${name} can race`)
      }
      */

    //TERNARY OPERATOR
      //id4 = 100;
      //console.log(id4 === 100 ? 'CORRECT' : 'INCORRECT'); // burada ? id === 100 koşulu doğruysa devreye girer. : ise else kısmıdır.

    //WITHOUT BRACES 
      /*
      if(id4 === 100)
        console.log('Correct');
      else 
        console.log('INCORRECT');
      */
//-------------------------------------------------------------------------------------------------------------------------------------------------

/* Switches */

  /*
  const color = 'yellow';

  switch(color){
    case 'red':
      console.log('Color is red');
      break;
    case 'blue':
      console.log('Color is blue');
      break;
    default:
      console.log('Color is not red or blue');
      break;
  }

  let day;

  switch(new Date().getDay()){
    case 0:
      day = 'Pazar';
      break;
    case 1:
      day = 'Pazartesi';
      break;
    case 2:
      day = 'Sali';
      break;
    case 3:
      day = 'Çarşamba';
      break;
    case 4:
      day = 'Perşembe';
      break;
    case 5:
      day = 'Cuma';
      break;
    case 6:
      day = 'Cumartesi';
      break;
  }

  console.log(`Bugün günlerden ${day}`);
  */
//-------------------------------------------------------------------------------------------------------------------------------------------------

/* Function Declarations & Expressions */

  /*
  //Function Declarations
    function greet(firstName = 'John', lastName = 'Doe'){
      //if(typeof firstName === 'undefined'){firstName = 'John'}; fonksiyonun içine bir şey yazılmadığında default değer döndürmek için yazılmıştır. Ama daha basiti fonk. tanımlanırken defaultları girmek.
      //if(typeof lastName === 'undefined'){lastName = 'John'};
      //console.log('Hello');
      return 'Hello ' + firstName + ' ' + lastName;
    }

    //console.log(greet('John', 'Doe'));

  //Function Expressions
    const square = function(x = 3){
      return x*x;
    };

    //console.log(square(4));
    //console.log(square());

  //Immidiatley Invokable Function Expressions - IIFEs
    
    (function(){
      console.log('IIFE Ran..')
    })();
    
   (function(name){
    console.log('Hello ' + name);
   })('Brad');
   

  //Property Methods
   //When func. is put inside of an object its called method.
   const todo = {
    add: function(){
      console.log('Add todo...')
    },
    edit: function(id){
      console.log(`Edit todo ${id}`)
    }
   }

   todo.delete = function(){
    console.log('Delete todo...')
   }

   todo.add();
   todo.edit(22);
   todo.delete();
   */
//----------------------------------------------------------------------------------------------------------------------------------------------------------

/* General Loops */

   /*
   //FOR LOOP
    for(let i = 0; i < 10; i++){
      //console.log('Number: ' + i);
      if(i === 2){
        console.log('2 is my favorite number');
        continue //continue atlamaya yarar.
      }

      if(i === 5){
        console.log('Stop the loop')
        break;
      }

      console.log('Number: ' + i);
    }
   */

   /*
   //WHILE LOOP
      let i = 0;

      while(i < 10){
        console.log('Number: ' + i);
        i++;
      }
    */

  //DO WHILE
    /*
    let i = 0;

    do {
      console.log('Number: ' + i);
      i++;
    }

    while(i < 10); i = 100 olsa bile Number: 100 olarak çıktı verir. Yani koşul sağlanmasa bile çıktı verir.
    */

  //LOOP THROUGH ARRAYS
    /*
    const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
    
    for(let i = 0; i < cars.length; i++) {
      console.log(cars[i]);
    }
    */

  //LOOP THROUGH ARRAYS 2
    /*
    const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
    
    cars.forEach(function(car){
      console.log(car);
    });
    */

  //MAP
    /*
    const users = [
      {id:1, name:'John'},
      {id:2, name:'Sara'},
      {id:3, name:'Karen'},
      {id:4, name:'Mike'}
    ];

    const ids = users.map(function(user){
      return user.id;
    });

    console.log(ids);
    */

  //FOREACH
    /*
    const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
    
    cars.forEach(function(car, index, array){
      console.log(`${index}: ${car}`);
      console.log(array);
    });
    */
  
  //FOR IN LOOP
    /*
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 40
    }

    for(let x in user){
      console.log(`${x}: ${user[x]}`);
    }
    */
//-----------------------------------------------------------------------------------------------------------------------------------------------

/* A Look At The Window Object */

    //WINDOW METHODS / OBJECTS / PROPERTIES
    
      //1)Alert
        //window.alert('Hello World');
      
      //2)Prompt
        //const input = prompt();
        //alert(input);

      //3)Confirm
        /*
        if(confirm('Are you sure')){
          console.log('YES');
        } else {
          console.log('NO');
        }
        */
      
      //PROPERTIES
        
        //Outer height and width
          //let val;
          //val = window.outerHeight;
          //val = window.outerWidth;

        //Inner height and width
          //val = window.innerHeight;
          //val = window.innerWidth;

        //Scroll Points
          //val = window.scrollY;
          //val = window.scrollX;
        
        //Location Object
          //val = window.location;
          //val = window.location.hostname;
          //val = window.location.port;
          //val = window.location.href;
          //val = window.location.search;

        //Redirect
          //window.location.href = 'http://google.com';

        //Reload
          //window.location.reload();

        //History Object
          //window.history.go(-2);
          //val = window.history.length;
          
        //Navigator Object
          //val = window.navigator;
          //val = window.navigator.appName;
          //val = window.navigator.appVersion;
          //val = window.navigator.userAgent;
          //val = window.navigator.platform;
          //val = window.navigator.vendor;

        //console.log(val);
//-------------------------------------------------------------------------------------------------

/* Block Scope With let & const */

  //Global Scope
    var a = 1;
    let b = 2;
    const c = 3;

    /*
    function test(){
      var a = 4;
      let b = 5
      const c = 6;
      console.log('Function Scope: ', a, b, c);
    }
    */
    //test();

    /*
    if(true) {
      //Block Scope
      var a = 4;
      let b = 5;
      const c = 6;
      console.log('If scope: ', a, b, c);
    } //If scope:  4 5 6 çıktı verir. varın değeri değişti.
    */

    /*
    for(let a = 0; a < 10; a++) {
      console.log(`Loop: ${a}`); 
    } //a'nın global scopedaki değeri let den dolayı değişmez.
    */

    /*
    for(var a = 0; a < 10; a++ ) {
      console.log(`Loop: ${a}`);
    }
    */

    //console.log('Global Scope: ', a, b, c);
    
    