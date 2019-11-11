const initialState = {
  user: {
    id: null,
    account_id: "",
    email: "",
    accepts_marketing: null,
    name: "",
    address: "",
    zip: "",
    state: "",
    country: "",
    business_name: "",
    website_url: "",
    phone_number: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      console.log("action", action);
      return {
        ...state,
        user: Object.assign(state.user, action.payload)
      };
    default:
      return state;
  }
}
