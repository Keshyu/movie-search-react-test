import React, { ReactElement } from 'react';
import { Col } from 'react-bootstrap'


const ResponsiveColumn: React.FC<ResponsiveColumnProps> = ({ key, children }) => {
  return (
    <Col key={key} xs={12} sm={6} md={4} lg={3} xl={2}>
      {children}
    </Col>
  );
}

export interface ResponsiveColumnProps {
  key ?: string,
  children ?: ReactElement | ReactElement[] | string,
}


export default ResponsiveColumn;