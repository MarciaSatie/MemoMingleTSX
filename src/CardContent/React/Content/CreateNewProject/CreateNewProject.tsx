const r1Title = "Creating new React file with Vite";
const r1Date = createDate("2023-09-25");
const r1Text = TextContent();

function TextContent() {
  return (
    <>
      <ul>
        {/*Node JS and Vite */}
        <li>
          <details>
            <summary>Node JS and Vite</summary>
            <p>
              To create a new React files with Vite, you need to have installed
              at your computer{" "}
              <a href="https://nodejs.org/en/download" target="blank">
                Node.js
              </a>{" "}
              and Vite
            </p>
          </details>
        </li>

        {/* Creating React files */}
        <li>
          <details>
            <summary>npm create vite@latest</summary>
            <p>
              <ul>
                <li>
                  create folder, open folder with terminal (use cd to reach this
                  new folder)
                </li>
                <li>Type: npm create vite@latest</li>
                <li>
                  Follow Terminal's instructions.
                  <ul>
                    <li>Choose a Project's name</li>
                    <li>React</li>
                    <li>Javascript</li>
                  </ul>
                  <ul>
                    <li>cd project_name</li>
                    <li>npm install</li>
                    <li>code . (to open VS Code)</li>
                    <li>
                      npm run dev (to create the https to show the project in
                      the browser)
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </details>
        </li>

        {/* Install SCSS */}
        <li>
          <details>
            <summary>npm install -D sass</summary>
            <p>
              To use SCSS, type:<br></br>
              npm install -D sass
            </p>
          </details>
        </li>
        {/* Open VS Code + Run dev */}
        <li>
          <details>
            <summary>code . && npm run dev</summary>
            <p>
              type this at terminal to open VS Code and get localhost<br></br>
            </p>
          </details>
        </li>
      </ul>
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

const CreateNewProjectObject = convertMapToObject(CreateNewProject);
export default CreateNewProjectObject;
