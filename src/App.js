import React, { useState } from "react";

import TextCounter from "./components/TextCounter/TextCounter";
import Heading from "./components/HeaderFooter/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import MinuteCounter from "./components/TextCounter/MinuteCounter";
import Footer from "./components/HeaderFooter/Footer";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const changeInputTextHandler = function (event) {
    setInputText(event.target.value);
  };

  return (
    <>
      <Heading />
      <div className="wrapper">
        <TextCounter inputText={inputText} />
        <Paragraph
          inputText={inputText}
          changeInputTextHandler={changeInputTextHandler}
        />
        <MinuteCounter inputText={inputText} />
      </div>
      <Footer />
    </>
  );
}

export default App;
