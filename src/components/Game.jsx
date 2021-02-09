import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Game.css";
import Card from "./Card";
import { getCards } from "../state/selectors/selectors";

const Game = ({ cards }) => {
  return (
    <div className="Game">
      {cards.map((card, i) => {
        return (
          <Card
            cardColor={card.value}
            cardId={i}
            isFlipped={card.isFlipped}
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
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const cards = getCards(state);
  return { cards };
};

export default connect(mapStateToProps, null)(Game);
