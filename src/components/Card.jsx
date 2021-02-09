import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import useCurrentWidthHook from "../hooks/useCurrentWidthHook";
import useCurrentHeightHook from "../hooks/useCurrentHeightHook";
import { ASPECT_RATIO } from "../constants/constants";

const Card = ({ cardColor, cardId }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardStyles = {
    backgroundColor: isFlipped ? cardColor : "#8b4513",
    height: (useCurrentHeightHook() * 0.25) / ASPECT_RATIO / 2,
    width: (useCurrentWidthHook() * 0.166 * ASPECT_RATIO) / 2,
  };

  function onCardClicked() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div
      className="Card"
      key={cardId}
      style={cardStyles}
      onClick={onCardClicked}
    >
      {`${isFlipped ? "Front" : "Back"}`}
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.string,
  cardColor: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardId: null,
};

export default Card;
