import { useState, useEffect } from "react";
import "./../../../mainScss/variables.scss";
import "./../../../mainScss/mixins.scss";
import CardSingleStructure from "./../CardSingleStructure.tsx";
import SearchBar from "./search_components/SearchBar.tsx";

export default function CardGroupSearch(props) {
  const content = [...props.list];
  const [results, setResults] = useState("none");
  let search = results;

  let [countCards, setCountCards] = useState(0);
  let ifSetCountCards = countCards < 6 ? true : false;

  return (
    <>
      <div className="cardGroup">
        <SearchBar setResults={setResults} />

        <div
          className="contentGroup"
          style={{
            color: "#002D62",
            gridTemplateColumns: ifSetCountCards
              ? "repeat(5, auto)"
              : "repeat(100, auto)",
          }}
        >
          {/* *** Loop through List of Notes *** */}
          {content.map((item, index) => {
            let str = item.title;
            let strToLower = str.toLowerCase().includes(search.toLowerCase());

            if (strToLower) {
              setCountCards = countCards++;

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
              // console.log("item not founded.");
            }
          })}

          {/* *** END of Notes *** */}
        </div>
      </div>
    </>
  );
}
