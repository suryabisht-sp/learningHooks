import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const ReducerHook = () => {
  const navigate = useNavigate();
  const initialState = {
    react: false,
    angular: false
  };

  const coursesReducer = (state, action) => {
    switch (action.type) {
      case "REACT":
        return { react: true };
      case "GRAPHQL":
        return { graphQL: true };
      case "ANGULAR":
        return { angular: true };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(coursesReducer, initialState);

  const handleReactPress = () => {
    dispatch({ type: "REACT" });
  };
  const handleAngularPress = () => {
    dispatch({ type: "ANGULAR" });
  };
  const handlehome = () => {
    navigate("/");
  };
  return (
    <div className="box">
      <h2>Use Reducer Example Component</h2>
      <p>
        Learning{" "}
        {state.react ? "React" : state.angular ? "Angular" : "Not Started"}
      </p>
      <div>
        <button
          type="button"
          onClick={handleReactPress}
          className="button is-grey"
        >
          React
        </button>
        <button
          type="button"
          onClick={handleAngularPress}
          className="button is-grey"
        >
          Angular
        </button>
        <button
          onClick={() => {
            handlehome();
          }}
        >
          Go home
        </button>
      </div>
    </div>
  );
};
