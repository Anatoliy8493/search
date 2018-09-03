const express = require('express');

const tickets = [{
  "id": 1,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "16:20",
  "arrival_date": "12.05.18",
  "arrival_time": "22:10",
  "carrier": "TK",
  "stops": 3,
  "price": 12400
}, {
  "id": 2,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "17:20",
  "arrival_date": "12.05.18",
  "arrival_time": "23:50",
  "carrier": "S7",
  "stops": 1,
  "price": 13100
}, {
  "id": 3,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "12:10",
  "arrival_date": "12.05.18",
  "arrival_time": "18:10",
  "carrier": "SU",
  "stops": 0,
  "price": 15300
}, {
  "id": 4,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "17:00",
  "arrival_date": "12.05.18",
  "arrival_time": "23:30",
  "carrier": "TK",
  "stops": 2,
  "price": 11000
}, {
  "id": 5,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "12:10",
  "arrival_date": "12.05.18",
  "arrival_time": "20:15",
  "carrier": "BA",
  "stops": 3,
  "price": 13400
}, {
  "id": 6,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "9:40",
  "arrival_date": "12.05.18",
  "arrival_time": "19:25",
  "carrier": "SU",
  "stops": 3,
  "price": 12450
}, {
  "id": 7,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "17:10",
  "arrival_date": "12.05.18",
  "arrival_time": "23:45",
  "carrier": "TK",
  "stops": 1,
  "price": 13600
}, {
  "id": 8,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "6:10",
  "arrival_date": "12.05.18",
  "arrival_time": "15:25",
  "carrier": "TK",
  "stops": 0,
  "price": 14250
}, {
  "id": 9,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "16:50",
  "arrival_date": "12.05.18",
  "arrival_time": "23:35",
  "carrier": "SU",
  "stops": 1,
  "price": 16700
}, {
  "id": 10,
  "airline_logo": "https://pics.avs.io/340/100/TK.png",
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "6:10",
  "arrival_date": "12.05.18",
  "arrival_time": "16:15",
  "carrier": "S7",
  "stops": 0,
  "price": 17400
}]

const rates = [{
  currency: "usd",
  value: 68
},{
  currency: "eur",
  value: 78
},{
  currency: "rub",
  value: 1
}];

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/tickets', (req, res) => {
  res.send({ ok: true, tickets: tickets });
});

app.get('/api/exchange-rates', (req, res) => {
  res.send({ ok: true, rates: rates });
});

app.listen(port, () => console.log(`Listening on port ${port}`));