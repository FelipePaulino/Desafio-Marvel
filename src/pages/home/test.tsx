import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Introduction from ".";

jest.mock("next/router", () => require("next-router-mock"));
const mockStore = configureStore([]);

describe("<Introduction />", () => {
  const initialState = {
    test: "",
  };

  const store = mockStore(initialState);

  it("should render Introduction", () => {
    render(
      <Provider store={store}>
        <Introduction />
      </Provider>
    );

    const buttonPerson = screen.getByText(/Characters/i);

    fireEvent.click(buttonPerson);

    expect(screen.getAllByText(/Characters/i)[0]).toBeInTheDocument();
  });
});
