// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { transition, wh, font32 } from './../styles/mixins';
import { BLACK } from './../styles/colors';
import { hexToRgb, getNoun, formatDate } from './../helpers';
import { Div, Row } from './../primitives';

import Button from './Button';

import type { Ticket as P } from '../model';

export default class Ticket extends React.Component<P> {
  render() {
    const {
      origin,
      origin_name: originName,
      airline_logo: airlineLogo,
      destination,
      destination_name: destinationName,
      departure_date: departureDate,
      departure_time: departureTime,
      arrival_date: arrivalDate,
      arrival_time: arrivalTime,
      stops,
      price,
    } = this.props;

    return (
      <Container>
        <Left>
          <AirlineLogo src={airlineLogo} />
          <Button display="block">
            <React.Fragment>
              <Price>Купить</Price>
              <Price>за {price} ₽</Price>
            </React.Fragment>
          </Button>
        </Left>
        <Rigth>
          <Row>
            <DepartureTime>{departureTime}</DepartureTime>
            <div>{stops} {getNoun(stops, 'остановка', 'остановки', 'остановок')}</div>
            <ArrivalTime>{arrivalTime}</ArrivalTime>
          </Row>
          <Row>
            <div>
              <Row>
                <div>{origin}</div>
                <div>{originName}</div>
              </Row>
              <div>{formatDate(departureDate, 'D MMM YYYY, dd')}</div>
            </div>
            <div>
              <Row>
                <div>{destination}</div>
                <div>{destinationName}</div>
              </Row>
              <div>{formatDate(arrivalDate, 'D MMM YYYY, dd')}</div>
            </div>
          </Row>
        </Rigth>
      </Container>
    )
  }  
}

const timeCss = css`
  ${font32}
  color: '#4A4A4A';
`;

const DepartureTime = styled(Div)`
  ${timeCss}
  margin-right: 20px;
`;

const ArrivalTime = styled(Div)`
  ${timeCss}
  margin-left: 20px;
`;

const AirlineLogo = styled.img`
  width: 120px;
`;

const Container = styled(Row)`
  ${transition('box-shadow')}
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 4px #5B89A4;

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 25px #979797;
  }
`;

const Left = styled(Div)`
  ${wh('40%', '100%')}
  padding: 25px 20px;
  box-shadow: 1px 0 1px ${hexToRgb(BLACK, '.08')};
`;

const Rigth = styled(Div)`
  ${wh('60%', '100%')}
`;

const Price = styled(Div)``
