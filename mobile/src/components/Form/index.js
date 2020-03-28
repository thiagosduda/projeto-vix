import React, { useRef } from 'react';

import { Container, FormInput, SubmitButton } from './styles';

export default function Form({
  name,
  setName,
  email,
  setEmail,
  cpf,
  setCpf,
  rg,
  setRg,
  password,
  setPassword,
  loading,
  handleSubmit,
  buttonValue,
}) {
  const emailRef = useRef();
  const cpfRef = useRef();
  const rgRef = useRef();
  const passwordRef = useRef();

  return (
    <Container>
      <FormInput
        icon="account-box"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite o nome"
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current.focus()}
        value={name}
        onChangeText={setName}
      />

      <FormInput
        icon="mail-outline"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite o e-mail"
        returnKeyType="next"
        ref={emailRef}
        onSubmitEditing={() => cpfRef.current.focus()}
        value={email}
        onChangeText={setEmail}
      />

      <FormInput
        icon="account-circle"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite o CPF"
        returnKeyType="next"
        ref={cpfRef}
        onSubmitEditing={() => rgRef.current.focus()}
        value={cpf}
        onChangeText={setCpf}
      />

      <FormInput
        icon="account-circle"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite o RG"
        returnKeyType="next"
        ref={rgRef}
        onSubmitEditing={() => passwordRef.current.focus()}
        value={rg}
        onChangeText={setRg}
      />

      <FormInput
        icon="lock-outline"
        secureTextEntry
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite a Senha"
        returnKeyType="send"
        ref={passwordRef}
        onSubmitEditing={handleSubmit}
        value={password}
        onChangeText={setPassword}
      />

      <SubmitButton loading={loading} onPress={handleSubmit}>
        {buttonValue}
      </SubmitButton>
    </Container>
  );
}
