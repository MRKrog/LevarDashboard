export const setEmail = email => ({
  type: "SET_EMAIL",
  email
});

export const setLoading = loading => ({
  type: "SET_LOADING",
  loading
});

export const updateUser = user => ({
  type: "UPDATE_USER",
  payload: user
});
