//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Incrementing_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Incrementing to content array at Content.jsx

// Command+F replace Incrementing for the name of the file (the name will be used at Content.jsx)

//export Incrementing
const r1Title = "Incrementing++ and ++Incrementing"; //Replace Title
const r1Date = createDate("2023-12-19"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <CodeMirror
        value={`class Increment
{
    static void Main()
    {
      // demonstrate postfix increment operator
      int c = 5; // assign 5 to c
      Console.WriteLine($"c before postincrement: {c}"); // displays 5
      //the program will display frst the value of c then increment it. because of that will print
      Console.WriteLine($"    postincrementing c: {c++}"); // displays 5
      
      Console.WriteLine($" c after postincrement: {c}"); // displays 6

      Console.WriteLine(); // skip a line

      // demonstrate prefix increment operator
      c = 5; // assign 5 to c
      Console.WriteLine($" c before preincrement: {c}"); // displays 5
      Console.WriteLine($"     preincrementing c: {++c}"); // displays 6
      Console.WriteLine($"  c after preincrement: {c}"); // displays 6
    }
} 
        `}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
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

const Incrementing = convertMapToObject(CreateNewProject);
export default Incrementing;
