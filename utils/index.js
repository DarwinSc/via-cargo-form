
export const returnOnlyNumbers = (value) => {
  let n = 0;

  if(!isNaN(value) && value >= 0)
    n = value;

  return n;
};

export const isPositiveNumber = n => {
  console.log(n, !isNaN(n) || n >= 0)
  return !isNaN(n) || n >= 0;
};
