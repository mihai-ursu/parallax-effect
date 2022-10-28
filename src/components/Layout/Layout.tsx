import LayoutProps from "./LayoutProps";
import { FunctionComponent } from "react";
import Header from "./Header/Header";

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
