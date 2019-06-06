import React from "react";
import { shallow } from "enzyme";
import moment from "moment";

import { filters, altFilters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });

  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "rent";

  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should handle sort change by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  });

  wrapper
    .find("select")
    .at(0)
    .simulate("change", {
      target: { value }
    });

  expect(sortByDate).toHaveBeenCalled();
});

test("should handle sort change by date", () => {
  const value = "amount";

  wrapper
    .find("select")
    .at(0)
    .simulate("change", {
      target: { value }
    });

  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle dates change", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");

  wrapper.find("DateRangePicker").prop("onDatesChange")({
    startDate,
    endDate
  });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes
test("should handle date focus change", () => {
  const calendarFocused = "endDate";

  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);

  expect(wrapper.state().calendarFocused).toEqual(calendarFocused);
});
