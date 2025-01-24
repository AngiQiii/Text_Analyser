import Card from "../UI/Card";

import "./MinuteCounter.css";
import "./TextCounter.css";

const MinuteCounter = function (props) {
  const characters = props.inputText.length;

  const words =
    characters > 0
      ? props.inputText.split(" ").filter((word) => word !== " ").length
      : 0;

  const wordsPerMinute = `${(words / 225).toFixed(2)} minutes`;

  const longestWord =
    characters > 0
      ? props.inputText
          .split(" ")
          .filter((word) => word !== " ")
          .sort((a, b) => a.length - b.length)
          .pop(-1)
      : 0;

  console.log(longestWord);

  return (
    <Card>
      <form className="form">
        <div className="form-list">
          <label className="form-value">Average reading time</label>
          <input className="form-input" value={wordsPerMinute} readOnly />
        </div>
        <div>
          <label className="form-value">Longest word</label>
          <input className="form-input" value={longestWord} readOnly />
        </div>
      </form>
    </Card>
  );
};

export default MinuteCounter;
