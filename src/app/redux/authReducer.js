import { setToken, removeToken, getToken } from './hepers';

const initialState = {
  isAuthenticated: false,
  user: null, // Puedes almacenar otros datos del usuario aquí si es necesario
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const { user, token } = action.payload;
      setToken(token);

      return {
        ...state,
        isAuthenticated: true,
        user,
        token,
      };

    case 'LOGOUT':
      removeToken();

      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };

    case 'UPDATE_TOKEN':
      const newToken = action.payload;
      setToken(newToken);

      return {
        ...state,
        token: newToken,
      };

    default:
      return state;
  }
};

export  {authReducer};