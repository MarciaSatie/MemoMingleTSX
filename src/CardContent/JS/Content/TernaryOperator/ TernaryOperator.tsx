import "./../../../cardContent.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { CompletionContext } from "@codemirror/autocomplete";
import { useState } from "react";

const r1Title = "Ternary Operators";
const r1Date = createDate("2023-11-05");
const r1Text = TextContent();

function TextContent() {
  return (
    <>
      <div>
        <strong className="attention">
          (condition) ? expressionIfTrue : expressionIfFalse;
        </strong>
        <ol>
          <li>Condition: An expression that evaluates to true or false.</li>
          <li>
            expressionIfTrue: An expression that is executed if the condition is
            true.
          </li>
          <li>
            expressionIfFalse: An expression that is executed if the condition
            is false.
          </li>
        </ol>
      </div>
      <CodeMirror
        value={`let age = 19;
let isAdult = (age >=18)?'Yes' : 'No';
console.log(isAdult); //Yes`}
        height="80px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />

      <p>
        Ternary Operator is
        <strong> if-else statement in a single line of code.</strong> It's
        called the "ternary" operator because it takes three operands: a
        condition, a result for true, and a result for false.
      </p>
    </>
  );
}

//Function to format Date
function createDate(dateImput) {
  const x = new Date(dateImput);
  const currentDate: string = x.toISOString();

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

function convertMapToObject(map: any) {
  const object = {};
  for (let [key, value] of map.entries()) {
    object[key] = value;
  }
  return object;
}

const TernaryOperator = convertMapToObject(CreateNewProject);
export default TernaryOperator;
