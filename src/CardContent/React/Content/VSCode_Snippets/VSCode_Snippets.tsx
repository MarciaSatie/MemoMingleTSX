//Parent Content.jsx
import "./../../../cardContent.scss";
import img1 from "./VSCode_Snippets_assets/img1.png";

//Remember to add the  VSCode_Snippets to content array at Content.jsx

// Command+F replace VSCode_Snippets for the name of the file (the name will be used at Content.jsx)

//export VSCode_Snippets
const r1Title = "VS Code Snippets for React"; //Replace Title
const r1Date = createDate("2023-11-09"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}
      <details>
        <summary>rfc</summary>
        <img src={img1} alt="example 1"></img>
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

const VSCode_Snippets = convertMapToObject(CreateNewProject);
export default VSCode_Snippets;
