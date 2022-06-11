import React from 'react';
import beauty from '../../asset/01.jpg';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
const Header = () => {
	return (
		<div>
			<section class='text-gray-600 body-font'>
				<div class='relative bg-slate-900 min-h-screen container mx-auto flex px-5 py-5 md:flex-row flex-col items-center'>
					<div class='text-white lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<div class='object-cover object-center md:hidden '>
							<div class='w-48 m-2'>
								<img className='rounded-2xl' src={beauty} />
							</div>
						</div>
						<h1 class='title-font sm:text-1xl text-4xl mb-4 font-medium '>
							Hi, I'm Lipon Roy
							<br class='hidden lg:inline-block' />
						</h1>
						<h1 class='title-font sm:text-1xl text-2xl mb-4 font-medium '>
							MERN stack developer
							<br class='hidden lg:inline-block' />
						</h1>
						<p class='mb-4 leading-relaxed'>Hi I am a Mern Stack developer And I can build your website as you want. I can build website Single Page Web Application. Now I am able to design your portfolio.</p>

						<p class='mb-4 leading-relaxed'>Creative problem solver with demonstrated ability to work on multiple projects simultaneously.Positive driven and confident individual with an apt for learning new technology.</p>
						<div className='mb-4 socialLink'>
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
						<div class='flex justify-center'>
							<a href='https://drive.google.com/drive/u/0/folders/1pEIiSHTrgcO79BQCZR76WAF7ApLKCRQw' target='_blank' class='btn mr-2'>
								MY RESUME
							</a>
							<button class='btn'>HIRE ME</button>
						</div>
					</div>
					<div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block'>
						<img class='object-cover object-center rounded-2xl' alt='hero' src={beauty} />
					</div>
					<div className='myBubble absolute top-7 left-7 w-10 h-10 lg:w-40 lg:h-40 bg-white rounded-full opacity-20'></div>
					<div className='myBubble absolute top-2 left-2 w-10 h-10 lg:w-40 lg:h-40 bg-white rounded-full opacity-10'></div>
					<div className='myBubble absolute top-2 left-2 w-20 h-20 lg:w-60 lg:h-60 bg-white rounded-full opacity-5'></div>
				</div>
			</section>
		</div>
	);
};

export default Header;
