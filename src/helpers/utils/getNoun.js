const getNoun = (n, one, two, five) => {
  let number = Math.abs(n);
  number %= 100;
  if (number >= 5 && number <= 20) return five;
  number %= 10;
  if (number === 1) return one;
  if (number >= 2 && number <= 4) return two;
  return five;
};

export default getNoun;
