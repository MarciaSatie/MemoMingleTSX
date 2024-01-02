//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import img1 from "./Variables_assets/img1.png";
import img2 from "./Variables_assets/img2.png";
//<img src={img1}></img>

//Remember to add the  Variables to content array at Content.jsx

// Command+F replace Variables for the name of the file (the name will be used at Content.jsx)

//export Variables
const r1Title = "Variables"; //Replace Title
const r1Date = createDate("2023-11-24"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <p>The convention is camelCase to name the variables. </p>

      <details>
        <summary>string</summary>
        <div className="codeStyle">
          <code>string name = "Marcia"; </code>
        </div>

        <h4>Strings Methods:</h4>
        <ul>
          <li>
            <details>
              <summary>.Trim()</summary>
              <p>
                Will take off all the spaces in the beggining and end of the
                string
              </p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string greetings= " Hello World! ";<br></br>
                    Console.WriteLine (greetings.Trim())// "Hello World!"
                  </code>
                </pre>
              </div>
            </details>
          </li>
          <li>
            <details>
              <summary>.TrimStart()</summary>
              <p>Will take off all the spaces in the beggining of the string</p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string greetings= " Hello World! ";<br></br>
                    Console.WriteLine (greetings.TrimStart())// "Hello World!*"
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.TrimEnd()</summary>
              <p>Will take off all the spaces in the end of the string</p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string greetings= " Hello World! ";<br></br>
                    Console.WriteLine (greetings.TrimEnd())// "*Hello World!"
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.Replace("str1","str2")</summary>
              <p>
                str1 - string to be replaced.<br></br>
                str2- string that will replace.
              </p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string sayHello= " Hello World! ";<br></br>
                    string sayHello2 = sayHello.Replace("World", "Moon");
                    <br></br>
                    <br></br>
                    Console.WriteLine(sayHello2); // Hello Moon!
                    <br></br>
                    Console.WriteLine(sayHello) // Hello World!
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.Length</summary>

              <div className="codeStyle">
                <pre>
                  <code>
                    string sayHello= "Hello World!";<br></br>
                    Console.WriteLine(sayHello.Length); // 12
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.ToUpper()</summary>
              <div className="codeStyle">
                <pre>
                  <code>
                    string fullName = "Taylor Swift";<br></br>
                    Console.WriteLine(fullName.ToUpper());//TAYLOR SWIFT
                    <br></br>
                    Console.WriteLine(fullName);//Taylor Swift
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.ToLower()</summary>

              <div className="codeStyle">
                <pre>
                  <code>
                    string fullName = "Taylor Swift";<br></br>
                    Console.WriteLine(fullName.ToLower());//taylor swift
                    <br></br>
                    Console.WriteLine(fullName);//Taylor Swift
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.Contains()</summary>
              <p>Returns True or False.</p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string songLyrics = "You say goodbye, and I say hello";
                    <br></br>
                    <br></br>
                    Console.WriteLine(songLyrics.Contains("goodbye")); //True
                    <br></br>
                    Console.WriteLine(songLyrics.Contains("greetings")); //False
                  </code>
                </pre>
              </div>
            </details>
          </li>

          <li>
            <details>
              <summary>.StartsWith() .EndsWith()</summary>
              <p>Returns True or False.</p>
              <div className="codeStyle">
                <pre>
                  <code>
                    string songLyrics = "You say goodbye, and I say hello";
                    <br></br>
                    <br></br>
                    Console.WriteLine(songLyrics.StartsWith("You")); //True
                    <br></br>
                    Console.WriteLine(songLyrics.EndsWith("say")); //False
                  </code>
                </pre>
              </div>
            </details>
          </li>
        </ul>
      </details>

      <details>
        <summary>Numerical Variables</summary>
        <div className="codeStyle">
          <code>int myNumber= 7; </code>
        </div>

        <ul>
          <li>
            <details>
              <summary>int? nullNumber = null;</summary>
              <p>
                If you want to represent an empty state for a value type, you
                can use a nullable type:
              </p>
            </details>
          </li>
          <li>short</li>
          <li>int</li>
          <li>
            decimal (accept decimal numbers, but you need to add 'm', otherwise
            will be converted as double, ex: 2.56m)
          </li>
          <li>long</li>
          <li>double(accept decimal numbers)</li>
        </ul>
        <img
          src={img1}
          alt="memory capacity for each type of numerial variable."
        ></img>
        <img src={img2}></img>
      </details>

      <details>
        <summary>bool</summary>
        <p>Booleans</p>
        <div className="codeStyle">
          <pre>
            <code>bool myBool = true;</code>
            <br></br>
            <code>Console.WriteLine(myBool); // True </code>
          </pre>
        </div>
      </details>

      <details>
        <summary>var</summary>
        <div className="codeStyle">
          <pre>
            <code>
              var myVar = 24; <br></br>
              var anything ="a var can be anything you want";
            </code>
            <br></br>
            <code>Console.WriteLine(myBool); // True </code>
          </pre>
        </div>
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

const Variables = convertMapToObject(CreateNewProject);
export default Variables;
