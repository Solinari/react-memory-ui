import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./state/store/store";
import App from "./App";

test("renders App with Store", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
