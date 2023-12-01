import logo2 from "./../../assets/logo2.png";
import "./Header.scss";
import { createPortal } from "react-dom";

const headerTitle = "Welcome to My MemoMingle";

export default function Header() {
  return createPortal(
    <div className="headerT">
      <div>
        <img className="logo" src={logo2} />
      </div>
      <h1 className="hTitle">{headerTitle}</h1>
    </div>,
    document.getElementById("header")
  );
}
