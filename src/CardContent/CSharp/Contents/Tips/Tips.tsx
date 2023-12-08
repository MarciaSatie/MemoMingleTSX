//Parent Content.jsx
import "./../../../cardContent.scss";
import img1 from "./Tips_assets/img1.png";
import img2 from "./Tips_assets/img2.png";
//<img src={img1}></img>

//Remember to add the  Tips to content array at Content.jsx

// Command+F replace Tips for the name of the file (the name will be used at Content.jsx)

//export Tips
const r1Title = "Tips"; //Replace Title
const r1Date = createDate("2023-11-24"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}

      <details>
        <summary>
          <strong className="attention">\n </strong>skip to next line
        </summary>
        <img src={img1}></img>
      </details>

      <details>
        <summary>
          <strong className="attention">
            Using System/ namespace, what a hell?!{" "}
          </strong>
        </summary>
        <p>
          <strong>using System </strong>- you are calling the library System
          (Console.WriteLine is part of this library for exemple).<br></br>
          <br></br>
          <strong>namespace </strong> - is a container of possible multiple
          classes (basically you are creating your own library this way).
          <br></br>
          <br></br>
          <strong>static void Main()</strong> - the code inside of Main ()is the
          first thing to be read at this file.
          <ul>
            <li>
              <strong>static</strong> means that the Main method is a static
              member of the class. It does not require an instance of the class
              to be invoked.
            </li>
            <br></br>
            <li>
              <strong>void</strong> means you won't return nothing.
            </li>
            <br></br>
            <li>
              <strong>Main(add Parameter/ or not)</strong> This is the name of
              the method. The name Main is a convention for the entry point of a
              C# program. The runtime looks for this method when it starts
              executing the program. Basically it is used to iniatialise the
              program.
            </li>
          </ul>
        </p>
        <img src={img2}></img>
      </details>
      <details>
        <summary>
          <strong>Ascii-code</strong>
        </summary>
        <a href="https://www.ascii-code.com/">Go to Ascii Website</a>
        <p>
          ASCII, stands for American Standard Code for Information Interchange.
          It is a 7-bit character code where each individual bit represents a
          unique character
        </p>
      </details>

      <details>
        <summary>
          <span className="attention">\t</span>
        </summary>
        <p>add tabs spaces</p>
      </details>

      <details>
        <summary>
          <span className="attention">{`\u20AC`}</span>
        </summary>
        <p>use the unicode: \u20AC</p>
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

const Tips = convertMapToObject(CreateNewProject);
export default Tips;
