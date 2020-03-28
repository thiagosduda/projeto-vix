export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: { token },
  };
}

export function signUpRequest(name, email, cpf, rg, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, cpf, rg, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
