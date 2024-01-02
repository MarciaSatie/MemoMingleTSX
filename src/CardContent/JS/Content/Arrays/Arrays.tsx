//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import img1 from "./Arrays_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Arrays to content array at Content.jsx

// Command+F replace Arrays for the name of the file (the name will be used at Content.jsx)

//export Arrays
const r1Title = "Arrays"; //Replace Title
const r1Date = createDate("2023-11-24"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}

      {/* Detail template */}
      <div className="codeStyle">
        <pre>
          <code>
            const myArray =["banana","apple","cherry" ]; <br></br>
            <br></br>
            myArray[0] <span className="comment">// banana</span>
            <br></br>
            myArray.slice(-1)<span className="comment">// cherry</span>
            <br></br>
            myArray.length<span className="comment">// 3</span>
            <br></br>
            myArray.at(-1)<span className="comment">// cherry</span>
          </code>
        </pre>
      </div>

      {/* //push() */}
      <details>
        <summary>
          <strong className="attention">.push()</strong> method{" "}
          <strong>adds</strong> a new element to an array{" "}
          <strong>(at the end)</strong>.
        </summary>

        <pre className="codeStyle">
          <code>
            const myArray =["banana","apple","cherry" ]; <br></br>
            <br></br>
            myArray.push('kiwi');
            <br></br>
            console.log(myArray);
            <span className="comment">
              // ["banana","apple","cherry","kiwi"]
            </span>
          </code>
        </pre>
      </details>

      {/* pop{} */}
      <details>
        <summary>
          <strong className="attention">.pop() </strong>method{" "}
          <strong>removes</strong> the <strong>last</strong> element from an
          array.
        </summary>
        <pre className="codeStyle">
          <code>
            const myArray =["banana","apple","cherry" ]; <br></br>
            <br></br>
            console.log(myArray.pop());
            <span className="comment">// cherry</span>
            <br></br>
            console.log(myArray);
            <span className="comment">// ["banana", "apple"]</span>
          </code>
        </pre>
      </details>

      {/* //unshift() */}
      <details>
        <summary>
          <strong className="attention">.unshift()</strong> method{" "}
          <strong>adds</strong> a new element to an array{" "}
          <strong>(at the beginning)</strong>.
        </summary>

        <pre className="codeStyle">
          <code>
            const myArray =["banana","apple","cherry" ]; <br></br>
            <br></br>
            myArray.unshift('kiwi');
            <br></br>
            console.log(myArray);
            <span className="comment">
              // ["kiwi","banana","apple","cherry"]
            </span>
          </code>
        </pre>
      </details>

      {/* shift() */}
      <details>
        <summary>
          <strong className="attention">.shift() </strong>method{" "}
          <strong>removes</strong> the <strong>first</strong> element from an
          array.
        </summary>
        <pre className="codeStyle">
          <code>
            const myArray =["banana","apple","cherry" ]; <br></br>
            <br></br>
            console.log(myArray.shift());
            <span className="comment">// banana</span>
            <br></br>
            console.log(myArray);
            <span className="comment">// ["apple","cherry"]</span>
          </code>
        </pre>
      </details>

      {/* splice() */}
      <details>
        <summary>
          <strong className="attention">.splice() </strong>method can
          <strong> add &/or removes</strong> at defined position from an array.
        </summary>

        <img src={img1}></img>

        <pre className="codeStyle">
          <code>
            const myArray =["banana","apple","cherry" ]; <br></br>
            <br></br>
            myArray.splice(1,1); <span className="comment">// apple</span>
            <br></br>
            console.log(myArray);
            <span className="comment">// ["banana","cherry","kiwi"]</span>
          </code>
        </pre>
      </details>

      <details>
        <summary>
          {" "}
          <strong className="attention">.map()</strong>
        </summary>
        <p>
          The map() method loops through the original array and calls the Arrow
          function on every element of the array. Since it is a non-mutating
          method, it creates a new array and the original array is not altered.
          In simple words, it is used when you want to transform all values
          within an array
        </p>
        <CodeMirror
          value={`const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32])`}
          //number
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>
          {" "}
          <strong className="attention">.forEach()</strong>
        </summary>
        <p>
          This is very similar to the map() method, it also executes the
          function on each element once, except that it mutates the original
          array in place, it does not create a new array.
        </p>
        <CodeMirror
          value={`const array1 = ['Anne', 'John', 'Carl'];

          array1.forEach((x) => console.log(x + " Smith"));
          // Expected output: Anne Smith John Smith Carl Smith`}
          //number
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>Methods list</summary>

        <ul>
          <li>.lenght</li>
        </ul>
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

const Arrays = convertMapToObject(CreateNewProject);
export default Arrays;
