import React from "react";
import renderer from "react-test-renderer";
import LoginComponent from "./LoginComponent";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("LoginComponent to redux store ", () => {
  const mockStore = configureStore([]);

  const users = {
    error_message:""
  };

  const store = mockStore({ users });

  it("Should render correctly", () => {
    const tree = renderer.create(
      <Provider store={store}>
        <LoginComponent />
      </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
