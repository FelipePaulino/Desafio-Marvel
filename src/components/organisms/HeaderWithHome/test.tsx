import { fireEvent, render, screen } from "@testing-library/react";
import Router from "next/router";
import HeaderWithHome from ".";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

jest.mock("next/router", () => require("next-router-mock"));
const mockStore = configureStore([]);

describe("<HeaderWithHome />", () => {
  const initialState = {
    test: "",
  };
  const store = mockStore(initialState);

  it("should render the HeaderWithHome", () => {
    render(
      <Provider store={store}>
        <HeaderWithHome />
      </Provider>
    );

    const buttonSearch = screen.getByText("Search");
    fireEvent.click(buttonSearch);

    expect(screen.getAllByText(/Character/i)[0]).toBeInTheDocument();
  });
});
