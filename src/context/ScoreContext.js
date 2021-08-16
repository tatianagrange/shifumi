import createDataContext from "./createDataContext";
import uuid from "react-native-uuid";

const scoreReducer = (state, action) => {
  switch (action.type) {
    case "add_score":
      if(action.payload === "")
        return state;
      console.log(action.payload)
      action.payload.date = new Date();
      action.payload.id = uuid.v4();
      return { ...state, scores: [...state.scores, action.payload] };
    default:
      return state;
  }
};

const addScore = (dispatch) => (score) => {
  dispatch({ type: "add_score", payload: score });
};

export const { Provider, Context } = createDataContext(
  scoreReducer,
  { addScore },
  { scores: [{ date: new Date() , result: "Perdu"}] }
);
