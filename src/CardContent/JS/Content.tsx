//Logo
import logo from "./../../../src/assets/js.png";

//Contents
import TernaryOperator from "./Content/TernaryOperator/ TernaryOperator.tsx";
import Arrays from "./Content/Arrays/Arrays.tsx";
import UsefulMethods from "./Content/Useful Methods/UsefulMethods.tsx";
import Functions from "./Content/Functions/Function.tsx";
import OOP from "./Content/OOP/OOP.tsx";

const content = [];

export default content;

content.push(UsefulMethods, TernaryOperator, Arrays, Functions, OOP);

content.forEach((item) => {
  item.logo = logo;
});
