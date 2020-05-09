let state = {};
const userReducer = (state, action) =>{
  console.log('action -- 04');
  console.log(action);
  console.log('action -- 04');
switch (action.type) {
    case "USER_FETCH_REQUESTED":
    return { ...state, response: null, loading: true }
    case "USER_FETCH_SUCCEEDED":
     return { ...state, response: action.response, loading: false }
    default:
      return {
        response: "No Response"
      };
  }
}
 
export default userReducer;
 