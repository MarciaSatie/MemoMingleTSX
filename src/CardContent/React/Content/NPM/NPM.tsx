//Parent Content.jsx
import "./../../../cardContent.scss";

//Remember to add the  Npm to content array at Content.jsx

// Command+F replace Npm for the name of the file (the name will be used at Content.jsx)

//export Npm
const r1Title = "NPM usefull commands"; //Replace Title
const r1Date = createDate("2023-11-15"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}

      <details>
        <summary>npm help</summary>
        <p>Return lsit of functionalities from npm</p>
      </details>

      <details>
        <summary>npm install latest</summary>
        <p>Install the latest NPM version</p>
      </details>

      <details>
        <summary>npm --version</summary>
        <p>To check the latest npm version</p>
      </details>

      <details>
        <summary>npm cache verify</summary>
        <p>ou can view the size of the cache</p>
      </details>
      <details>
        <summary>npm cache clean --force</summary>
        <p>
          {" "}
          This command will delete cached data that npm doesn't currently need,
          but it will need to redownload packages the next time you install
          them.
        </p>
        <h4>ERROR message related with Ownership</h4>
        <p>
          If the program is not allowing you to clean npm cache because of
          permissions, you need to change Ownership of the npm Cache Directory:
          <br></br>
          <code className="codeStyle">
            sudo chown -R 501:20 "/Users/marciasatie/.npm"
          </code>
          <br></br>
          Then you can repeat the following steps:
          <ol>
            <li>npm cache clean --force</li>
            <li>npm install</li>
            <li>npm run dev</li>
          </ol>
        </p>
      </details>

      <details>
        <summary>npm install react-icons</summary>
        <p>To install react pre-icons like search</p>
      </details>

      <details>
        <summary>npm i react-router-dom</summary>
        <p>
          The react-router-dom package contains bindings for using React Router
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

const Npm = convertMapToObject(CreateNewProject);
export default Npm;
