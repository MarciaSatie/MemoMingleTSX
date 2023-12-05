//Parent Content.jsx
import "./../../../cardContent.scss";
//import img1 from "./Terminal_Tips_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Terminal_Tips to content array at Content.jsx

// Command+F replace Terminal_Tips for the name of the file (the name will be used at Content.jsx)

//export Terminal_Tips
const r1Title = "Terminal_Tips"; //Replace Title
const r1Date = createDate("2023-11-23"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}
      {/* <div className="codeStyle">
        <pre>
          <code>console.log('string $&#123; variable &#125; ')</code>
        </pre>
      </div> */}

      <details>
        <summary>node -v</summary>
        <p>To check the latest version from Node.js</p>
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

const Terminal_Tips = convertMapToObject(CreateNewProject);
export default Terminal_Tips;
