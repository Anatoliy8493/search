import moment from 'moment/min/moment-with-locales';

export function getNoun(n, one, two, five) {
  let number = Math.abs(n);
  number %= 100;
  if (number >= 5 && number <= 20) return five;
  number %= 10;
  if (number === 1) return one;
  if (number >= 2 && number <= 4) return two;
  return five;
}

export const hexToRgb = (hex, alpha) => {
  if (!hex) return '';

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;

  return `rgb(${r}, ${g}, ${b})`;
};

export const formatDate = (date, format) => moment(date).locale('ru').format(format);
