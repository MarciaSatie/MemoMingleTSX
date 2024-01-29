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
import Operators from "./Contents/Operators/Operators.tsx";
import Methods from "./Contents/Methods/Methods.tsx";
import DateTime_Class from "./Contents/DateTime_Class/DateTime_Class.tsx";
import Incrementing from "./Contents/Incrementing/Incrementing.tsx";
import Out from "./Contents/Out/Out.tsx";

const content: any = [];

export default content;

content.push(
  Tips,
  Snippets,
  Operators,
  UsefulMethods,
  ConsoleInteractions,
  StringInterpolation,
  Variables,
  IfElse,
  SwitchCase,
  Methods,
  ForLoops,
  Arrays,
  Out,
  ClassInteraction,
  Constructor,
  Incrementing,
  DateTime_Class
  //ShortCircuiting
);

content.forEach((item: any) => {
  item.logo = logo;
});
