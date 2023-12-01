//Parent Content.jsx
import "./../../../cardContent.scss";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./IfElse_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  IfElse to content array at Content.jsx

// Command+F replace IfElse for the name of the file (the name will be used at Content.jsx)

//export IfElse
const r1Title = "If Else Stetaments and Ternary Operators"; //Replace Title
const r1Date = createDate("2023-11-25"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  const initialCode = `
  class Program {
    static void Main()
    { int a = 5;
      int b = 3;
      if (a+b >10) 
      {
        Console.WriteLine("It is greater than 10");
      }else if (a+b <= 10) && (a+b >1)
      {
        Console.WriteLine("It is NOT greater than 10 and greater thsn 1");
      }else{
        Console.WriteLine("It is NOT an intenger number");
      }
  
    }
  }
`;

  return (
    <>
      {/* Add the New Content Bellow */}
      <CodeMirror
        value={initialCode}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
      {/* Detail template */}
      <div className="codeStyle">
        <pre>
          <code>Output: It is NOT greater than 10 and greater than 1</code>
        </pre>
      </div>
      <br></br>
      <h4>Tenary Operator</h4>
      <details>
        <summary className="attention">
          var x = (condition) ? expressionTrue : expressionFalse;
        </summary>

        <CodeMirror
          value={`int time = 20;
string result = (time < 18) ? "Good day." : "Good evening.";
Console.WriteLine(result);`}
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

const IfElse = convertMapToObject(CreateNewProject);
export default IfElse;
