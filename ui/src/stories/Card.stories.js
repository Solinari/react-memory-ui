import React from "react";
import { Provider } from "react-redux";
import store from "../state/store/store";
import Card from "../components/Card";
import * as colors from "../constants/colors";

const Template = (args) => (
  <Provider store={store}>
    <Card {...args} />
  </Provider>
);

export const Black = Template.bind({});
Black.args = {
  cardColor: colors.BLACK,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Blue = Template.bind({});
Blue.args = {
  cardColor: colors.BLUE,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Crimson = Template.bind({});
Crimson.args = {
  cardColor: colors.CRIMSON,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Cyan = Template.bind({});
Cyan.args = {
  cardColor: colors.CYAN,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Fuchsia = Template.bind({});
Fuchsia.args = {
  cardColor: colors.FUCHSIA,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Green = Template.bind({});
Green.args = {
  cardColor: colors.GREEN,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Olive = Template.bind({});
Olive.args = {
  cardColor: colors.OLIVE,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Orange = Template.bind({});
Orange.args = {
  cardColor: colors.ORANGE,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Purple = Template.bind({});
Purple.args = {
  cardColor: colors.PURPLE,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Teal = Template.bind({});
Teal.args = {
  cardColor: colors.TEAL,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const White = Template.bind({});
White.args = {
  cardColor: colors.WHITE,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

export const Yellow = Template.bind({});
Yellow.args = {
  cardColor: colors.YELLOW,
  cardId: 0,
  isFlipped: false,
  isMatched: false,
  isUpdating: false,
  key: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Memory Game/Card",
  component: Card,
  argTypes: {},
};
