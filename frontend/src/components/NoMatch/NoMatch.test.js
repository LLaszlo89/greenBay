import React from "react";
import renderer from "react-test-renderer";
import NoMatch from "./NoMatch";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Connect component to redux store ", () => {
  const mockStore = configureStore([]);

  const store = mockStore( [] );

  it("NoMatch Component should render correctly", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <NoMatch />
        </Provider>
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
