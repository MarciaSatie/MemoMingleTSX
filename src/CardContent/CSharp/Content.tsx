//Logo
import logo from "./../../../src/assets/logo_CSharp.png";

//Contents
import Tips from "./Contents/Tips/Tips.tsx";
import ConsoleInteractions from "./Contents/Consoleinteractions/ConsoleInteraction.tsx";
import StringInterpolation from "./Contents/StringInterpolation/StringInterpolation.tsx";
import Variables from "./Contents/Variables/Variables.tsx";
import IfElse from "./Contents/IfElse/IfElse.tsx";

const content: any = [];

export default content;

content.push(Tips, ConsoleInteractions, StringInterpolation, Variables, IfElse);

content.forEach((item: any) => {
  item.logo = logo;
});
