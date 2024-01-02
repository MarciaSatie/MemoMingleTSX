//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import img1 from "./OOP_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  OOP to content array at Content.jsx

// Command+F replace OOP for the name of the file (the name will be used at Content.jsx)

//export OOP
const r1Title = "Object Oriented Program OOP"; //Replace Title
const r1Date = createDate("2023-12-25"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <img src={img1}></img>
      <h3>3 ways to work with OOP:</h3>
      <details>
        <summary className="attention">Using Constructor Functions</summary>
        <ul>
          <li>Technique to create objects from a function.</li>
          <li>
            This is how built-in objects like Arrays, Maps or Sets are
            implemented.
          </li>
          <li>This was the way objects were create before ES6.</li>
        </ul>

        <CodeMirror
          value={`

//Using constructor Function to create objects
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  /* Never do this!!!!!! will create a copy of the method all the time you create a new instace, overloading the program. Instead use Prototype Inheritance.
  this.calcAge = function (){
    console.log(2037 - this.birthYear);
  }
    */
};

const jonas = new Person("Jonas", 1991);
console.log(jonas.firstName, jonas.birthYear);

//1. New {} is created
//2. function is called, this ={}
//3. {} linked to prototype
//4. function automatically retunr {}

console.log(jonas instanceof Person); //return true or false.

//we didn't add the calcAge method inside of Person, as each new instace would duplicate the function calcAge all the time we create a new instace, even when it is not necessary, overloading the program. To be able to access a method just when it is  necessary use Prototype inheritance.

//Prototype inheritance from Constructor Function

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); //calling method calcAge to Jonas Object

console.log(jonas.__proto__); // return the prototype of Jonas Object. { calcAge: [Function (anonymous)] }
console.log(jonas.__proto__ === Person.prototype); // true
//it is easier to think about .prototype method as the liked prototype of Objects, it was just bad named.
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <details>
          <summary>Inheritance</summary>
          <p>To create Inheritance between Constructors Functions you need:</p>
          <ol>
            <li>
              <strong>Step 1.</strong> Use ParentFunction.call(this, "Parent
              Arguments"), to call the parent constructor to initialize
              inherited properties.
            </li>
            <br></br>
            <li>
              {" "}
              <strong>Step 2.</strong> Remeber to add "this" as a argument at
              ParentFunction.call(this, "Parent Arguments"). <br></br>
              <br></br>
              The "this" argument passed to Person.call(this, firstName,
              birthYear); is crucial for properly setting the properties of the
              object being constructed. Let's break down why this is used in
              this specific call
            </li>
            <br></br>
            <li>
              <strong>Step 3.</strong> Establish a prototype chain by setting
              the prototype of the child constructor to an instance of the
              parent constructor. This is done using Object.create().
            </li>{" "}
            <br></br>
            <li>
              <strong>Step 4.</strong> Reset the Child Constructor: Reset the
              constructor property of the child prototype to point back to the
              child constructor. This step is necessary because when you set the
              child's prototype to an instance of the parent, the constructor
              property gets overridden.
            </li>
          </ol>
          <CodeMirror
            value={`//Parent Constructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//Creating teh Child Constructor Function:
const Student = function (firstName, birthYear, course) {
  // Step 1- Using .call() to invoke the Person constructor
  Person.call(this, firstName, birthYear); //Step 2 -The this context inside the Person constructor refers to the object being created when you use the new keyword. When you use new Person("Jonas", 1991);, a new object is created, and this inside the Person constructor refers to that new object.
  this.course = course;
};

//Step 3. Using Object.create to create a link between Parent and Child, it is important to do that before create any other prototype method for  Student, otherwise this will be overrided.
Student.prototype = Object.create(Person.prototype);

//Step 4. If we don't do this step, Mike will be point to Person prototype ex: Person { firstName: 'Mike', birthYear: 1992, course: 'Arts' }, instead Student and this can became a problem in th efuture.
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log('My name is "$"{this.firstName} and I study "$"{this.course}');
};

const mike = new Student("Mike", 1992, "Arts");
console.log(mike.__proto__); //show the next Prototype in the chain, "Person".

//using instanceof to check if mike is part of each part of the prototype chain.
console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

console.dir(Student.prototype.constructor);

mike.introduce(); //My name is Mike and I study Arts
`}
            height="50%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            // onChange={onChange}
          />
        </details>
      </details>
      {/* End of Constructor Function */}
      <details>
        <summary className="attention">ES6 Classes</summary>
        <ul>
          <li>Modern alternative to construct function sytax.</li>
          <li>"Syntactic sugar".</li>
          <li>
            Classes are not hoisted (you can't use them before declare the
            class).
          </li>
          <li>
            Classes are fist-class citizes you can pass into functions, and also
            return them from function, as classes are a special type of
            function).
          </li>
          <li>Classes are executed in strict mode.</li>
        </ul>
        <p>
          Classes allow you to encapsulate data and behavior into a single unit,
          making it easier to organize and manage your code.
        </p>
        <CodeMirror
          value={`//2 ways to create a new class:
//1-Classes Expression
const PersonC2 = class {};

//2-Class Declaration
class PersonC1 {
  //ADD a constructor Method, works like Constructor Function
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //creating Methods that will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

//Creating Instances:
const jessica = new PersonC1("Jessica", 1996);
console.log(jessica); //PersonC1 { firstName: 'Jessica', birthYear: 1996 }
console.log(jessica.birthYear); //1996
jessica.calcAge(); //28`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <details>
          <summary>Inheritance</summary>

          <p>
            Classes support inheritance. In this example below, the{" "}
            <strong>Child</strong> class extends the <strong>PersonC1</strong>{" "}
            class using the extends keyword. The super keyword is used to call
            the constructor of the parent class.
          </p>
          <CodeMirror
            value={`//  Inheritance:

class Child extends PersonC1 {
  constructor(firstName, birthYear, toy) {
    super(firstName, birthYear); // Call the parent class constructor
    this.toy = toy;
  }
  favoriteToy() {
    console.log('"$"{this.firstName} likes to eat "$"{this.toy)'};
  }
}

const anne = new Child("Anne", 2019, "Barbie");
console.log(anne); //Child { firstName: 'Anne', birthYear: 2019, toy: 'Barbie' }
console.log(anne.favoriteToy()); //Anne likes to eat Barbie
`}
            height="50%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            // onChange={onChange}
          />
        </details>
        {/* End of Inheritance */}
        <details>
          <summary>Static Method</summary>
          <ul>
            <li>
              <strong>Associated with the Class Itself:</strong> A static method
              is associated with the class rather than instances of the class.
              It is defined using the <strong>static</strong> keyword.
            </li>
          </ul>
          <ul>
            <li>
              <strong>Accessed on the Class Level: </strong> You call a static
              method directly on the class, not on instances of the class.
            </li>
          </ul>
          <ul>
            <li>
              <strong>No Access to Instance Data:</strong> Static methods don't
              have access to instance-specific data using <strong>this</strong>.
              They operate at the class level and can't reference properties or
              methods that belong to instances.
            </li>
          </ul>
          <CodeMirror
            value={`//**** Using Static Method *****
class MathOperations {
  //A static method is associated with the class rather than instances of the class. It is defined using the static keyword.
  static add(x, y) {
    return x + y;
  }
}
const result = MathOperations.add(5, 3); //You call a static method directly on the class, not on instances of the class.
console.log(result); //8

//***************************************************
//***** Using normal Method *****
class MathOperations2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add() {
    return this.x + this.y;
  }
}
//creating a new Object's Instance. 
const result2 = new MathOperations2(7, 8); // need to create a new instance to pass the parameters.
console.log(result2.add()); //15
`}
            height="50%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            // onChange={onChange}
          />
          <p>
            In summary, static methods are associated with the class itself,
            while regular methods are associated with instances of the class.
            Static methods are called on the class, and they don't have access
            to instance data. Regular methods are called on instances, and they
            have access to the instance's properties and methods through{" "}
            <strong>this</strong>. The choice between static and regular methods
            depends on whether the functionality is related to the class as a
            whole or to specific instances.
          </p>
        </details>
        {/* End of Static Method */}

        <details>
          <summary>Getters and Setters </summary>
          <details>
            <summary>Getter:</summary>
            <div>
              <ul>
                <li>
                  <strong>What it does:</strong> A getter is like a special
                  function in an object that gets called when you try to
                  retrieve the value of a property.
                </li>
                <li>
                  <strong>Why it's useful:</strong> It allows you to run some
                  code or calculations before giving back the value of a
                  property.
                </li>
              </ul>
            </div>
            <CodeMirror
              value={`class Circle {
constructor(radius) {
  this._radius = radius;
}

get diameter() {
  return this._radius * 2;
}
}

const myCircle = new Circle(5);
//calling the method that was created with get (note that you are not using "()")
console.log(myCircle.diameter); // Outputs: 10
`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
          </details>
          {/* End of Getter */}
          <details>
            <summary>Setter:</summary>
            <ul>
              <li>
                <strong>What it does:</strong> A setter is like a special
                function that gets called when you try to change or set the
                value of a property.
              </li>
              <li>
                <strong>Why it's useful:</strong> It allows you to run some code
                or validations before actually setting the new value.
              </li>
            </ul>
            <CodeMirror
              value={`class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  set diameter(newDiameter) {
    this._radius = newDiameter / 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.diameter); // Outputs: 10

myCircle.diameter = 14;
console.log(myCircle.diameter); // Outputs: 14
console.log(myCircle._radius); // Outputs: 7
`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
          </details>
          {/* End of Setter */}
          <details>
            <summary>Methods Vs Getters and Setters</summary>
            <p>
              The key distinction between methods and getters is in how you
              access them and their purpose within an object.
            </p>

            <CodeMirror
              value={`class Circle {
constructor(radius) {
  this._radius = radius;
}

// Regular method that returns a calculation
calculateArea() {
  return Math.PI * this._radius ** 2;
}

// Getter that also returns a calculation
get area() {
  return Math.PI * this._radius ** 2;
}
}

const myCircle = new Circle(5);

// Using a regular method
console.log(myCircle.calculateArea()); // Outputs: 78.53981633974483

// Using a getter
console.log(myCircle.area); // Outputs: 78.53981633974483
`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
            <p>
              In this example, both the calculateArea method and the area getter
              perform the same calculation to determine the area of the circle.
              The primary difference is in how you access them:
            </p>
            <ul>
              <li>
                You call a method like<strong>calculateArea()</strong> using
                parentheses.
              </li>
              <li>
                You access a getter like <strong>area</strong> without
                parentheses, treating it like a property.
              </li>
            </ul>
            <p>
              Getters are often used when you want to treat a calculation as if
              it were a property, providing a more natural syntax for reading
              values. Methods, on the other hand, are used for actions or
              calculations that you invoke with parentheses.
            </p>
            <p>
              So, while both methods and getters can return calculations, the
              use of getters is particularly suitable when the computation is
              conceptually a property of the object, and you want to access it
              in a property-like way.
            </p>
          </details>
          {/* End of Methods X Getters and Setters */}
          <details>
            <summary>Using Getters and Setter for Data Validation</summary>

            <p>Get and Set can be useful to check input information.</p>
            <CodeMirror
              value={`//Using Get and Set for data validation.
class Person2 {
  constructor(fullName) {
    this.fullName = fullName;
  }

  //when you are trying to set a property name taht already exist you can add underscore  to this._fullName
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    // at this._fulName we ae actually creating anew variable _fullName.
    else console.log("not a full name");
  }
  // the problem of this._fullName is when we call the property exemple jessica2.fullName won't work anymore.
  //To fix that we need to create a get for fullName.
  get fullName() {
    return this._fullName;
  }
}

const jessica2 = new Person2("Jessica Jones");
console.log(jessica2.fullName); // Jessica Jones`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
          </details>
          {/* End of Using Getters and Setter for Data Validation */}
        </details>
        {/* End of Getter and Setter */}
      </details>
      {/* End of ES6 Classes */}

      <details>
        <summary className="attention">ES6 Object.create</summary>
        <p>
          Imagine you want to create an object in JavaScript, and you want that
          object to share some characteristics with another object.{" "}
          <strong>Object.create()</strong> helps you do that.
        </p>
        <ol>
          <li>
            <h4>Creating a Blueprint (Using Object literal):</h4>
            First, you have a blueprint or a prototype object that defines some
            properties and behaviors.
            <CodeMirror
              value={`// Creating a prototype object using simple Object Literal.
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
};`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
          </li>
          <li>
            <h4>Creating a New Object:</h4>
            Now, you want to create a new object, and you want it to inherit
            properties from the prototype object.
          </li>
          <CodeMirror
            value={`const steven = Object.create(PersonProto);
console.log(steven); // return an empty object.

steven.name = "Steven";
steven.birthYear = 2002;
console.log(steven); //{ name: 'Steven', birthYear: 2002 }
console.log(steven.calcAge()); // 22`}
            height="50%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            // onChange={onChange}
          />
        </ol>
        <details>
          <summary>Advantages by using Object.create</summary>
          <ol>
            <li>
              <strong>Prototypal Inheritance:</strong>
              <ul>
                <li>
                  <strong>Flexible Prototypes: Object.create()</strong> allows
                  you to create objects with flexible and dynamic prototypes.
                  You can change the prototype at runtime, facilitating
                  prototypal inheritance patterns.
                </li>
              </ul>
            </li>
            <li>
              <strong>Avoids Constructor Functions:</strong>
              <ul>
                <li>
                  <strong>No Constructor Function: </strong> Unlike constructor
                  functions (used with the <strong>new</strong> keyword),{" "}
                  <strong>Object.create()</strong> doesn't require a constructor
                  function. This can make your code more straightforward and
                  avoid issues related to constructor functions.
                </li>
              </ul>
            </li>
            <li>
              <strong>Object Composition:</strong>
              <ul>
                <li>
                  <strong>Object Composition:</strong> You can easily compose
                  objects by creating a prototype chain. Each object can have
                  its own properties, and they can inherit and extend the
                  properties of other objects.
                </li>
              </ul>
            </li>
            <li>
              <strong>Explicit Prototype Assignment:</strong>
              <ul>
                <li>
                  <strong>Explicit Prototype Assignment:</strong>The prototype
                  relationship is explicit. In constructor functions, the
                  relationship is established through the{" "}
                  <strong>prototype</strong> property of the constructor
                  function, which can sometimes be less clear.
                </li>
              </ul>
            </li>
            <li>
              <strong>Selective Property Inheritance:</strong>
              <ul>
                <li>
                  <strong>Selective Property Inheritance:</strong> You can
                  create objects that inherit only specific properties from a
                  prototype, rather than all properties provided by a
                  constructor function.
                </li>
              </ul>
            </li>
            <li>
              <strong>No Constructor Side Effects:</strong>
              <ul>
                <li>
                  <strong>No Constructor Side Effects:</strong> When using
                  Object.create(), there's no risk of unintentional side effects
                  caused by constructor functions. Constructor functions may
                  have unintended behavior, especially when they're used with
                  the <strong>new</strong> keyword.
                </li>
              </ul>
            </li>
            <li>
              <strong>Dynamic Property Addition:</strong>
              <ul>
                <li>
                  <strong>Dynamic Property Addition:</strong> You can add
                  properties to objects after creation, either directly to the
                  object or through the optional{" "}
                  <strong>propertiesObject </strong>parameter of{" "}
                  <strong>Object.create()</strong>
                </li>
              </ul>
            </li>
          </ol>
        </details>
      </details>
      {/* End of Object.create */}
      <details>
        <summary>Exemple</summary>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          ipsum ullam odit inventore necessitatibus accusantium quis maxime
          dicta et harum consequuntur incidunt magni fugiat dignissimos, quam ea
          praesentium molestias enim?
        </p>
        <CodeMirror
          value={``}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
    </>
  );
}

//Function to format Date
function createDate(dateImput) {
  const x = new Date(dateImput);
  const currentDate = x.toISOString();

  const month = x.toLocaleString("en-US", { month: "long" });
  const day = x.toLocaleString("en-US", { day: "2-digit" });
  const year = x.getFullYear();

  return day + " " + month + " " + year;
}

//Adding information to the Map
const CreateNewProject = new Map();
CreateNewProject.set("title", r1Title);
CreateNewProject.set("date", r1Date);
CreateNewProject.set("text", r1Text);

function convertMapToObject(map) {
  const object = {};
  for (let [key, value] of map.entries()) {
    object[key] = value;
  }
  return object;
}

const OOP = convertMapToObject(CreateNewProject);
export default OOP;
