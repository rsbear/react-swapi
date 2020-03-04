import React, { useState } from "react";
import { useHover } from "../hooks/useHover";

const withHover = Component => {
  const WithHover = () => {
    const [hoverRef, hovering] = useHover();
    return (
      <div>
        <Component ref={hoverRef} hovering={hovering} />
      </div>
    );
  };
  return WithHover;
};

export default withHover;
