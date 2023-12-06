//Parent Content.jsx
import "./../../../cardContent.scss";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import img1 from "./UseEffect_assets/img1.jpeg";
//<img src={img1}></img>

//Remember to add the  UseEffect to content array at Content.jsx

// Command+F replace UseEffect for the name of the file (the name will be used at Content.jsx)

//export UseEffect
const r1Title = "UseEffect"; //Replace Title
const r1Date = createDate("2023-12-05"); //Replace 2023-09-25 for the current date
const r1Text = TextContent(); // Change the information inside of TextContent Function

function TextContent() {
  const codeSource = `import {useEffect, useState} from 'react';

  export default sunction Demo{
    const [count,setCount] = useState(0);
  
    //it is guarantee that the useEffect will run at least once.
    useEffect(()=>{
      //The coide that we want to run
      console.log('The count is: ', count);

      //Optional return function
      return ()=>{
        /*this cleanup funciton example will run all the time the dependency is trigged, 
        destroying the previous content. This is embeded to useEffect, 
        even without declare it here.*/
        console.log("I've been cleaned up!")
      }

    },[count]);// the dependency array, even without any value, useEffect will run unmount.
  }
  
  return (
    <div> 
      <h1> Count: {count}</h1>
      <button onClick ={()=> setCount(count+1)}>Increment
    </div>
  );`;

  return (
    <>
      {/* Add the New Content Bellow */}
      <CodeMirror
        value={`import {useEffect} from 'react';
useEffect(()=> {code},[dependecy]);`}
        height="50%"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        // onChange={onChange}
      />
      <ul>
        <li>
          <strong>code</strong> The code that we want to run.
          <ul>
            <li>
              <strong>
                return <span className="attention">function</span>{" "}
              </strong>
              , it is optional.
            </li>
          </ul>
        </li>
        <li>
          <strong>dependency</strong> The dependency Array, will be added at
          this array, the elements that triggers the changes.
        </li>
      </ul>

      <details>
        <summary>Example</summary>
        <CodeMirror
          value={codeSource}
          height="50%"
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          // onChange={onChange}
        />
        <br></br>
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

const UseEffect = convertMapToObject(CreateNewProject);
export default UseEffect;
