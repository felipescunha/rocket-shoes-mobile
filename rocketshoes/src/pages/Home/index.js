import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartAction from '../../store/modules/cart/actions';

import {
  Container,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductButton,
  BoxAmount,
  ProductAmountText,
  ProductList,
  ProductView,
  TextButton,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { navigation, addToCartRequest } = this.props;

    addToCartRequest(id);

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return (
              <ProductView>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                <ProductButton onPress={() => this.handleAddProduct(item.id)}>
                  <BoxAmount>
                    <Icon
                      name="add-shopping-cart"
                      color="#FFF"
                      size={20}
                      padding={10}
                    />
                    <ProductAmountText>
                      {amount[item.id] || 0}
                    </ProductAmountText>
                  </BoxAmount>
                  <TextButton color="#fff">ADICIONAR</TextButton>
                </ProductButton>
              </ProductView>
            );
          }}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
