import React from 'react';
import beauty from '../../asset/01.jpg';
const Header = () => {
	return (
		<div>
			<section class='text-gray-600 body-font'>
				<div class='min-h-screen container mx-auto flex px-5 py-5 md:flex-row flex-col items-center'>
					<div class='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<div class='object-cover object-center md:hidden '>
							<div class='w-48 m-2'>
								<img className='rounded-2xl' src={beauty} />
							</div>
						</div>
						<h1 class='title-font sm:text-1xl text-4xl mb-4 font-medium text-gray-900'>
							Hi, I'm Lipon Roy
							<br class='hidden lg:inline-block' />
						</h1>
						<h1 class='title-font sm:text-1xl text-2xl mb-4 font-medium text-gray-900'>
							MERN stack developer
							<br class='hidden lg:inline-block' />
						</h1>
						<p class='mb-4 leading-relaxed'>Hi I am a Mern Stack developer And I can build your website as you want. I can build website Single Page Web Application. Now I am able to design your portfolio.</p>
						<p class='mb-8 leading-relaxed'>Creative problem solver with demonstrated ability to work on multiple projects simultaneously.Positive driven and confident individual with an apt for learning new technology.</p>
						<div class='flex justify-center'>
							<button href='https://drive.google.com/drive/u/0/folders/1pEIiSHTrgcO79BQCZR76WAF7ApLKCRQw' class='btn mr-2'>
								MY RESUME
							</button>
							<button class='btn'>HIRE ME</button>
						</div>
					</div>
					<div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block'>
						<img class='object-cover object-center rounded-2xl' alt='hero' src={beauty} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;
