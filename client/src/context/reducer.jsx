import {} from "./actions";

const reducer = (state, action) => {
  throw new Error(`Ingen tilsvarende action : ${action.type}`);
};

export default reducer;
