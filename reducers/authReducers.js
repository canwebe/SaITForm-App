export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'AUTHREADY':
      return { isAuthReady: true, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'ADMIN_LOGIN':
      return { ...state, admin: action.payload }
    case 'ADMIN_LOGOUT':
      return { ...state, admin: null }
    default:
      return state
  }
}
