import React from 'react';
import { useSelector } from 'react-redux';
import { getCharityList } from '../../../store/selectors';
import Row from '../../common/Row';
import Col from '../../common/Col';
import CardItem from './CardItem';

const HomePage = () => {
  const charities = useSelector(getCharityList);

  return (
    <Row justify="space-between">
      {charities?.map((charity, i) => (
        <Col key={`${i}`} data-testid="col" lg={6} xs={12}>
          <CardItem charity={charity} index={i} />
        </Col>
      ))}
    </Row>
  );
};

export default HomePage;
