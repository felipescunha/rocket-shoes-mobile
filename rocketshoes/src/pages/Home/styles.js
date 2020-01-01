import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #171720;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  padding: 20px;
`;

export const ProductView = styled.View`
  padding: 15px;
  background: #fff;
  border: 1px solid #7159c1;
  margin: 5px 20px 0 0px;
  border-radius: 5px;
  max-width: 220px;
  height: 358px;
`;

export const ProductImage = styled.Image`
  width: 200;
  height: 200;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #141419;
  font-size: 16px;
`;
export const BoxAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  padding: 0 20px;
  color: #fff;
  align-items: center;
`;

export const ProductButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  color: #141419;
  font-size: 20px;
  font-weight: bold;
`;
