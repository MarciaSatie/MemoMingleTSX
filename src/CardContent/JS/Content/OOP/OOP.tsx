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

  /* Never do this!!!!!! will reate a copy of the method all the time you create a new instace, overloading the program.
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
          <li>Es6 classes do NOT</li>
        </ul>
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
