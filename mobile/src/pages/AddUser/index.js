import React, { useState } from 'react';
import api from '../../services/api';

import Form from '../../components/Form';

import { Container } from './styles';

export default function AddUser({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    await api.post('/users', { name, email, cpf, rg, password });
    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        cpf={cpf}
        setCpf={setCpf}
        rg={rg}
        setRg={setRg}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        buttonValue="Adicionar"
      />
    </Container>
  );
}

AddUser.navigationOptions = {
  title: 'Adicionar Usuário',
  headerStyle: {
    backgroundColor: '#3b9eff',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerBackTitleVisible: false,
};
