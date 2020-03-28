import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  padding: 40px;
  background: #fff;
`;

export const Logout = styled.View`
  flex-direction: row;
  margin-left: 70%;
`;

export const LogoutText = styled.Text`
  color: #ff0000;
  font-weight: bold;
  font-size: 14px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const AddButton = styled(RectButton)`
  background: #3b9eff;
  flex-direction: row;
  padding: 20px;
  border-radius: 8px;
  justify-content: center;
  margin: 0 auto;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
