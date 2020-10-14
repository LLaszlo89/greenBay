 import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const setUp = (props = {}) => {         // This returns a shallow render
  const component = shallow(<Header {...props} />);
  return component;
};

const findByTestAtr =(component , attr )=>{
const wrapper = component.find(`[data-test = ${attr}]`)
}

describe("Header component", () => {

const dummyData = {username : "TestName", cash:10, pic : "www.testpicture.com"}

  let component;
  beforeEach(() => {      /*  Runs before each test case  /first thing/  */
    component = setUp(dummyData);
  });

  it("Should render without error", () => {   //we can look for classnames but data-test is safer 
    const wrapper = component.find([`[data-test = 'headersComponent']`]);
    expect(wrapper.length).toBe(1);
  });

});
 