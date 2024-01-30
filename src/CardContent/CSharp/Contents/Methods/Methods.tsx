//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import img1 from "./Methods_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Methods to content array at Content.jsx

// Command+F replace Methods for the name of the file (the name will be used at Content.jsx)

//export Methods
const r1Title = "Methods"; //Replace Title
const r1Date = createDate("2023-12-25"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <details>
        <summary>Expression Bodied Methods</summary>
        <CodeMirror
          value={`static long Cube(int x) => x * x * x; //Expression Bodied Methods, is like Arrow Functions at JS
Console.WriteLine($"Cube of 3 = {Cube(3)}" //27);
Console.WriteLine($"Cube of 100 = {Cube(100)}" //1000000);
Console.WriteLine($"Cube of 20 = {Cube(20)}");//8000`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <ul>
        <li>
          <strong className="attention">ctor (press tab 2X)</strong> snippet to
          create a <strong>constructor</strong> automatically.
        </li>
      </ul>

      <details>
        <summary>Adding Parametrs automatically in a Method.</summary>
        <img src={img1}></img>
      </details>
      <details>
        <summary>Exemple</summary>
        <CodeMirror
          value={`code here;`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>Recursion</summary>
        <ul>
          <li>A recursive method is a method that calls itself.</li>
          <li>Is capable of solving only the base case(s).</li>
          <li>
            Imagine you have a set of boxes stacked on top of each other. To
            find something in the bottom box, you realize you need to look into
            the box on top of it, and to find something in that box, you need to
            look into the box on top of it, and so on. You keep doing this until
            you reach the topmost box, which is small enough that you can easily
            find what you're looking for.
          </li>
          <li>Is not used that often as can consume a lot of memory.</li>
        </ul>
        <CodeMirror
          value={`   // recursive declaration of method Factorial  
class Program
{
    static void Main()
    {
        int number = 5;
        int result = CalculateFactorial(number);
        Console.WriteLine($"Factorial of {number} is: {result}"); 
        // Factorial of 5 is: 120
    }

    static int CalculateFactorial(int n)
    {
        // Base case: If n is 0 or 1, return 1
        if (n == 0 || n == 1)
        {
            return 1;
        }
        else
        {
            // Recursive case: n! = n * (n-1)!
            return n * CalculateFactorial(n - 1); // calling itself 
        }
    }
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <details>
        <summary>Explanation</summary>
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

const Methods = convertMapToObject(CreateNewProject);
export default Methods;
