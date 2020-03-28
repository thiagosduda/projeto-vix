import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Info, InfoText, InfoTextValue } from './styles';

export default function UserInfo({ icon, type, value }) {
  return (
    <Info>
      <Icon name={icon} size={20} color="#fff" />
      <InfoText>{type}:</InfoText>
      <InfoTextValue>{value} </InfoTextValue>
    </Info>
  );
}
