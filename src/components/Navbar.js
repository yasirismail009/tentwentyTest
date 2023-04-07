import React from 'react';

const Navbar = () => {
  return (
    <div className='parent_navbar'> 
      <div className="navbar">
    <div className='navbar-left-group'>
  <div className="navbar-item">About</div>
  <div className="navbar-item">News</div>
  <div className="navbar-item">Services</div>
  <div className="navbar-item">Our Team</div>
  <div className="navbar-item">Make Enquiry</div>
  </div>
  <div className='navbar-right-group'>
    <div className='btn'>
<p>Contact Us</p>
<svg width="20" height="10" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8L1 8M19 8L12.25 15M19 8L12.25 1" stroke="#221F20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    <div className='hamburger_icon'>
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="47" height="47" fill="#F9F4EE" stroke="#F9F4EE"/>
<line x1="13" y1="16.5" x2="35" y2="16.5" stroke="#221F20"/>
<line x1="15" y1="23.5" x2="33" y2="23.5" stroke="#221F20"/>
<line x1="13" y1="30.5" x2="35" y2="30.5" stroke="#221F20"/>
</svg>
</div>
    </div>
</div></div>
   
  );
};

export default Navbar;