//Logo
import logo from "./../../../src/assets/logo_CSharp.png";

//Contents
import Tips from "./Contents/Tips/Tips.tsx";
import ConsoleInteractions from "./Contents/ConsoleInteractions/ConsoleInteraction.tsx";
import StringInterpolation from "./Contents/StringInterpolation/StringInterpolation.tsx";
import Variables from "./Contents/Variables/Variables.tsx";
import IfElse from "./Contents/IfElse/IfElse.tsx";
import SwitchCase from "./Contents/SwitchCase/SwitchCase.tsx";
import ForLoops from "./Contents/ForLoops/ForLoops.tsx";
import ClassInteraction from "./Contents/ClassInteraction/ClassInteraction.tsx";
import Arrays from "./Contents/Arrays/Arrays.tsx";
import UsefulMethods from "./Contents/UsefulMethods/UsefulMethods.tsx";
import Snippets from "./Contents/Snnipets/Snippets.tsx";
import Constructor from "./Contents/Constructor/Constructor.tsx";

const content: any = [];

export default content;

content.push(
  Tips,
  Snippets,
  UsefulMethods,
  ConsoleInteractions,
  StringInterpolation,
  Variables,
  IfElse,
  SwitchCase,
  ForLoops,
  Arrays,
  ClassInteraction,
  Constructor
);

content.forEach((item: any) => {
  item.logo = logo;
});
