import footerLogo from '../../assets/images/logo-xl.png'
import facebookLogo from '../../assets/images/facebook.png'
import instaLogo from '../../assets/images/instagram.png'
import twitterLogo from '../../assets/images/twitter.png'
const Footer = () => {

  return (
    <footer className="pt-20 bg-(--primaryColor)">
<div className="max-w-6xl mx-auto w-[90%]">

  <div className='space-y-6'>
<div className='space-y-4 text-center'>
    <h6><img src={footerLogo} alt='footer logo keen keeper' className='mx-auto' /></h6>
<p className='text-[#ffffff]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  </div>  

<div className='text-center space-y-4'>
  <h6 className='text-xl font-medium text-white'>Social Links</h6>

  <div>
    <ul className='flex gap-3 justify-center'>
      <li><img src={instaLogo} alt="instagram logo" /></li>
      <li><img src={facebookLogo} alt="facebook logo" /></li>
      <li><img src={twitterLogo} alt="twitter logo" /></li>
    </ul>
  </div>
</div>

  </div>

<div className=' text-[#FAFAFA] mt-10 py-8 flex flex-wrap gap-6 justify-between border-t border-gray-600'>

<p>&copy;{new Date().getFullYear()} KeenKeeper. All rights reserved </p>

<ul className='flex justify-between  gap-10'>
                    
<li>Privacy Policy </li>
<li>Terms of Service </li>
<li>Cookies</li>
</ul>
</div>

</div>

      
    </footer>
  );
};

export default Footer;