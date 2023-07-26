import React from "react";
import { render } from "@testing-library/react";
import FormEdit from ".";

const setDataEditMock = jest.fn();

describe("FormEdit", () => {
  it("deve ser renderizado corretamente", () => {
    render(<FormEdit setDataEdit={setDataEditMock} />);
    expect(setDataEditMock).toHaveBeenCalledWith({
      titulo: "",
      description: "",
      simulateImage: "",
    });
  });
});
