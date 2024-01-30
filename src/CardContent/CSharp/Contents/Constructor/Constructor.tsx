//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import img1 from "./Constructor_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Constructor to content array at Content.jsx

// Command+F replace Constructor for the name of the file (the name will be used at Content.jsx)

//export Constructor
const r1Title = "Class's Constructor"; //Replace Title
const r1Date = createDate("2023-12-08"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      <ul>
        <li>
          <strong className="attention">ctor (press tab 2X)</strong> snippet to
          create a <strong>constructor</strong> automatically.
        </li>
      </ul>
      <p>
        A <strong>Constructor</strong> is a special method that is called when
        an object of a class is created.{" "}
        <strong>It is used to initialize</strong> the object's state and perform
        any necessary setup tasks. Constructors have the same name as the class
        and do not have a return type, not even <strong>void.</strong>{" "}
        <img src={img1}></img>
        <br></br>
        <br></br>
        They are invoked automatically when an object is instantiated using the{" "}
        <strong>new</strong> keyword.
      </p>
      <CodeMirror
        value={`//Creating a new Person Object 
Person p1 = new Person();//new will call the constructor`}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
      <br></br>
      <br></br>

      <details>
        <summary>Constructor doesn’t have return type.</summary>
        <p> This is the way the program recognises the constructor.</p>
      </details>

      <details>
        <summary>Constructor doesn’t need to be declared.</summary>
        <p>
          When you don't declare a constructor, C# will create it automatically,
          underneath the code.
        </p>
      </details>

      <details>
        <summary>You can have more than 1 Constructor.</summary>
        <p>
          You can create more than 1 Constructor, usually we have the{" "}
          <strong>Default Constructor</strong> and (can be more than 1){" "}
          <strong>Parameterized Constructor</strong>
        </p>
        <p>
          <strong>Default Constructor</strong>: This is a constructor with no
          parameters. If you don't provide any constructor in your class, the
          compiler automatically adds a default constructor for you. However, if
          you define a parameterized constructor, the default constructor is not
          automatically added. You need to explicitly define it if you still
          want to have one. .
        </p>
        <p>
          {" "}
          <strong>Parameterized Constructor</strong>: This constructor takes one
          or more parameters, allowing you to pass values during the creation of
          an object. It is useful when you want to initialize the object with
          specific values.
        </p>
        <CodeMirror
          value={`class Person
{
    //Constructor doesn’t have return type,
    //this is the way the program recognises the constructor.

    //adding a Constructor with no argumrnt
    public Person()
    {
        Console.WriteLine("Constructor is executing");
    }

    //addinf a 2nd Constructor with 2 arguments.
    public Person(string name, int age)
    {
        this.Name = name;
        this.Age = age;
        Console.WriteLine();
    }
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <CodeMirror
        value={`class Person
{
    //Propertied is Uppercase, PascalCase.
    public string Name { get; set; }
    public int Age { get; set; }

    //Constructor doesn’t have return type,
    //this is the way the program recognises the constructor.

    //adding a Constructor with no argumrnt
    public Person()
    {
        Console.WriteLine("Constructor is executing");
    }

    //adding a 2nd Constructor with 2 arguments.
    public Person(string name, int age)
    {
        this.Name = name;
        this.Age = age;
        Console.WriteLine();
    }


    //adding a normal Method, so need to add a return type.
    public void Speak()
    {
        Console.WriteLine($"Hello I am {Name}, {Age}");
    }

    
}`}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
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

const Constructor = convertMapToObject(CreateNewProject);
export default Constructor;
