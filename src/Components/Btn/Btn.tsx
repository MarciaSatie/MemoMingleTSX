import "./Btn.scss";

function Btn(props) {
  return (
    <>
      <button className="button-52" onClick={props.action}>
        {props.name}
      </button>
    </>
  );
}

export default Btn;
