//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Snippets_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Snippets to content array at Content.jsx

// Command+F replace Snippets for the name of the file (the name will be used at Content.jsx)

//export Snippets
const r1Title = "Snippets and Shortcuts"; //Replace Title
const r1Date = createDate("2023-12-05"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      <h3 className="attention">Snippets</h3>
      <details>
        <summary>Console.WriteLine()</summary>
        <p>cw (pres Tab 2X)</p>
      </details>

      <details>
        <summary>Class</summary>
        <p>prop (pres Tab 2X)</p>
      </details>

      <details>
        <summary>Contructor</summary>
        <p>ctor (pres Tab 2X)</p>
      </details>

      <details>
        <summary>How to create your own Snippets</summary>
        <ol>
          <li>
            Open Visual Studio and go to "Tools" / "Code Snippets Manager."
          </li>
          <li>{`In the "Code Snippets Manager," select the language you are working with (e.g., Visual C#).`}</li>
          <li>{`Click the "Add" button and choose the folder where you want to store your snippets (e.g., "My Code Snippets").`}</li>
          <li>{`Click "Browse" and select a folder or create a new one.`}</li>
          <li>{`Create a new XML file in the selected folder with a .snippet extension (e.g., ReadLine.snippet).`}</li>
          <li>{`Open the XML file and paste the following code:`}</li>
          <CodeMirror
            value={`<?xml version="1.0" encoding="utf-8"?>
  <CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <CodeSnippet Format="1.0.0">
      <Header>
        <Title>ReadLine</Title>
        <Shortcut>rl</Shortcut>
      </Header>
      <Snippet>
        <Code Language="csharp">
          <![CDATA[Console.WriteLine();string userInput = Console.ReadLine();]]>
        </Code>
      </Snippet>
    </CodeSnippet>
  </CodeSnippets>
  `}
            height="50%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            // onChange={onChange}
          />
        </ol>
      </details>

      {/** ***  End of Snippets ****** */}
      <h3 className="attention">Shortcuts</h3>
      <details>
        <summary>Ctrl+RR</summary>
        <p>Change all variables with same name at once</p>
        <p>
          Select the variable and press Ctrl+RR, once you change the name from
          selectable variable, will change from other lines of code as well.{" "}
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

const Snippets = convertMapToObject(CreateNewProject);
export default Snippets;
