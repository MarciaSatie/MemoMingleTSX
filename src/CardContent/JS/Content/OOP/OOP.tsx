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
      <details>
        <summary>Using Constructor Functions</summary>
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
      </details>
      <details>
        <summary>ES6 Classes</summary>
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
        </details>
        {/* End of Getter and Setter */}
      </details>
      {/* End of ES6 Classes */}

      <details>
        <summary>Exemple</summary>
        <div className="codeStyle">
          <code>bla bla bla</code>
        </div>
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
