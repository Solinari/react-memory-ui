import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import useCurrentWidthHook from "../hooks/useCurrentWidthHook";
import useCurrentHeightHook from "../hooks/useCurrentHeightHook";
import { ASPECT_RATIO } from "../constants/constants";

const Card = ({ cardId }) => {
  const cardStyles = {
    height: (useCurrentHeightHook() * 0.25) / ASPECT_RATIO / 2,
    width: (useCurrentWidthHook() * 0.166 * ASPECT_RATIO) / 2,
  };
  return (
    <div className="Card" key={cardId} style={cardStyles}>
      Test Card
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.string,
};

Card.defaultProps = {
  cardId: null,
};

export default Card;
