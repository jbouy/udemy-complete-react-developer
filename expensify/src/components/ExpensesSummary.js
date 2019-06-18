import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";

import getExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";

export const ExpensesSummary = ({ count, total }) => {
  const expenseWord = count === 1 ? "expense" : "expenses";
  const formattedExpenseTotal = numeral(total / 100).format("$0,0.00");

  return (
    <div>
      <h1>
        Viewing {count} {expenseWord} totalling {formattedExpenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const expenses = selectExpenses(state.expenses, state.filters) || [];

  return {
    count: expenses.length,
    total: getExpensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
