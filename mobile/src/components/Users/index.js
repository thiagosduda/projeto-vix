import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Info, Name } from './styles';

export default function Users({ name, navigate, user }) {
  return (
    <Container>
      <Info>
        <Icon name="account-box" size={20} color="#fff" />
        <Name> {name} </Name>
      </Info>
      <TouchableOpacity
        onPress={() => {
          navigate('Info', { user });
        }}
      >
        <Icon name="info" size={25} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
