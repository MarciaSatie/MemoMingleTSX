//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Arrays_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Arrays to content array at Content.jsx

// Command+F replace Arrays for the name of the file (the name will be used at Content.jsx)

//export Arrays
const r1Title = "Lists and Arrays"; //Replace Title
const r1Date = createDate("2023-12-04"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      <details>
        <summary>
          <strong>Lists X Arrays</strong>
        </summary>
        <h5>Dynamic vs. Fixed Size:</h5>
        <ul>
          <li>
            <strong className="attention">{`List<string>`}</strong> is dynamic,
            allowing you to resize it dynamically by adding or removing
            elements.
          </li>
          <li>
            <strong className="attention">Arrays</strong> have a fixed size, and
            once created, you cannot change the size. You need to specify the
            size during initialization.
          </li>
        </ul>
      </details>

      <details>
        <summary>
          Declaring <strong>List</strong> with
          <strong className="attention">{` new List <type> `}</strong>{" "}
        </summary>
        <div className="codeStyle">
          <pre>
            <code>
              {`var variableName = new List <type> {"smt1","smt2","smt3}`};
            </code>
          </pre>
        </div>
        <CodeMirror
          value={`var name = new List<string> {"Aline","Carl","Brian"};

foreach (string i in name)
{
    Console.WriteLine(i);
}// Aline Carl Brian;
          `}
          //
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <p>
          <ul>
            <li>{`This declares a variable named names and initializes it with a new instance of the List<string> class.`}</li>
            <br></br>
            <li>
              {`List<string> is a dynamic, resizable collection that allows you to add, remove, and manipulate elements. It is part of the System.Collections.Generic namespace.`}
              <br></br>
              <strong>
                {" "}
                type [] variableName = {`{("smt1", "smt2")}`}
              </strong>{" "}
              decalration, that has a fixed size once they are created.
            </li>
            <br></br>
            <li>
              You can use methods like <strong>Add, Remove, </strong>and others
              to modify the collection dynamically
            </li>
          </ul>
        </p>
      </details>
      <details>
        <summary>
          Declaring <strong>Array</strong> with{" "}
          <strong className="attention">
            type [] variableName = new type [slotsNumber]
          </strong>
        </summary>
        <div className="codeStyle">
          <pre>
            <code>{`type [] variableName = new type [slotsNumber];`}</code>
          </pre>
        </div>
        <CodeMirror
          value={`string[] names = { "Alice", "Bob", "William" }//specifying the size of the array during initialization

foreach (string i in names)
{
    Console.WriteLine(i);
}// Alice Bob William
          `}
          //
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />

        <ul>
          <li>
            Arrays in C# have a fixed size once they are created. You need to
            specify the size of the array during initialization, and you cannot
            change it afterward.
          </li>
          <li>Arrays provide direct access to elements by index.</li>
        </ul>
      </details>

      <h3>Common Methods</h3>

      <details>
        <summary>
          <strong className="attention">{`foreach(var item in array){code}`}</strong>
        </summary>
        <p>Loop throgh and Array / List </p>
        <CodeMirror
          value={`int[] array = { 1, 2, 3 };
List<int> list = new List<int> { 4, 5, 6 };

foreach (var item in array)
{
  Console.WriteLine (item);
  // 1 2 3 
}

foreach (var item in list)
{
  Console.WriteLine (item);
  // 4 5 6 
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          ipsum ullam odit inventore necessitatibus accusantium quis maxime
          dicta et harum consequuntur incidunt magni fugiat dignissimos, quam ea
          praesentium molestias enim?
        </p>
      </details>

      <details>
        <summary>Exemple</summary>
        <div className="codeStyle">
          <code>bla bla bla</code>
        </div>
        <CodeMirror
          value={`code here;`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          ipsum ullam odit inventore necessitatibus accusantium quis maxime
          dicta et harum consequuntur incidunt magni fugiat dignissimos, quam ea
          praesentium molestias enim?
        </p>
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

const Arrays = convertMapToObject(CreateNewProject);
export default Arrays;
