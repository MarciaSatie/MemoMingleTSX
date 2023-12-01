//Parent Content.jsx
import "./../../../cardContent.scss";

//Remember to add the  StringInterpolation to content array at Content.jsx

// Command+F replace StringInterpolation for the name of the file (the name will be used at Content.jsx)

//export StringInterpolation
const r1Title = "C# String Interpolation"; //Replace Title
const r1Date = createDate("2023-11-22"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}
      <div className="codeStyle">
        <pre>
          <code>console.WriteLine($"string &#123; variable &#125; ")</code>
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

const StringInterpolation = convertMapToObject(CreateNewProject);
export default StringInterpolation;
