import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose, FaSearch } from 'react-icons/fa';
import './Navbar.css';
const NavbarTwo = () => {
	const [showLinks, setShowLink] = useState(false);

	const closeFunc = () => {
		setShowLink(false);
	};
	return (
		<>
			{/* <div className='w-full fixed z-50'></div> */}
			<div className='w-full'>
				<div className='liponNav w-full'>
					<div className='leftSide'>
						<div className='logo'>
							<h4>Lipon Roy </h4>
						</div>
					</div>

					<div className='rightSide'>
						<div className='toggleBut' onClick={() => setShowLink(!showLinks)}>
							{showLinks ? <FaRegWindowClose></FaRegWindowClose> : <FaBars></FaBars>}
						</div>
						<div className='allLink' id={showLinks ? 'notHidden' : ''}>
							<NavLink onClick={closeFunc} className={({ isActive }) => (isActive ? ' active-myLink' : ' myLink')} to='/'>
								Home
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
