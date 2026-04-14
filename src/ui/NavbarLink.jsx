import { NavLink } from "react-router";

const NavbarLink = ({to,children}) => {
  return (
  <NavLink to={to} className={`btn btn-ghost font-medium text-[#64748B] `} >
    {children}
  </NavLink>
  );
};

export default NavbarLink;