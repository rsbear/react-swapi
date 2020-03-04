import React from "react";
import { useTypeFilter } from "../hooks/useTypeFilter";

const withData = () => DataComponent => {
  const WithData = () => {
    const [state, dispatch, handlers] = useTypeFilter();
    return (
      <>
        <DataComponent state={state} dispatch={dispatch} handlers={handlers} />
      </>
    );
  };
  return WithData;
};
export default withData;
