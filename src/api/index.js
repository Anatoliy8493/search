const headersObj = {
  'Content-Type': 'application/json',
};

const headers = new Headers(headersObj);

export const fetchTickets = () => {
  const options = {
    headers,
    credentials: 'same-origin',
  };

  return (
    fetch('/api/tickets', options)
      .then(response => response.json())
  );
};

export const fetchExchangeRates = () => {
  const options = {
    headers,
    credentials: 'same-origin',
  };

  return (
    fetch('/api/exchange-rates', options)
      .then(response => response.json())
  );
};

