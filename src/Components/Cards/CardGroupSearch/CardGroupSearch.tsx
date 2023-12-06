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

  useEffect(() => {
    // Update countCards after the initial render
    setCountCards(
      content.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ).length
    );
  }, [content, search]); // Depend on content and search to re-run the effect when they change

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
              return null;
            }
          })}

          {/* *** END of Notes *** */}
        </div>
      </div>
    </>
  );
}
