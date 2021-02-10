import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Game.css";
import Card from "./Card";
import { getCards, getIsUpdating } from "../state/selectors/selectors";

const Game = ({ cards, isUpdating }) => {
  return (
    <div className="Game">
      {cards.map((card, i) => {
        return (
          <Card
            cardColor={card.value}
            cardId={i}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            isUpdating={isUpdating}
            key={i}
          />
        );
      })}
    </div>
  );
};

Game.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      isFlipped: PropTypes.bool.isRequired,
      isMatched: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  isUpdating: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const cards = getCards(state);
  const isUpdating = getIsUpdating(state);
  return { cards, isUpdating };
};

export default connect(mapStateToProps, null)(Game);
