import React, { useState } from "react";
import "./../../../mainScss/variables.scss";
import "./../../../mainScss/mixins.scss";
import CardSingleStructure from "./../CardSingleStructure.tsx";
import SearchBar from "./search_components/SearchBar.tsx";

export default function CardGroupSearch(props) {
  const content = [...props.list];
  const [results, setResults] = useState("none");
  let search = results;

  return (
    <>
      <div className="cardGroup">
        <SearchBar setResults={setResults} />
        {/* *** Notes Content *** */}
        <div className="contentGroup">
          {/* *** Loop through List of Notes *** */}
          {content.map((item, index) => {
            let str = item.title;
            let strToLower = str.toLowerCase().includes(search.toLowerCase());
            console.log(strToLower);

            if (strToLower) {
              console.log("match founded.");
              return (
                <div className="content1">
                  <CardSingleStructure
                    key={index}
                    logo={item.logo}
                    title={item.title}
                    text={item.text}
                    date={item.date}
                  />
                </div>
              );
            } else {
              console.log("item not founded.");
            }
          })}

          {/* *** END of Notes *** */}
        </div>
      </div>
    </>
  );
}
