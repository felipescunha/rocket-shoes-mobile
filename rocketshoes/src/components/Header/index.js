import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  SafeArea,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <SafeArea>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={26} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </SafeArea>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
