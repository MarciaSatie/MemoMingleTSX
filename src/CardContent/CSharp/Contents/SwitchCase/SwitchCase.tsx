//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Switch Case_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Switch Case to content array at Content.jsx

// Command+F replace Switch Case for the name of the file (the name will be used at Content.jsx)

//export Switch Case
const r1Title = "Switch Case"; //Replace Title
const r1Date = createDate("2023-12-01"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <p>Syntaxe</p>
      <details>
        <summary>Syntaxe Explanation:</summary>
        <ul>
          <li>
            The <strong className="attention">switch</strong> expression is
            evaluated once.
          </li>
          <li>
            The value of the expression is compared with the values of each
            <strong className="attention">case</strong>.
          </li>
          <li>If there is a match, the associated block of code is executed</li>
          <li>
            <strong className="attention">break</strong> will stop code
            execution, otherwise the program will keep testing the other
            conditions.
          </li>
          <li>
            <strong className="attention">default</strong> is optional and
            specifies some code to run if there is no case match.
          </li>
        </ul>
      </details>
      <div className="codeStyle">
        <pre>
          <code>{`switch(expression) 
{
  case x:
    // code block
    break; // if condiction is true, break will stop the code here.
  case y:
    // code block
    break;
  default:// if any condition is true, the program will run the default condition
    // code block
    break;
}`}</code>
        </pre>
      </div>
      <br></br>
      <CodeMirror
        value={`int day = 4;
        switch (day) 
        {
          case 6:
            Console.WriteLine("Today is Saturday.");
            break;
          case 7:
            Console.WriteLine("Today is Sunday.");
            break;
          default:
            Console.WriteLine("Looking forward to the Weekend.");
            break;
        }
        // Outputs "Looking forward to the Weekend.";`}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
      {/* Detail template */}
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

const SwitchCase = convertMapToObject(CreateNewProject);
export default SwitchCase;
