//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./UsefulMethods_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  UsefulMethods to content array at Content.jsx

// Command+F replace UsefulMethods for the name of the file (the name will be used at Content.jsx)

//export UsefulMethods
const r1Title = "Useful Methods"; //Replace Title
const r1Date = createDate("2023-12-04"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      <details>
        <summary>typeof var</summary>
        <CodeMirror
          value={`typeof "John"      // Returns "string"
typeof 3.14        // Returns "number"
typeof true        // Returns "boolean"
typeof false       // Returns "boolean"
typeof x           // Returns "undefined" (if x has no value)`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>{" "}
      <br></br>
      <details>
        <summary>parseInt(var)</summary>
        <CodeMirror
          value={`let age = parseInt("10");
          console.log(typeof age)`}
          //number
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

const UsefulMethods = convertMapToObject(CreateNewProject);
export default UsefulMethods;
