import styled from 'styled-components';

export const Container = styled.View`
  margin:  25px;
  background: #fff;
  border-radius: 4px;
  padding: 5px;
`;

export const Product = styled.View``;

export const ProductList = styled.View``;

export const ProductView = styled.View`

`;

export const ProductBox = styled.View`

flex-direction: row;
  align-items: center;

`;

export const ProductImage = styled.Image`
  width: 80;
  height: 80;
`;

export const DescriptionBox = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  padding-top: 5px;
  font-weight: bold;
  font-size: 16px;
`;
export const BoxAmountSubTotal = styled.View`
  flex-direction: row;
  background: #f2f2f2;
  border-radius: 4px;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  padding: 10px;
`;
export const AmountNumberBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;
export const NumberAmountView = styled.View`
  background: #fff;
  width: 45px;
  height: 25px;
  border-radius: 4px;
  justify-content: center;
  margin: 0 5px;
`;

export const NumberAmount = styled.Text`
  font-size: 16px;
  align-self: center;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding-right: 16px;
`;

export const SubTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const TextTotal = styled.Text`
  padding-top: 25px;
  color: #999999;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
`;

export const ProductTotal = styled.Text`
  align-self: center;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 15px;
`;

export const OrderButton = styled.TouchableOpacity`
  background: #7159c1;
  align-items: center;
  border-radius: 4px;
  padding: 15px 91px;
`;

export const TextOrderButton = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;

export const Footer = styled.View`
  margin-bottom: 5px;
`;
export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;


export const QuantityButton = styled.TouchableOpacity``;
