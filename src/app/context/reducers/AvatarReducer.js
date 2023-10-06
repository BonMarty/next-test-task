export default function AvatarReducer(state, action) {
  switch (action.type) {
    case "SET_AVATAR":
      return {
        avatar: action.payload,
      };

    default:
      return state;
  }
}
