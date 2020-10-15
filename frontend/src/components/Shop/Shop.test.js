import React from "react";
import renderer from "react-test-renderer";
import Shop from "./Shop";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
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
    spec_id :"",
    err_message:"",
    sold_message:""
  };


  const store = mockStore({ items });

  it("Shop Component should render correctly", () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Shop />
        </Provider>
      </BrowserRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
