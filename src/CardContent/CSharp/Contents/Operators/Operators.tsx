//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Operators_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Operators to content array at Content.jsx

// Command+F replace Operators for the name of the file (the name will be used at Content.jsx)

//export Operators
const r1Title = "Operators"; //Replace Title
const r1Date = createDate("2024-01-05"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <CodeMirror
        value={`// Get numeric input from the user
Console.Write("Enter the first number: ");
int num1 = int.Parse(Console.ReadLine());

Console.Write("Enter the second number: ");
int num2 = int.Parse(Console.ReadLine());

// Relational operators.

//Suppose num1 6 and num2  5; 
Console.WriteLine($"Relational Operators:");

Console.WriteLine($"Equal {num1} == {num2}: {num1 == num2}");// False
Console.WriteLine($"Not Equal {num1} != {num2}: {num1 != num2}");//True
Console.WriteLine($"Less than {num1} < {num2}: {num1 < num2}");//False
Console.WriteLine($"Greater than {num1} > {num2}: {num1 > num2}");//True
Console.WriteLine($"Less than/equal {num1} <= {num2}: {num1 <= num2}");//False
Console.WriteLine($"Greater than/equal {num1} >= {num2}: {num1 >= num2}");//True
Console.WriteLine($"{num1} * {num2}: {num1 * num2}");//30
Console.WriteLine($"{num1} % {num2}: {num1 % num2 ==0}");//False

Console.WriteLine("");

//Boolean operators
Console.WriteLine($"\nBoolean Operators:");
Console.WriteLine($"{num1} < 10 && {num2}>5: {(num1 <10) &&(num2 <5)}");//False
Console.WriteLine($"({num1} % 2 == 0) || ({num2} % 2 == 0): {(num1 % 2 == 0) || (num2 % 2 == 0)}");//True
Console.WriteLine($"!({num1} == {num2}): {!(num1 == num2)}");// The '!' (not) operator will reverse the boolean result.`}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
      <details>
        <summary>Exemple</summary>
        <ul>
          <li>
            <strong></strong>
          </li>
        </ul>
      </details>
      <CodeMirror
        value={`code here;`}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
      {/* Detail template */}
      <div className="codeStyle">
        <pre>
          <code>console.log('string $&#123; variable &#125; ')</code>
        </pre>
      </div>

      <details>
        <summary>Exemple</summary>
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

const Operators = convertMapToObject(CreateNewProject);
export default Operators;
