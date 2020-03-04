import React, { FC } from "react";
import withData from "../../hocs/withData";
import TitleBar from "../TitleBar";

const Layout: FC<any> = ({ children }) => {
  // const [state, dispatch] = useTypeFilter();

  return (
    <div>
      <TitleBar />
      {children}
    </div>
  );
};

export default Layout;
