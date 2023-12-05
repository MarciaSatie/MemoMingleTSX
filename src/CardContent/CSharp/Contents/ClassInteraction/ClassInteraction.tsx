//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import img1 from "./ClassInteraction_assets/img1.png";
import img3 from "./ClassInteraction_assets/img3.png";
//<img src={img1}></img>

//Remember to add the  ClassInteraction to content array at Content.jsx

// Command+F replace ClassInteraction for the name of the file (the name will be used at Content.jsx)

//export ClassInteraction
const r1Title = "Classes Interaction from different file."; //Replace Title
const r1Date = createDate("2023-12-02"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      <details>
        <summary>Through Methods</summary>
        <p>
          At File.cs 01, let's create a class that will be imported at another
          file.
        </p>
        <CodeMirror
          value={`
class Student {


  private string name;


  public void SetName(string NewName) {

      name = NewName;

  }
  public string GetName() {
      return name;
  }
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <br></br>
        <p>
          At FileTest.cs 02, contain Main(), and will import the class from
          file.cs 01
        </p>
        <CodeMirror
          value={`using System;

public class StudentTest
{
  static void Main()
  {
    Console.Write("Type student name: ");

    string theName = Console.ReadLine();


    Student newStudent = new Student();
        newStudent.SetName(theName);

    Console.WriteLine($"New Student name is {newStudent.GetName()}");
    
  }
}
        
        `}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />{" "}
        <div className="codeStyle">
          <pre>
            <code>{`Output:
Type student name: Jonh // user input
New Student name is Jonh `}</code>
          </pre>
        </div>
        <details>
          <summary>Coding Explanation</summary>
          <img src={img1}></img>
        </details>
      </details>

      <details>
        <summary>Through Properties</summary>

        <p>Class Account that will be called at AccountTest.cs file</p>
        <CodeMirror
          value={`class Account
{
    private string name; // instance variable

    // property to get and set the name instance variable               
    public string Name
    {
      get // returns the corresponding instance variable's value
      {
          return name; // returns the value of name to the client code
      }
      set // assigns a new value to the corresponding instance variable
      {
          name = value; // value is implicitly declared and initialized
      }
    }
}
        ;`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <p>Calling Class Account Properties (.Name)</p>
        <CodeMirror
          value={`class AccountTest
{
    static void Main()
    {
      // create an Account object and assign it to myAccount
      Account myAccount = new Account();

      // display myAccount's initial name 
      Console.WriteLine($"Initial name is: {myAccount.Name}");

      // prompt for and read the name, then put the name in the object
      Console.Write("Please enter the name: "); // prompt
      string theName = Console.ReadLine(); // read a line of text
      myAccount.Name = theName; // put theName in myAccount's Name

      // display the name stored in object myAccount
      Console.WriteLine($"myAccount's name is: {myAccount.Name}");
    }
}
          
          `}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>{`{ get; set; } Auto Property`}</summary>
        <p>
          This is the auto-implemented property syntax. It automatically
          generates a private backing field and the getter (get) and setter
          (set) methods for the property.
        </p>
        <ul>
          <li>
            <strong className="attention">get</strong> accessor retrieves the
            value of the property.
          </li>
          <li>
            <strong className="attention">set</strong> accessor sets the value
            of the property.
          </li>
        </ul>

        <br></br>
        <CodeMirror
          value={`public class Car
{
    // Auto-implemented property
    public string Make { get; set; }

    // Other members and methods of the Car class...
}
        
        `}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />

        <p>
          With this setup, you can easily get and set the value of the Make
          property from outside the Car class:
        </p>
        <CodeMirror
          value={`using System;

Car myCar = new Car();
myCar.Make = "Toyota"; // Set the value
string carMake = myCar.Make; // Get the value
        
        
        `}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      <br></br>
      <p>Follow an example of 3 Class Interaction:</p>
      <img src={img3}></img>
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

const ClassInteraction = convertMapToObject(CreateNewProject);
export default ClassInteraction;
