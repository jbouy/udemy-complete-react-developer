export default expenses => {
  return expenses.map(exp => exp.amount).reduce((prev, cur) => prev + cur, 0);
};
