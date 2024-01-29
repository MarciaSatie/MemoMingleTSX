//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Out_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Out to content array at Content.jsx

// Command+F replace Out for the name of the file (the name will be used at Content.jsx)

//export Out
const r1Title = "Out Parameter or Keyword"; //Replace Title
const r1Date = createDate("2024-01-29"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      <ul>
        <li>
          <strong>Output Parameter:</strong> The parameter marked with "out" is
          meant to return a value from the method.(without use the return
          Keyword).
        </li>
        <li>
          <strong>Initialization Not Required: </strong> You don't need to
          assign a value to the parameter before calling the method. The method
          itself will provide a value.
        </li>
      </ul>
      <CodeMirror
        value={`// Method with an 'out' parameter
void CalculateSum(int a, int b, out int result)
{
    result = a + b;
}

// Usage of the method
int x = 5;
int y = 7;
int sum;

CalculateSum(x, y, out sum);// using out here to return the vaule from result to sum.

// Now, 'sum' contains the result of the calculation
`}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
      <p>
        In this example, the CalculateSum method takes two integers (a and b)
        and calculates their sum, which is then assigned to the result parameter
        marked with "out." The caller doesn't need to initialize sum before
        calling the method; the method itself sets the value of sum.
      </p>

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

const Out = convertMapToObject(CreateNewProject);
export default Out;
