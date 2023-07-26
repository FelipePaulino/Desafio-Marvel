import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import LayoutBase from ".";

jest.mock("next/router", () => require("next-router-mock"));
const mockStore = configureStore([]);

const initialState = {
  test: "",
};

const store = mockStore(initialState);

describe("<LayoutBase />", () => {
  it("should render the LayoutBase", () => {
    render(
      <Provider store={store}>
        <LayoutBase>value</LayoutBase>
      </Provider>
    );

    expect(screen.getByText("value")).toBeInTheDocument();
  });
});
