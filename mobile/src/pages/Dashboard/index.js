import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '../../store/modules/auth/actions';
import api from '../../services/api';

import User from '../../components/Users';
import {
  Container,
  Logout,
  LogoutText,
  List,
  AddButton,
  AddButtonText,
} from './styles';

function Dashboard({ navigation, isFocused }) {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const response = await api.get('users');

    setUsers(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadUsers();
    }
  }, [isFocused]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Logout onTouchEnd={handleLogout}>
        <Icon name="exit-to-app" size={20} color="#FF0000" />
        <LogoutText> Logout </LogoutText>
      </Logout>
      <List
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <User user={item} name={item.name} navigate={navigation.navigate} />
        )}
      />

      <AddButton onPress={() => navigation.navigate('AddUser')}>
        <AddButtonText> Adicionar Usuário </AddButtonText>
      </AddButton>
    </Container>
  );
}

Dashboard.navigationOptions = {
  title: 'Dashboard',
  headerStyle: {
    backgroundColor: '#3b9eff',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerBackTitleVisible: false,
};

export default withNavigationFocus(Dashboard);
