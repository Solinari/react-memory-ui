import React from "react";
import { Provider } from "react-redux";
import store from "../state/store/store";
import Game from "../components/Game";

const Template = (args) => (
  <Provider store={store}>
    <Game {...args} />
  </Provider>
);

export const GAME = Template.bind({});
GAME.args = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Memory Game/Game",
  component: Game,
  argTypes: {},
};
