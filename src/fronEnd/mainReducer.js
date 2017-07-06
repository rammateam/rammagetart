function mainReducer(state = [], action) {
  switch (action.type) {
  case 'GET_IMAGES':
    return action.payload;
  case 'GET_IMAGES_FAILURE':
    return state;
  default:
    return state;
  }
}
export {
mainReducer};
