import "./HeadingCard.css";

const HeadingCard = function (props) {
  const classes = "heading " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default HeadingCard;
