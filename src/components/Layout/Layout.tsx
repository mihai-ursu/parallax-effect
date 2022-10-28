import LayoutProps from "./LayoutProps";
import Header from "./Header/Header";

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
