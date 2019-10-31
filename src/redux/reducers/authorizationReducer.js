export const authorizationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_AUTHORIZATION':
      return action.authorization;
    default:
      return state;
  }
}
