import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { languages } from "@codemirror/language-data";
import { useState } from "react";

function App() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <>
      <CodeMirror
        value={value}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      <CodeMirror
        value={`console.log("works");`}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </>
  );
}
export default App;
