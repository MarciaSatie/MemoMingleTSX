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
const r1Title = "Classes"; //Replace Title
const r1Date = createDate("2023-12-02"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      <h2>Class Overview</h2>
      <details>
        <summary>Class Declaration</summary>
        <ol>
          <li>
            <strong>Class Declaration:public class Person</strong> statement
            declares a class named <strong>Person</strong>. The{" "}
            <strong>public</strong> keyword indicates that the class is
            accessible from other classes.
          </li>
          <br></br>
          <li>
            <strong>Fields or Attributes:</strong>These are variables that store
            data related to the class. In the example,
            <strong>Name, BirthYear</strong> are a private variables field.
          </li>
          <br></br>
          <li>
            <strong>Properties: </strong>provide a way to access and modify the
            values of private fields. They allow you to encapsulate the internal
            state of the class. Properties are declared using a get and/or set
            accessor. Example: <strong>Address</strong>.
          </li>
          <br></br>
          <li>
            <strong>Constructor(s): </strong> Constructors are special methods
            called when an object of the class is created. They initialize the
            object's state. In the example, <strong>public Person()</strong> is
            a default constructor that sets the initial value of myField to 0.
          </li>
          <br></br>
          <li>
            <strong>Methods or Functions: </strong> These are functions that
            perform actions or provide functionality related to the class. In
            the example, <strong>Age</strong>is a public method that prints a
            message to the console.
            <br></br>
            Different from Properties, when you call a Method you need to add ()
            to the end, example: object1.Age().
          </li>
        </ol>

        <CodeMirror
          value={`//1. Declaring a Class
public class Person
{
      //2.Filds
      public string Name; // Can be accessed outside of Class
      public int BirthYear; // Can be accessed outside of Class
      private int SecurityNumber = 431561;// Can be accessed just inside of Class.
       

      // 3.Properties
      public string Address { get; set; } //Auto Property

      // 4.Constructor
      public Person(string name, int birthYear)
      {
          Name = name;
          BirthYear = birthYear;
      }

      //5. Methods
      public int Age()
      {
          int age = 2024 - this.BirthYear;
          return age;
      }
  }`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <p>Creating a New Object from Class: </p>
        <CodeMirror
          value={`namespace MyClass;

class Program
{
    static void Main()//initialize the program.
    {
        //creating new object from class Person
        var anne = new Person("Anne", 1995);
        anne.Address = "Fun Street number 6";//

        //Name and BirthYear are Properties, so you don't need to add () to call them.
        Console.WriteLine($"{anne.Name} was born in {anne.BirthYear}");//Anne was born in 1995 
        //Same for Address

        Console.WriteLine($"Address: {anne.Address}");//Address: Fun Street number 6
        //Age is a Method so you need to add () to call it.
        Console.WriteLine($"{anne.Name} is {anne.Age()}");//Anne is 29;
    }
}

`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>
      {/* End of Class Declaration */}
      <details>
        <summary>Access Modifiers:</summary>
        <ul>
          <li>
            <strong>Public (public):</strong>
            <ul>
              <li>
                Members marked as <strong>public</strong> are accessible from
                any part of the program, both within the same assembly and from
                other assemblies.
              </li>
              <li>
                his is the most permissive access level, and it is often used
                for members that need to be accessible from outside the defining
                class or assembly.
              </li>
            </ul>
          </li>
          <li>
            <strong>Private (private):</strong>
            <ul>
              <li>
                Members marked as <strong>private</strong> are accessible only
                within the same class or struct.
              </li>
              <li>
                Private members are not visible to other classes or code outside
                the current class.
              </li>
            </ul>

            <CodeMirror
              value={`public class Example
{
    private int privateField;
    private void PrivateMethod() { /* ... */ }
}
              
`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
          </li>
        </ul>
      </details>
      {/* End of Acces Modifiers */}

      <details>
        <summary>Static</summary>
        <ul>
          <li>
            <strong>Static Methods:</strong>
            <ul>
              <li>
                A static method is associated with the class rather than an
                instance. It can be called on the class itself without creating
                an instance.
              </li>
              <li>
                Static methods cannot access instance members directly
                (non-static members) unless they operate on a specific instance
                passed as a parameter.
              </li>
            </ul>
            <CodeMirror
              value={`public class Example
{
    public static void StaticMethod()
    {
        // Do something
    }
}
`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
          </li>
          <li>
            <strong>Static Fields:</strong>
            <ul>
              <li>
                A static field is a variable that belongs to the class itself,
                not to instances of the class. There is only one copy of a
                static field regardless of how many instances of the class are
                created.
              </li>
              <li>
                Static fields are initialized only once, typically when the
                class is loaded.
              </li>
            </ul>
            <CodeMirror
              value={`public class Example
{
    public static int StaticField;
}
`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
          </li>
          <li>
            <strong>Static Properties:</strong>
            <ul>
              <li>
                Similar to static methods, static properties are associated with
                the class, not instances. They can be accessed without creating
                an instance of the class.
              </li>
            </ul>
            <CodeMirror
              value={`public class Example
{
    private static int staticValue;

    public static int StaticProperty
    {
        get { return staticValue; }
        set { staticValue = value; }
    }
}
`}
              height="50%"
              theme="dark"
              extensions={[javascript({ jsx: true })]}
              // onChange={onChange}
            />
          </li>
        </ul>
        <ul>
          <li>
            <strong>Static Classes:</strong>
            <ul>
              <li>
                A static class is a class that cannot be instantiated, and all
                its members must be static.
              </li>
              <li>
                Static classes are commonly used for utility classes where you
                group related methods together without the need for instances.
              </li>
            </ul>
          </li>
          <CodeMirror
            value={`public static class MathUtility
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}
`}
            height="50%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            // onChange={onChange}
          />
        </ul>
        <ul>
          <li>
            <strong>Static Constructors:</strong>
            <ul>
              <li>
                A static constructor is called automatically before any static
                members are accessed or any static methods are called.
              </li>
              <li>
                It is used to initialize the class itself (not instances). A
                class can have only one static constructor.
              </li>
            </ul>
          </li>
          <CodeMirror
            value={`public class Example
{
    static Example()
    {
        // Initialization code for the class
    }
}
            `}
            height="50%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            // onChange={onChange}
          />
        </ul>
      </details>

      <details>
        <summary>Inheritance:</summary>
        <p>
          C# supports inheritance, allowing you to create a new class based on
          an existing one. The new class (derived or child class) inherits the
          members of the existing class (base or parent class).
        </p>
        <CodeMirror
          value={`public class Student : Person
{
    public int StudentId { get; set; }
}
`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <h2>Classes Interactions:</h2>
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
