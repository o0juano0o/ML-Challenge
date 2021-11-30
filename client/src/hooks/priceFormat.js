export const numberWithDot = (number) => {
  const amount = number.toString().split(".")[0];
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const getDecimals = (number) => {
  if (number) {
    const decimal = number.toString();
    return decimal.length === 1 ? `${decimal}0` : decimal;
  }
  return null;
};
