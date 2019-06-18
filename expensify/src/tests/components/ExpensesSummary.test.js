import React from "react";
import { shallow } from "enzyme";

import { ExpensesSummary } from "../../components/ExpensesSummary";

let wrapper, props;

describe("ExpensesSummary", () => {
  beforeEach(() => {
    props = {
      count: 2,
      total: 23145
    };

    wrapper = shallow(<ExpensesSummary {...props} />);
  });

  test("should render one expense correctly", () => {
    wrapper.setProps({
      count: 1,
      total: 100
    });

    expect(wrapper).toMatchSnapshot();
  });

  test("should render multiple expenses correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
