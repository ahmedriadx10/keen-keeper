import { GoHome } from 'react-icons/go';
import logo from '../../assets/images/logo.png'
import NavbarLink from '../../ui/NavbarLink';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa';
const Navbar = () => {
  const navLinks=<>
  
  <li>  <NavbarLink to={'/'}><GoHome className='text-xl' /> <span>Home</span></NavbarLink></li>
<li>  <NavbarLink to={'timeline'} ><MdOutlineAccessTime className='text-xl' /> <span>Timeline</span></NavbarLink></li>
<li>  <NavbarLink to={'stats'}><FaChartLine className='text-xl' /> <span>Stats</span> </NavbarLink></li>
  </>

  return (
    <nav className='md:flex justify-between items-center py-4 px-2.5 md:px-5 lg:px-10 xl:px-20 shadow '>

<div className='flex justify-between items-center'>
       <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
{navLinks}
      </ul>
    </div>
<div>
<img src={logo} alt="Keen keeper logo" />
</div>
</div>


<div className='hidden md:block'>
<ul className='flex gap-1.5'>{navLinks}</ul>
</div>

    </nav>
  );
};

export default Navbar;