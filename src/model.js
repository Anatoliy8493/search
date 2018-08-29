// @flow

export type Ticket = {
  id: number,
  origin: string,
  airline_logo: string,
  origin_name: string,
  destination: string,
  destination_name: string,
  departure_date: string,
  departure_time: string,
  arrival_date: string,
  arrival_time: string,
  carrier: string,
  stops: number,
  price: number,
};

type Option = {
  isActive: boolean,
  label: string,
  value: string,
}

export type Filter = {
  type: string,
  options: Array<Option>
}

export type Filters = Array<Filter>;
