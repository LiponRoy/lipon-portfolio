import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
const Footer = () => {
	return (
		<div>
			<div className='py-12 mx-5 text-white bg-slate-800 flex flex-col justify-center items-center'>
				<span>Created By Lipon Roy </span>
				<span>©2019-2022 All rights reserved.</span>
				<div className='flex'>
					<div className='github m-2'>
						<a href='https://github.com/LiponRoy?tab=repositories' target='_blank'>
							<BsGithub size={25}></BsGithub>
						</a>
					</div>
					<div className='linkedin m-2'>
						<a href='https://www.linkedin.com/in/lipon-roy-b21614241/' target='_blank'>
							<BsLinkedin size={25}></BsLinkedin>
						</a>
					</div>
					<div className='facebook m-2'>
						<BsFacebook size={25}></BsFacebook>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
