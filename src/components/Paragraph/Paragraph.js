import React, { useRef, useEffect } from "react";

import Card from "../UI/Card";

import "./Paragraph.css";

const Paragraph = function (props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Card>
      <textarea
        ref={inputRef}
        className="paragraph"
        name="paragraph_text"
        cols="50"
        rows="10"
        placeholder="Paste your text here..."
        value={props.inputText}
        onChange={props.changeInputTextHandler}
      ></textarea>
    </Card>
  );
};

export default Paragraph;
