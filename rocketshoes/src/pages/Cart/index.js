import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductList,
  ProductBox,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AmountNumberBox,
  NumberAmount,
  SubTotal,
  TextTotal,
  ProductTotal,
  OrderButton,
  TextOrderButton,
  DescriptionBox,
  BoxAmountSubTotal,
  NumberAmountView,
  ProductView,
  Product,
  Footer,
  EmptyText,
  EmptyContainer,
  QuantityButton,
  ProductDelete
} from './styles';



export default function Cart() {
  const total = useSelector(state => formatPrice(
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  ));

  const products = useSelector(state => state.cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  })));

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));

  }

  function  decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {products.length ? (
        <>
          <ProductList>
            {products.map(product => (
              <Product key={product.id}>
                <ProductView>
                  <ProductBox>
                    <ProductImage source={{ uri: product.image }} />
                    <DescriptionBox>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{product.priceFormatted}</ProductPrice>
                    </DescriptionBox>
                    <ProductDelete onPress={() => dispatch(CartActions.removeFromCart(product.id))}>
                      <Icon name="delete-forever" size={24} color={'#7159c1'} />
                    </ProductDelete>
                  </ProductBox>
                  <BoxAmountSubTotal>
                  <AmountNumberBox>
                    <QuantityButton onPress={() => increment(product)}>
                      <Icon name="add-circle-outline" size={25}/>
                    </QuantityButton>
                      <NumberAmountView>
                        <NumberAmount>{String(product.amount)}</NumberAmount>
                      </NumberAmountView>
                    <QuantityButton onPress={() => decrement(product)}>
                      <Icon name="remove-circle-outline" size={25} />
                    </QuantityButton>
                    </AmountNumberBox>
                    <SubTotal>{product.subTotal}</SubTotal>
                  </BoxAmountSubTotal>
                </ProductView>
              </Product>
            ))}
          </ProductList>
          <Footer>
            <TextTotal>TOTAL</TextTotal>
            <ProductTotal>{total}</ProductTotal>
            <OrderButton>
              <TextOrderButton>FINALIZAR PEDIDO</TextOrderButton>
            </OrderButton>
          </Footer>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}
