import React from "react";
import renderer from "react-test-renderer";
import Header from "./Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

describe("Connect component to redux store ", () => {
  const mockStore = configureStore([]);

  const users = {
    username: "Test",
    cash: "2911",
    pic: "Test",
    error_message: "",
  };
  const store = mockStore({ users });

  it("Header Component should render correctly", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
