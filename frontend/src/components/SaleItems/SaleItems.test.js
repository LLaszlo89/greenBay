import React from "react";
import renderer from "react-test-renderer";
import SaleItems from "./SaleItems";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Connect component to redux store ", () => {
  const mockStore = configureStore([]);

  const store = mockStore([]);

  it("SaleItems Component should render correctly", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SaleItems />
        </Provider>
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
