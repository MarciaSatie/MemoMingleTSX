//Logo
import logo from "./../../../src/assets/react.svg";
//Contents:

import CreateNewProject from "./Content/CreateNewProject/CreateNewProject.tsx";
import NPM from "./Content/NPM/NPM.tsx";
import Terminal from "./Content/Terminal/Terminal.tsx";
import Tips_WriteMemos from "./Content/Tips_WriteMemos/Tips_WriteMemos.tsx";
import VSCode_Snippets from "./Content/VSCode_Snippets/VSCode_Snippets.tsx";

const content = [];

export default content;

content.push(CreateNewProject, Tips_WriteMemos, NPM, Terminal, VSCode_Snippets);

content.forEach((item) => {
  item.logo = logo;
});
