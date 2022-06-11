import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { BsStack } from 'react-icons/bs';
import { BsBack } from 'react-icons/bs';
import { SiAntdesign } from 'react-icons/si';
const MyServices = () => {
	return (
		<div>
			<div className='mx-5 p-2 text-3xl text-center text-white mt-6 bg-slate-800'>
				<h1>My Services</h1>
			</div>
			<div className=' grid grid-cols md:grid-cols-2 lg:grid-cols-3 flex justify-center items-center'>
				<div class='p-4 '>
					<div class='h-full hover:bg-gray-800 hover:text-white bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center'>
						<FaPaintBrush size={50}></FaPaintBrush>

						<h1 class='mt-2  title-font sm:text-2xl text-xl font-medium  mb-3'>Website Design</h1>
						<p class='leading-relaxed mb-3'>A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is zalso good</p>
					</div>
				</div>
				<div class='p-4 '>
					<div class='mt-2 h-full hover:bg-gray-800 hover:text-white bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center'>
						<FaReact size={50}></FaReact>

						<h1 class='mt-2  title-font sm:text-2xl text-xl font-medium  mb-3'>Frontend Development</h1>
						<p class='leading-relaxed mb-3'>I'm a Front End Engineer based in React JS . I describe myself as a passionate developer who loves coding, open source, and the web platform.</p>
					</div>
				</div>
				<div class='p-4 '>
					<div class=' h-full hover:bg-gray-800 hover:text-white bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center'>
						<IoLogoJavascript size={50}></IoLogoJavascript>

						<h1 class='mt-2 title-font sm:text-2xl text-xl font-medium  mb-3'>Javascript Development</h1>
						<p class='leading-relaxed mb-3'>A JavaScript developer is a professional software developer who specializes in the JavaScript programming language.It use for developing websites and web apps.</p>
					</div>
				</div>
				<div class='p-4 '>
					<div class=' h-full hover:bg-gray-800 hover:text-white bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center'>
						<BsStack size={50}></BsStack>

						<h1 class='mt-2 title-font sm:text-2xl text-xl font-medium  mb-3'>Mern Stack Development</h1>
						<p class='leading-relaxed mb-3'>following the traditional 3-tier architectural pattern, including the front-end display tier (React. js), application tier (Express. js and Node. js), and database tier (MongoDB)..</p>
					</div>
				</div>
				<div class='p-4 '>
					<div class='h-full hover:bg-gray-800 hover:text-white bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center'>
						<BsBack size={50}></BsBack>

						<h1 class='mt-2 title-font sm:text-2xl text-xl font-medium  mb-3'>Backend Development</h1>
						<p class='leading-relaxed mb-3'>Backend Development build code that allows a database and an application to communicate with one another. Backend Development take care and maintain the back-end of a website, Including databases, servers.</p>
					</div>
				</div>
				<div class='p-4 '>
					<div class='h-full hover:bg-gray-800 hover:text-white bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col justify-center items-center'>
						<SiAntdesign size={50}></SiAntdesign>

						<h1 class='mt-2 title-font sm:text-2xl text-xl font-medium  mb-3'>Website Re-Design</h1>
						<p class='leading-relaxed mb-3'>If your existing design isn't userfriendly or look like not so good so i can do it marvelous design in a very short time.If your website under too bugs and doesn't work properly, you can fix it also</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyServices;
