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
        <summary>var.GetType()</summary>
        <CodeMirror
          value={`int age = 38;
Console.WriteLine(age.GetType());
//System.Int32 (int)`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>{" "}
      <br></br>
      <details>
        <summary>int.Parse(var)</summary>
        <CodeMirror
          value={`string myStr = "200";
var res = int.Parse(myStr);
Console.WriteLine(res.GetType());
//System.Int32`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <br></br>
      <details>
        <summary>decimal.Parse(var)</summary>
        <CodeMirror
          value={`string input = "123.45";
var result = decimal.Parse(input);
Console.WriteLine(result.GetType());
//System.Decimal`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <br></br>
      <details>
        <summary>var.ToString()</summary>
        <p> It converts an object to its string representation</p>
        <CodeMirror
          value={`int initialValue = 123 // number;
var result = initialValue.ToString();
Console.WriteLine(result.GetType());
//System.String`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <br></br>
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
