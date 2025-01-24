import Card from "../UI/Card";
import "./TextCounter.css";

const pronouns = [
  "i",
  "we",
  "you",
  "he",
  "she",
  "it",
  "they",
  "me",
  "us",
  "her",
  "him",
  "them",
  "mine",
  "ours",
  "yours",
  "hers",
  "his",
  "theirs",
  "myself",
  "yourself",
  "herself",
  "himself",
  "itself",
  "ourself",
  "yourselves",
  "themselves",
];

const TextCounter = function (props) {
  const characters = props.inputText.length;

  const words =
    characters > 0
      ? props.inputText.split(" ").filter((word) => word !== "").length
      : 0;

  const sentence =
    characters > 0
      ? props.inputText.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").length
      : 0;

  const pronoun = props.inputText
    .toLowerCase()
    .split(" ")
    .filter(
      (proword) =>
        pronouns.filter((pronounWord) => pronounWord === proword).length
    ).length;

  const paragraph =
    characters > 0
      ? props.inputText.split("\n").filter((par) => par !== "").length
      : 0;

  return (
    <Card>
      <form className="form">
        <div className="form-list">
          <label className="form-value">Words</label>
          <input className="form-input" value={words} readOnly />
        </div>
        <div>
          <label className="form-value">Characters</label>
          <input className="form-input" value={characters} readOnly />
        </div>
        <div>
          <label className="form-value">Sentences</label>
          <input className="form-input" value={sentence} readOnly />
        </div>
        <div>
          <label className="form-value">Paragraphs</label>
          <input className="form-input" value={paragraph} readOnly />
        </div>
        <div>
          <label className="form-value">Pronouns</label>
          <input className="form-input" value={pronoun} readOnly />
        </div>
      </form>
    </Card>
  );
};

export default TextCounter;
