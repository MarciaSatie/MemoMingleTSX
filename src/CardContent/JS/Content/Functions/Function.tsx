//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Functions_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Functions to content array at Content.jsx

// Command+F replace Functions for the name of the file (the name will be used at Content.jsx)

//export Functions
const r1Title = "Functions"; //Replace Title
const r1Date = createDate("2023-12-25"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}

      <details>
        <summary>Function Declarations</summary>
        <p>This is the most common way to define a function.</p>
        <CodeMirror
          value={`function add(x, y) {
  return x + y;
}

console.log(add(3, 5)); // Outputs 8
`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <details>
        <summary>Function Expressions</summary>
        <p>In this type, a function is assigned to a variable.</p>
      </details>

      <details>
        <summary>Arrow Functions (ES6)</summary>
        <div className="codeStyle"></div>
        <p>
          A concise way to write functions introduced in ECMAScript 6 (ES6).
        </p>
        <CodeMirror
          value={` const divide = (x, y) => {
  return x / y;
};

console.log(divide(8, 2)); // Outputs 4
`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <details>
        <summary>Constructor Functions</summary>

        <p>
          <ul>
            <li>Used to create and initialize objects with the new keyword.</li>
            <li>Typically starts with a capital letter.</li>
            <li>
              the <strong>this</strong> keyword plays a crucial role in
              constructor functions. Constructor functions are used to create
              and initialize objects, particularly when you want to create
              multiple instances of similar objects. The <strong>this</strong>{" "}
              keyword refers to the instance of the object that is created by
              the constructor function. <br></br>
              <br></br>
              In summary, the use of <strong>this</strong> in constructor
              functions is central to the object-oriented nature of JavaScript,
              enabling the creation of multiple instances with unique property
              values and facilitating prototype-based inheritance.
            </li>
          </ul>
        </p>
        <CodeMirror
          value={`function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person('John', 25);
console.log(person1.name); // Outputs John
console.log(person2.age);   // Outputs 30
`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>Callback Functions</summary>

        <p>
          <ul>
            <li>
              Functions passed as arguments to another function, to be executed
              later.
            </li>
            <li>Common in asynchronous operations and event handling.</li>
          </ul>
        </p>
        <CodeMirror
          value={`function fetchData(callback) {
  // Simulating asynchronous operation
  setTimeout(function() {
    var data = "This is the fetched data.";
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log(data);
});
          `}
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

const Functions = convertMapToObject(CreateNewProject);
export default Functions;
