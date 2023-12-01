//Parent App.tsx
//This file will structure the Group of cards and apply the information from App.tsx for: Title / Icon /Icon URL
//

import "./CardsGroup.scss";
import CardSingleStructure from "./CardSingleStructure.tsx";
import Btn from "./../Btn/Btn.tsx";

export default function CardsGroup(props) {
  const content = [...props.list];

  const openNewWindow = () => {
    const newWindow = window.open("", "", "width=600,height=400");
    newWindow.document.title = "Let's add a new Memo";

    newWindow.document.write(`
    Work in progress
  `);
    newWindow.document.close();
  };

  return (
    <>
      <div className="cardGroup">
        {/* *** Group Title (Icon/ Icon URL / Title) *** */}
        <div className="cardTitle">
          <a href={props.iconUrl} target="_blank">
            <img src={props.icon} />
          </a>
          <h2>{props.noteTitle}</h2>
        </div>

        {/* *** Button *** */}
        <Btn name="Add New Memo" action={openNewWindow} />

        {/* *** Notes Content *** */}
        <div className="contentGroup">
          {/* *** Loop through List of Notes *** */}
          {content.map((item, index) => (
            <div className="content1">
              <CardSingleStructure
                key={index}
                title={item.title}
                text={item.text}
                date={item.date}
              />
            </div>
          ))}

          {/* *** END of Notes *** */}
        </div>
      </div>
    </>
  );
}
