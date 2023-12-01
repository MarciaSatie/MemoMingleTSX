//Logo
import logo from "./../../../src/assets/react.svg";
//Contents:

import NPM from "./Content/NPM/NPM.tsx";

const content = [];

export default content;

content.push(NPM);

content.forEach((item) => {
  item.logo = logo;
});
