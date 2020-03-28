import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import UserInfo from '../../components/UserInfo';

import { Container, IconWrapper } from './styles';

export default function Info({ navigation }) {
  const { user } = navigation.state.params;

  return (
    <Container>
      <IconWrapper>
        <Icon
          name="edit"
          size={25}
          color="#00FF00"
          onPress={() => navigation.navigate('EditUser', { user })}
        />

        <Icon
          name="delete"
          size={25}
          color="#FF0000"
          onPress={async () => {
            await api.delete(`/users/${user.id}`);
            navigation.navigate('Dashboard');
          }}
        />
      </IconWrapper>
      <UserInfo icon="account-box" type="Nome" value={user.name} />
      <UserInfo icon="mail-outline" type="E-mail" value={user.email} />
      <UserInfo icon="account-circle" type="CPF" value={user.cpf} />
      <UserInfo icon="account-circle" type="RG" value={user.rg} />
    </Container>
  );
}

Info.navigationOptions = {
  title: 'Informações do Usuário',
  headerStyle: {
    backgroundColor: '#3b9eff',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerBackTitleVisible: false,
};
