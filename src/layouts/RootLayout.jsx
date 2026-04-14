import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      
<h2>Navbar</h2>
      <Outlet/>
<h2>Footer</h2>
    </>
  );
};

export default RootLayout;