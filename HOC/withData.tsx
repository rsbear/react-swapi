import React from "react";
import { useTypeFilter } from "../hooks/useTypeFilter";

const test = (props: any) => {
  const [state, dispatch] = useTypeFilter();
  return [state, dispatch];
};

const withData = (WrappedComponent: any) => {
  return function wrappedRender(args: any) {
    return WrappedComponent(test(args));
  };
};

export default withData;
