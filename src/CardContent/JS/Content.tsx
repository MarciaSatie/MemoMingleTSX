//Logo
import logo from "./../../../src/assets/js.png";

//Contents
import TernaryOperator from "./Content/ TernaryOperator.tsx";
// import DestructuringArrays from "./Contents/DestructuringArrays.jsx";
// import StringInterpolation from "./Contents/StringInterpolation.jsx";
// import Arrays from "./Contents/Arrays.jsx";
// import Regex from "./Contents/Regex.jsx";
// import Function from "./Contents/Function.jsx";

const content = [];

export default content;

content.push(
  TernaryOperator
  // Arrays,
  // DestructuringArrays,
  // StringInterpolation,
  // Regex,
  // Function
);

content.forEach((item) => {
  item.logo = logo;
});
