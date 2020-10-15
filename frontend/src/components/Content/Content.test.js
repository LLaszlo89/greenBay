import React from "react";
import renderer from "react-test-renderer";
import Content from "./Content";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Connect component to redux store ", () => {
  const mockStore = configureStore([]);

  const items = {
    items: [
      {
        id: 1,
        user_name: "Test",
        title: "Test",
        description: "Test",
        URL: "Test",
        price: 1,
        forSale: 1,
      },
    ],
  };

  const store = mockStore({ items });

  it("Should render correctly", () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Content />
      </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
