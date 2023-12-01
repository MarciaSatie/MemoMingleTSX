//Parent CardsGroup.jsx

//This file will structure the order of information at each card

import "./CardSingleStructure.scss";
import Modal from "react-modal";
import { useState } from "react";

export default function CardSingleStructure(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <>
          <img src={props.logo} style={{ width: "35px" }} />
          <h2 className="title">{props.title}</h2>
          {/* Date */}
          <div>
            <h5>{props.date}</h5>
          </div>

          {/* Text information */}
          <div>{props.text}</div>
        </>
      </Modal>

      {/* Card */}
      <div className="contentCard">
        {/* Title */}
        <div onClick={() => setIsOpen(true)}>
          <img src={props.logo} style={{ width: "20%" }} />
          <div className="contentTitle">
            <h3 className="title">{props.title}</h3>
          </div>
        </div>

        {/* Date */}
        <div>
          <h5>{props.date}</h5>
        </div>

        {/* Text information */}
        <div>{props.text}</div>
      </div>
    </>
  );
}
