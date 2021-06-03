
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


export function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};