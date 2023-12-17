//Parent Content.jsx
import "./../../../cardContent.scss";
import img2 from "./ConsoleInteraction_assets/img2.png";

//Remember to add the  First_Notes to content array at Content.jsx

// Command+F replace First_Notes for the name of the file (the name will be used at Content.jsx)

//export First_Notes
const r1Title = "Console interections"; //Replace Title
const r1Date = createDate("2023-11-22"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}
      <details>
        <summary>Console.Write()</summary>
        <p>
          will print the information in the Terminal (or Powershell) and won't
          skip to next line.
        </p>
      </details>
      <details>
        <summary>Console.WriteLine()</summary>
        <p>
          Will print the information in the Terminal (or Powershell) and skip to
          next line.
        </p>
      </details>
      <details>
        <summary>Console.ReadLine()</summary>
        <p>Will ask for a user input at Terminal (or Powershell)</p>
      </details>
      <img src={img2} alt="image from Visual Studio for Mac"></img>

      <details>
        <summary>Console.ReadKey()</summary>
        <p>Console will accept key interaction from Keyboard</p>
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

const First_Notes = convertMapToObject(CreateNewProject);
export default First_Notes;
