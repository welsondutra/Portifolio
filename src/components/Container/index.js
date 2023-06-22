import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Container = (props) => {
  return <S.Container>{props.children}</S.Container>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
