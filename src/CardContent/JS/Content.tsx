//Logo
import logo from "./../../../src/assets/js.png";

//Contents
import TernaryOperator from "./Content/TernaryOperator/ TernaryOperator.tsx";
import Arrays from "./Content/Arrays/Arrays.tsx";
import UsefulMethods from "./Content/Useful Methods/UsefulMethods.tsx";

const content = [];

export default content;

content.push(UsefulMethods, TernaryOperator, Arrays);

content.forEach((item) => {
  item.logo = logo;
});
