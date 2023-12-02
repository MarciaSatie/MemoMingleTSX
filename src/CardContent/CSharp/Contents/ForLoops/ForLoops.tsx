//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./ForLoops_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  ForLoops to content array at Content.jsx

// Command+F replace ForLoops for the name of the file (the name will be used at Content.jsx)

//export ForLoops
const r1Title = "For Loops."; //Replace Title
const r1Date = createDate("2023-12-01"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <details>
        <summary>for (statement 1; statement 2; statement 3){}</summary>
        <CodeMirror
          value={`for (int i = 0; i < 5; i++) 
{
  Console.WriteLine(i);
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <br></br>

      <details>
        <summary>Nested Loops</summary>
        <CodeMirror
          value={`// Outer loop
for (int i = 1; i <= 2; ++i) 
{
  Console.WriteLine("Outer: " + i);  // Executes 2 times

  // Inner loop
  for (int j = 1; j <= 3; j++) 
  {
    Console.WriteLine(" Inner: " + j); // Executes 6 times (2 * 3)
  }
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <div className="codeStyle">
          <pre>
            <code>
              <span className="comment">//Output:</span>
              {`
Outer: 1
 Inner: 1
 Inner: 2
 Inner: 3
Outer: 2
 Inner: 1
 Inner: 2
 Inner: 3`}
            </code>
          </pre>
        </div>
      </details>
      <br></br>

      <details>
        <summary>foreach (type variableName in arrayName){}</summary>
        <p>Just to loop Arrays</p>
        <CodeMirror
          value={`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

foreach (string i in cars) 
{
  Console.WriteLine(i);
} ;
//Volvo, BMW, Ford, Mazda`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <br></br>

      <details>
        <summary>Adding Break</summary>
        <p>
          The break statement can also be used to jump out of a loop.<br></br>
          This example jumps out of the loop when i is equal to 4:
        </p>
        <CodeMirror
          value={`for (int i = 0; i < 10; i++) 
{
  if (i == 4) 
  {
    Console.WriteLine("stopping for loop");
    break;
  }
  Console.WriteLine(i);
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <div className="codeStyle">
          <pre>
            <code>
              <span className="comment">//Output:</span>
              {`
0
1
2
3
stopping for loop`}
            </code>
          </pre>
        </div>
      </details>
      <br></br>

      <details>
        <summary>Adding Continue</summary>
        <p>
          The continue statement breaks one iteration (in the loop), if a
          specified condition occurs, and continues with the next iteration in
          the loop.<br></br>
          TThis example skips the value of 4:
        </p>
        <CodeMirror
          value={`using System;
          ​
namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      for (int i = 0; i < 10; i++) 
      {
        if (i == 4) 
        {//run the code inside of this if stetament and continue the loop
          continue;
        }
        Console.WriteLine(i);
      }    
    }
  }
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <div className="codeStyle">
          <pre>
            <code>
              <span className="comment">//Output:</span>
              {`
0
1
2
3
5
6
7
8
9`}
            </code>
          </pre>
        </div>
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

const ForLoops = convertMapToObject(CreateNewProject);
export default ForLoops;
