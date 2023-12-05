//Parent Content.jsx
import "./../../../cardContent.scss";

//Contents:
//import img1 from "./Tips_WriteMemos_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Tips_WriteMemos to content array at Content.jsx

// Command+F replace Tips_WriteMemos for the name of the file (the name will be used at Content.jsx)

//export Tips_WriteMemos

const r1Title = "Tips to Write JSX Memos"; //Replace Title
const r1Date = createDate("2023-11-25"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}

      <details>
        <summary>
          &#123; &#125; = <strong> &amp;#123; &amp;#125;</strong>
        </summary>
        <p>
          To display &#123; &#125; as a string you need to write: <br></br>
          &amp;#123; &amp;#125;
        </p>
      </details>

      <details>
        <summary>
          &lt;&gt; = <strong> &amp;lt; &amp;gt;</strong>
        </summary>
        <p>
          To display &lt;&gt; as a string you need to write: <br></br>
          &amp;lt; &amp;gt;
        </p>
      </details>

      <details>
        <summary>Adding Images</summary>
        <p>
          To use images, import it like any jsx file, example: <br></br>
          <code className="codeStyle">import img1 from "./file_path...";</code>
          <br></br>
          Then to insert the image in the code, type:<br></br>
          <code className="codeStyle">
            &lt; img src= &#123;img1 &#125;&gt; &lt;/img &gt;
          </code>
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

const Tips_WriteMemos = convertMapToObject(CreateNewProject);
export default Tips_WriteMemos;
