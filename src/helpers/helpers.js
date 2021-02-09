import * as colors from "../constants/colors";

function shuffleCards(cards) {
  return cards
    .map((card) => {
      return {
        sort: Math.random(),
        value: card,
      };
    })
    .sort((a, b) => a.sort - b.sort)
    .map((a) => {
      return a.value;
    });
}

export function initializeCards() {
  let cards = [];
  Object.keys(colors).forEach((color) => {
    const currentCard = {
      name: color,
      value: colors[color],
      isFlipped: false,
    };
    cards.push(currentCard);
    cards.push(currentCard);
  });
  return shuffleCards(cards);
}
