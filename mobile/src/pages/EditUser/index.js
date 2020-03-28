import React, { useState } from 'react';
import api from '../../services/api';

import Form from '../../components/Form';

import { Container } from './styles';

export default function AddUser({ navigation }) {
  const { user } = navigation.state.params;

  const [name, setName] = useState(`${user.name}`);
  const [email, setEmail] = useState(`${user.email}`);
  const [cpf, setCpf] = useState(`${user.cpf}`);
  const [rg, setRg] = useState(`${user.rg}`);
  const [password, setPassword] = useState(`${user.password}`);

  async function handleSubmit(id) {
    await api.put(`/users/${id}`, { name, email, cpf, rg, password });
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
        handleSubmit={() => handleSubmit(user.id)}
        buttonValue="Salvar"
      />
    </Container>
  );
}

AddUser.navigationOptions = {
  title: 'Editar usuário',
  headerStyle: {
    backgroundColor: '#3b9eff',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerBackTitleVisible: false,
};
