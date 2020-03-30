import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions';

import Form from '../../components/Form';

import { Container, SignLink, SignLinkText } from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, cpf, rg, password));
    navigation.navigate('SignIn');
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
        buttonValue="Cadastrar"
      />
      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já tenho cadastro </SignLinkText>
      </SignLink>
    </Container>
  );
}

SignUp.navigationOptions = {
  title: 'SignUp',
  headerStyle: {
    backgroundColor: '#3b9eff',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerBackTitleVisible: false,
};
