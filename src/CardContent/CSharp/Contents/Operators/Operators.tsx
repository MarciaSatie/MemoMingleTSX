//Parent Content.jsx
import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

//import img1 from "./Operators_assets/img1.png";
//<img src={img1}></img>

//Remember to add the  Operators to content array at Content.jsx

// Command+F replace Operators for the name of the file (the name will be used at Content.jsx)

//export Operators
const r1Title = "Operators"; //Replace Title
const r1Date = createDate("2024-01-05"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  return (
    <>
      {/* Add the New Content Bellow */}
      <CodeMirror
        value={`// Get numeric input from the user
Console.Write("Enter the first number: ");
int num1 = int.Parse(Console.ReadLine());

Console.Write("Enter the second number: ");
int num2 = int.Parse(Console.ReadLine());

// Relational operators.

//Suppose num1 6 and num2  5; 
Console.WriteLine($"Relational Operators:");

Console.WriteLine($"Equal {num1} == {num2}: {num1 == num2}");// False
Console.WriteLine($"Not Equal {num1} != {num2}: {num1 != num2}");//True
Console.WriteLine($"Less than {num1} < {num2}: {num1 < num2}");//False
Console.WriteLine($"Greater than {num1} > {num2}: {num1 > num2}");//True
Console.WriteLine($"Less than/equal {num1} <= {num2}: {num1 <= num2}");//False
Console.WriteLine($"Greater than/equal {num1} >= {num2}: {num1 >= num2}");//True
Console.WriteLine($"{num1} * {num2}: {num1 * num2}");//30
Console.WriteLine($"{num1} % {num2}: {num1 % num2 ==0}");//False

Console.WriteLine("");

//Boolean operators
Console.WriteLine($"\nBoolean Operators:");
Console.WriteLine($"{num1} < 10 && {num2}>5: {(num1 <10) &&(num2 <5)}");//False
Console.WriteLine($"({num1} % 2 == 0) || ({num2} % 2 == 0): {(num1 % 2 == 0) || (num2 % 2 == 0)}");//True
Console.WriteLine($"!({num1} == {num2}): {!(num1 == num2)}");// The '!' (not) operator will reverse the boolean result.`}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />

      {/* Detail template */}

      <details>
        <summary> % Modulus Formula (Remainder)</summary>
        <h3>a mod b = a - b * (a.b)</h3>
        <p>
          Keep in mind that if you're dealing with * integer division, the
          division operator / in C# between two integers * will automatically
          perform integer division and round down.
        </p>
        <ul>
          <li>
            <details>
              <summary>Explanation</summary>
              <p>
                The modulus operation, denoted by the symbol "%," calculates the
                remainder when one number is divided by another. In the case of
                1 mod 13 (for example), we are finding the remainder when 1 is
                divided by 13.
              </p>
              <p>Here's the step-by-step applying the formula:</p>
              <ul>
                <li>1 - 13 * (1/13) // 1/13 rounded down = 0 </li>
                <li>1- 13 *0</li>
                <li>1-0 // result is 1, so the remainder is 1.</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Card Deck Exemple</summary>
              <CodeMirror
                value={`
string [] cardValue = { "Ace", "Deuce", "Three", "Four", "Five", "Six",
          "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"};
string[] suits = { "Hearts","Diamonds","Clubs","Spade"};




CreateDeck(cardValue, suits);

static void CreateDeck(string[] card, string[] suits)
{
    string[] newDeck = new string [52];

    for (int i = 0; i < newDeck.Length; i++)
    {
        newDeck[i] = card[i % 13] + " " + suits[i / 13];
        Console.WriteLine($"{newDeck[i]}; {i % 13} and {i / 13} ");
        /*% will return the remainder (reminder of 1 % 13 = 1)
          * Mod (modulus) Formula:
          * a mod b = a -b * (a.b)//Keep in mind that if you're dealing with 
          * integer division, the division operator / in C# between two integers 
          * will automatically perform integer division and round down.
          * */

        /* i/13 will return the result rounded down, so:
          * from 1 until 12 will return 0,Hearts. 
          * from 13 until 25 will return 1, Diamonds.
          * from 26 until 38 will return 2, Clubs.
          * from 39 until 52 will return 3,Spade.
          */
    }


};`}
                height="50%"
                theme="dark"
                extensions={[javascript({ jsx: true })]}
                // onChange={onChange}
              />

              <ul>
                <li>
                  <details>
                    <summary>Card Deck code Output:</summary>
                    <CodeMirror
                      value={`
/*Output from Console.WriteLine($"{newDeck[i]}; i = {i}, i % 13 = {i % 13} and i /13 = {i / 13} ");:
Ace Hearts; i = 0, i % 13 = 0 and i /13 = 0
Deuce Hearts; i = 1, i % 13 = 1 and i /13 = 0
Three Hearts; i = 2, i % 13 = 2 and i /13 = 0
Four Hearts; i = 3, i % 13 = 3 and i /13 = 0
Five Hearts; i = 4, i % 13 = 4 and i /13 = 0
Six Hearts; i = 5, i % 13 = 5 and i /13 = 0
Seven Hearts; i = 6, i % 13 = 6 and i /13 = 0
Eight Hearts; i = 7, i % 13 = 7 and i /13 = 0
Nine Hearts; i = 8, i % 13 = 8 and i /13 = 0
Ten Hearts; i = 9, i % 13 = 9 and i /13 = 0
Jack Hearts; i = 10, i % 13 = 10 and i /13 = 0
Queen Hearts; i = 11, i % 13 = 11 and i /13 = 0
King Hearts; i = 12, i % 13 = 12 and i /13 = 0
Ace Diamonds; i = 13, i % 13 = 0 and i /13 = 1
Deuce Diamonds; i = 14, i % 13 = 1 and i /13 = 1
Three Diamonds; i = 15, i % 13 = 2 and i /13 = 1
Four Diamonds; i = 16, i % 13 = 3 and i /13 = 1
Five Diamonds; i = 17, i % 13 = 4 and i /13 = 1
Six Diamonds; i = 18, i % 13 = 5 and i /13 = 1
Seven Diamonds; i = 19, i % 13 = 6 and i /13 = 1
Eight Diamonds; i = 20, i % 13 = 7 and i /13 = 1
Nine Diamonds; i = 21, i % 13 = 8 and i /13 = 1
Ten Diamonds; i = 22, i % 13 = 9 and i /13 = 1
Jack Diamonds; i = 23, i % 13 = 10 and i /13 = 1
Queen Diamonds; i = 24, i % 13 = 11 and i /13 = 1
King Diamonds; i = 25, i % 13 = 12 and i /13 = 1
Ace Clubs; i = 26, i % 13 = 0 and i /13 = 2
Deuce Clubs; i = 27, i % 13 = 1 and i /13 = 2
Three Clubs; i = 28, i % 13 = 2 and i /13 = 2
Four Clubs; i = 29, i % 13 = 3 and i /13 = 2
Five Clubs; i = 30, i % 13 = 4 and i /13 = 2
Six Clubs; i = 31, i % 13 = 5 and i /13 = 2
Seven Clubs; i = 32, i % 13 = 6 and i /13 = 2
Eight Clubs; i = 33, i % 13 = 7 and i /13 = 2
Nine Clubs; i = 34, i % 13 = 8 and i /13 = 2
Ten Clubs; i = 35, i % 13 = 9 and i /13 = 2
Jack Clubs; i = 36, i % 13 = 10 and i /13 = 2
Queen Clubs; i = 37, i % 13 = 11 and i /13 = 2
King Clubs; i = 38, i % 13 = 12 and i /13 = 2
Ace Spade; i = 39, i % 13 = 0 and i /13 = 3
Deuce Spade; i = 40, i % 13 = 1 and i /13 = 3
Three Spade; i = 41, i % 13 = 2 and i /13 = 3
Four Spade; i = 42, i % 13 = 3 and i /13 = 3
Five Spade; i = 43, i % 13 = 4 and i /13 = 3
Six Spade; i = 44, i % 13 = 5 and i /13 = 3
Seven Spade; i = 45, i % 13 = 6 and i /13 = 3
Eight Spade; i = 46, i % 13 = 7 and i /13 = 3
Nine Spade; i = 47, i % 13 = 8 and i /13 = 3
Ten Spade; i = 48, i % 13 = 9 and i /13 = 3
Jack Spade; i = 49, i % 13 = 10 and i /13 = 3
Queen Spade; i = 50, i % 13 = 11 and i /13 = 3
King Spade; i = 51, i % 13 = 12 and i /13 = 3
      */`}
                      height="50%"
                      theme="dark"
                      extensions={[javascript({ jsx: true })]}
                      // onChange={onChange}
                    />
                  </details>
                </li>
              </ul>
            </details>
          </li>
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

const Operators = convertMapToObject(CreateNewProject);
export default Operators;
