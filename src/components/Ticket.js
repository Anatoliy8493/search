// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import { PlaneIcon } from '../icons';
import { WHITE, BLACK } from '../styles/colors';
import { Div, Row, Column } from '../primitives';
import { hexToRgb, getNoun, formatDate } from '../helpers';
import { wh, font32, font16, flexAlign, font10, font12 } from '../styles/mixins';

import Button from './Button';

import type { Ticket as P } from '../model';

export default class Ticket extends React.PureComponent<P> {
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
          <InfoRow>
            <DepartureTime>{departureTime}</DepartureTime>
            <Stops>
              {!!stops && <StopsCount>{stops} {getNoun(stops, 'пересадка', 'пересадки', 'пересадок')}</StopsCount>}
              <StopsRow>
                <StopsLine />
                <PlaneIcon />
              </StopsRow>
            </Stops>
            <ArrivalTime>{arrivalTime}</ArrivalTime>
          </InfoRow>
          <InfoRow>
            <div>
              <Name>{`${origin} ${originName}`}</Name>
              <Date>{formatDate(departureDate, 'D MMM YYYY, dd')}</Date>
            </div>
            <div>
              <Name>{`${destination} ${destinationName}`}</Name>
              <Date>{formatDate(arrivalDate, 'D MMM YYYY, dd')}</Date>
            </div>
          </InfoRow>
        </Rigth>
      </Container>
    )
  }  
}

const Name = styled.div`
  ${font12}
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #4A4A4A;
`;

const Date = styled.div`
  ${font12}
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: #8B9497;
`;

const Stops = styled(Column)`
${flexAlign('flex-start', 'center')}
  width: 96px;
`;

const StopsRow = styled(Row)`
  ${flexAlign('flex-start', 'center')}
  width: 100%;
`;

const StopsLine = styled.div`
  ${wh('100%', '1px')}
  margin-right: 1px;
  background-color: #D2D5D6;
`;

const StopsCount = styled.div`
  ${font10}
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  color: #8B9497;
`;

const InfoRow = styled(Row)`
  ${flexAlign('space-between', 'center')}
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const timeCss = css`
  ${font32}
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  color: #4A4A4A;
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
  display: block;
  max-width: 120px;
  margin: 0 auto 20px;
`;

const Container = styled(Row)`
  width: 565px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 4px #5B89A4;
  transition: box-shadow .2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 25px #979797;
  }
`;

const Left = styled(Div)`
  ${wh('200px', '100%')}
  flex-shrink: 0;
  padding: 25px 20px;
  box-shadow: 1px 0 1px ${hexToRgb(BLACK, '.08')};
`;

const Rigth = styled(Div)`
  ${wh('365px', '100%')}
  padding: 25px 20px;
`;

const Price = styled(Div)`
  ${font16}
  color: ${WHITE};
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;
