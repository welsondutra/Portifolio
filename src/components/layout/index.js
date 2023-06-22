import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';
import * as S from './styles';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <S.Container>{props.children}</S.Container>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
