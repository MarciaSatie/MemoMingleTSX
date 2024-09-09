import Header from "./Components/Header/Header.tsx";
import CardsGroup from "./Components/Cards/CardsGroup.tsx";
import CardGroupSearch from "./Components/Cards/CardGroupSearch/CardGroupSearch.tsx";

// logo's groups
import reactLogo from "./assets/react.svg";
import jsLogo from "./assets/js.png";
import cSharpLogo from "./assets/logo_CSharp.png";

//  Card's Content
import Content from "./CardContent/React/Content.jsx";
import ContentJS from "./CardContent/JS/Content.tsx";
import ContentCSharp from "./CardContent/CSharp/Content.jsx";

function App() {
  let listAll = [...Content, ...ContentJS, ...ContentCSharp];

  return (
    <>
      <h1 className="text-3xl text-red-600 font-bold underline">
      Hello world!
      </h1>
      <Header />

      <CardGroupSearch list={listAll} />
      {/* *** C# Notes *** */}
      <CardsGroup
        iconUrl="https://learn.microsoft.com/en-us/dotnet/csharp/"
        icon={cSharpLogo}
        noteTitle="C# Memos"
        list={ContentCSharp}
      />
      {/* *** React Notes *** */}
      <CardsGroup
        iconUrl="https://react.dev"
        icon={reactLogo}
        noteTitle="React Memos"
        list={Content}
      />

      {/* Javascript */}
      <CardsGroup
        iconUrl="https://www.javascript.com/"
        icon={jsLogo}
        noteTitle="Javascript Memos"
        list={ContentJS}
      />
    </>
  );
}
export default App;
