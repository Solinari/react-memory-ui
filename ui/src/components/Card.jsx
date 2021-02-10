import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./Card.css";
import useCurrentWidthHook from "../hooks/useCurrentWidthHook";
import useCurrentHeightHook from "../hooks/useCurrentHeightHook";
import {
  ASPECT_RATIO,
  AUTO,
  CLICK_DELAY,
  FACE_DOWN,
  WAIT,
  POINTER,
} from "../constants/constants";
import {
  flipCardFace,
  updateGame,
  setIsUpdating,
} from "../state/actions/actions";

const Card = ({
  cardColor,
  cardId,
  flipCardFace,
  isFlipped,
  isMatched,
  updateGame,
  isUpdating,
  setIsUpdating,
}) => {
  const cardStyles = {
    backgroundColor: isFlipped ? cardColor : FACE_DOWN,
    opacity: isMatched ? 0 : 1,
    cursor: isMatched ? AUTO : isUpdating ? WAIT : POINTER,
    height: (useCurrentHeightHook() * 0.25) / ASPECT_RATIO / 2,
    width: (useCurrentWidthHook() * 0.166 * ASPECT_RATIO) / 2,
  };

  function onCardClicked() {
    flipCardFace({ cardId, isFlipped });
    setIsUpdating({ isUpdating: true });
    setTimeout(() => {
      updateGame();
      setIsUpdating({ isUpdating: false });
    }, CLICK_DELAY);
  }
  return (
    <div
      className="Card"
      key={cardId}
      style={cardStyles}
      onClick={isMatched || isUpdating ? () => {} : onCardClicked}
    />
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  cardColor: PropTypes.string.isRequired,
  flipCardFace: PropTypes.func,
  isFlipped: PropTypes.bool.isRequired,
  isMatched: PropTypes.bool.isRequired,
  updateGame: PropTypes.func,
  isUpdating: PropTypes.bool.isRequired,
  setIsUpdating: PropTypes.func,
};

Card.defaultProps = {
  flipCardFace: () => {},
  updateGame: () => {},
  setIsUpdating: () => {},
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      flipCardFace,
      updateGame,
      setIsUpdating,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Card);
