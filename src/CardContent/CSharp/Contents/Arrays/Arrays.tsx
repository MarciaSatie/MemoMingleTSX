//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Arrays_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Arrays to content array at Content.jsx

// Command+F replace Arrays for the name of the file (the name will be used at Content.jsx)

//export Arrays
const r1Title = "Lists and Arrays"; //Replace Title
const r1Date = createDate("2023-12-04"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      <details>
        <summary>
          <strong>Lists X Arrays</strong>
        </summary>
        <h5>Dynamic vs. Fixed Size:</h5>
        <ul>
          <li>
            <strong className="attention">{`List<string>`}</strong> is dynamic,
            allowing you to resize it dynamically by adding or removing
            elements.
          </li>
          <li>
            <strong className="attention">Arrays</strong> have a fixed size, and
            once created, you cannot change the size. You need to specify the
            size during initialization.
          </li>
        </ul>
      </details>

      <details>
        <summary>
          Declaring <strong>List</strong> with
          <strong className="attention">{` new List <type> `}</strong>{" "}
        </summary>
        <div className="codeStyle">
          <pre>
            <code>
              {`var variableName = new List <type> {"smt1","smt2","smt3}`};
            </code>
          </pre>
        </div>
        <CodeMirror
          value={`var name = new List<string> {"Aline","Carl","Brian"};

foreach (string i in name)
{
    Console.WriteLine(i);
}// Aline Carl Brian;
          `}
          //
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <p>
          <ul>
            <li>{`This declares a variable named names and initializes it with a new instance of the List<string> class.`}</li>
            <br></br>
            <li>
              {`List<string> is a dynamic, resizable collection that allows you to add, remove, and manipulate elements. It is part of the System.Collections.Generic namespace.`}
              <br></br>
              <strong>
                {" "}
                type [] variableName = {`{("smt1", "smt2")}`}
              </strong>{" "}
              decalration, that has a fixed size once they are created.
            </li>
            <br></br>
            <li>
              You can use methods like <strong>Add, Remove, </strong>and others
              to modify the collection dynamically
            </li>
          </ul>
        </p>
      </details>
      <details>
        <summary>
          Declaring <strong>Array</strong> with{" "}
          <strong className="attention">
            type [] variableName = new type [slotsNumber]
          </strong>
        </summary>
        <div className="codeStyle">
          <pre>
            <code>{`type [] variableName = new type [slotsNumber];`}</code>
          </pre>
        </div>
        <CodeMirror
          value={`string[] names = { "Alice", "Bob", "William" }//specifying the size of the array during initialization

foreach (string i in names)
{
    Console.WriteLine(i);
}// Alice Bob William
          `}
          //
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />

        <ul>
          <li>
            Arrays in C# have a fixed size once they are created. You need to
            specify the size of the array during initialization, and you cannot
            change it afterward.
          </li>
          <li>Arrays provide direct access to elements by index.</li>
        </ul>
      </details>

      {/* //////////List Methods//////////// */}
      <h3>List Methods</h3>
      <details>
        <summary>list[index]</summary>
        <CodeMirror
          value={`var names = new List<string> {"Aline","Carl","Brian"};

Console.WriteLine(names[0]);//Return first position Aline
Console.WriteLine(names[^1]);//Return last position; Brian
Console.WriteLine(names[^2]);//Return 2nd last position Carl`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>{`foreach(var item in array){code}`}</summary>
        <p>Loop throgh and Array / List </p>
        <CodeMirror
          value={`int[] array = { 1, 2, 3 };
List<int> list = new List<int> { 4, 5, 6 };

foreach (var item in array)
{
  Console.WriteLine (item);
  // 1 2 3 
}

foreach (var item in list)
{
  Console.WriteLine (item);
  // 4 5 6 
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>list.Add(toBeAdded)</summary>

        <ul>
          <li>Add new elements to the list</li>
          <li>expects a single argument </li>
        </ul>
        <CodeMirror
          value={`var myList = new List<int>();
myList.Add(2); 
myList.Add(15);
myList.Add(36);

foreach(int item in myList) 
{
   Console.WriteLine(item);
} // 2 15 36
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>list.Insert(index,toBeAdded)</summary>

        <ul>
          <li>Add new elements to the list at specified index</li>
          <li>
            expects 2 argument, first - index, second the element to be added{" "}
          </li>
        </ul>
        <CodeMirror
          value={`var names = new List<string> {"Aline","Carl","Brian"};
names.Insert(2, "Doug");//Aline Carl Doug Brian}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>list.Remove(toBeRemoved)</summary>
        <ul>
          <li>Remove the element inside of (), from the list</li>
          <li>expects a single argument </li>
        </ul>
        <CodeMirror
          value={`var  myList = new List<string> { "Alice", "Bob", "William" };
myList.Remove("Bob");

foreach (var item in myList)
{
    Console.WriteLine(item);//Alice William   
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>list.RemoveAt(index)</summary>
        <ul>
          <li>Removes the item at the specified index</li>
          <li>expects a single argument </li>
        </ul>
        <CodeMirror
          value={`var  myList = new List<string> { "Alice", "Bob", "William" };
myList.RemoveAt(0);

foreach (var item in myList)
{
    Console.WriteLine(item);//Bob William   
}`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>list.Sort():</summary>
        <ul>
          <li>Sorts the elements in the entire list.</li>
          <br></br>

          <li>
            <details>
              <summary>
                if the List is <strong>IComparable</strong>
              </summary>
              <ul>
                <li>
                  Sort <strong>()</strong> method is available for lists that
                  contain elements that implement the{" "}
                  <strong>IComparable</strong> interface.
                  <br></br>
                  <br></br>
                  If the elements in your list are of a basic data type (e.g.,
                  int, string, etc.), or they are custom types that implement
                  the IComparable interface, you can use the Sort() method
                  without providing any additional arguments.
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>
                If List don't implement<strong> IComparable</strong>
              </summary>
              <p></p>
              If your list contains custom objects, and those objects don't
              implement <strong>IComparable</strong>, or you want to customize
              the sorting behavior, you can use an overload of the{" "}
              <strong>Sort()</strong> method that takes a{" "}
              <strong>Comparison</strong> delegate. This delegate allows you to
              specify a custom comparison logic.
            </details>
          </li>
        </ul>

        <CodeMirror
          value={`public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

List<Person> people = new List<Person>
{
    new Person { Name = "Alice", Age = 30 },
    new Person { Name = "Bob", Age = 25 },
    new Person { Name = "Charlie", Age = 35 }
};

people.Sort((p1, p2) => p1.Age.CompareTo(p2.Age));

foreach (Person person in people)
{
    Console.WriteLine($"{person.Name}, {person.Age} years old");
}
// Output:
// Bob, 25 years old
// Alice, 30 years old
// Charlie, 35 years old
`}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
      </details>

      <details>
        <summary>list.Count</summary>
        <ul>
          <li>
            Gets the number of elements contained in the list.(it is like
            Array.Length)
          </li>
          <li>Doesn't expect any argument, so you won't add () after Count</li>
        </ul>
        <CodeMirror
          value={`var names = new List<string> {"Doung","Aline","Marie","Carl","Brian"};
Console.WriteLine(names.Count);//5 `}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
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
