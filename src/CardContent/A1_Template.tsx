//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./xxx_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  xxx to content array at Content.jsx

// Command+F replace xxx for the name of the file (the name will be used at Content.jsx)

//export xxx
const r1Title = "xxx"; //Replace Title
const r1Date = createDate("2024-02-25"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <details>
        <summary>Exemple</summary>
        <ul>
          <li>
            <strong></strong>
          </li>
        </ul>
        <CodeMirror
          value={`code here;`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
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
        <CodeMirror
          value={`code here;`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        ]
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

const xxx = convertMapToObject(CreateNewProject);
export default xxx;
