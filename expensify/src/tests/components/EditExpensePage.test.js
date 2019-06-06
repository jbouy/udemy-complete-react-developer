import React from "react";
import { shallow } from "enzyme";

import expenses from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpensePage";

let editExpense, removeExpense, history, wrapper, expense;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  expense = expenses[1];

  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expense);

  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test("should handleRemoveExpense", () => {
  wrapper
    .find("button")
    .at(0)
    .simulate("click");

  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
