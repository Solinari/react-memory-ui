import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./Card.css";
import useCurrentWidthHook from "../hooks/useCurrentWidthHook";
import useCurrentHeightHook from "../hooks/useCurrentHeightHook";
import { ASPECT_RATIO } from "../constants/constants";
import { flipCardFace, updateGame } from "../state/actions/actions";

const Card = ({
  cardColor,
  cardId,
  flipCardFace,
  isFlipped,
  isMatched,
  updateGame,
}) => {
  const cardStyles = {
    backgroundColor: isFlipped ? cardColor : "#8b4513",
    opacity: isMatched ? 0 : 1,
    cursor: isMatched ? "none" : "pointer",
    height: (useCurrentHeightHook() * 0.25) / ASPECT_RATIO / 2,
    width: (useCurrentWidthHook() * 0.166 * ASPECT_RATIO) / 2,
  };

  function onCardClicked() {
    flipCardFace({ cardId, isFlipped });
    updateGame();
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
  cardId: PropTypes.number.isRequired,
  cardColor: PropTypes.string.isRequired,
  flipCardFace: PropTypes.func,
  isFlipped: PropTypes.bool.isRequired,
  isMatched: PropTypes.bool.isRequired,
  updateGame: PropTypes.func,
};

Card.defaultProps = {
  flipCardFace: () => {},
  updateGame: () => {},
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      flipCardFace,
      updateGame,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Card);
