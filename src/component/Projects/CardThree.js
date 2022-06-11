import React from 'react';
import Project1 from '../../asset/pro1.JPG';
import Project2 from '../../asset/pro2.JPG';
import Project3 from '../../asset/pro3.JPG';
import CardMy from '../cardMy/CardMy';
const CardThree = () => {
	return (
		<div>
			<div className='mx-5 p-2 text-3xl text-center text-white mt-6 bg-slate-800'>
				<h1>My Projects</h1>
			</div>
			<div className=' grid grid-cols md:grid-cols-2 lg:grid-cols-3 flex justify-center items-center'>
				<div class='p-4 '>
					<div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
						<img class='lg:h-80 md:h-80 w-full object-cover object-center' src={Project1} alt='blog' />
						<div class='p-6'>
							<h1 class='title-font text-lg font-medium text-gray-900 mb-3'>LR-FURNITURE</h1>
							<p class='leading-relaxed mb-3'>
								Furniture Buying type application . Include react routing, protected routing and Used Google Firebase Auth, include signup, login, reset password, email verification and so on.<br></br> Technology used : <br></br>HTML,CSS, BOOTSTRAP, REACT JS, FIREBASE and so on
							</p>
							<div class='flex justify-center items-center flex-wrap '>
								<a class='btn btn-sm m-2' href='https://lr-furniture.web.app/' target='_blank'>
									Live
								</a>
								<a class='btn btn-sm m-2' href='https://github.com/LiponRoy/LR-Furniture-client-side' target='_blank'>
									Clint
								</a>
								<a class='btn btn-sm m-2' href='https://github.com/LiponRoy/LR-Furniture-server-side' target='_blank'>
									Server
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class='p-4 '>
					<div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
						<img class='lg:h-80 md:h-80 w-full object-cover object-center' src={Project2} alt='blog' />
						<div class='p-6'>
							<h1 class='title-font text-lg font-medium text-gray-900 mb-3'>LR-PHOTOGRAPHY</h1>
							<p class='leading-relaxed mb-3'>
								Independent-Photography-Service application . include react routing, protected routing and Used Google Firebase Auth, include signup, login, reset password, email verification.<br></br> Technology used :<br></br> HTML,CSS, BOOTSTRAP, REACT JS, FIREBASE. and so on.
							</p>
							<div class='flex justify-center items-center flex-wrap '>
								<a class='btn btn-sm m-2' href='https://react-firebase-auth-lipon.web.app/' target='_blank'>
									Live
								</a>
								<a class='btn btn-sm m-2' href='https://github.com/LiponRoy/LR-Photography' target='_blank'>
									Clint
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class='p-4 '>
					<div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
						<img class='lg:h-80 md:h-80 w-full object-cover object-center' src={Project3} alt='blog' />
						<div class='p-6'>
							<h1 class='title-font text-lg font-medium text-gray-900 mb-3'>PICK YOUR MONITOR</h1>
							<p class='leading-relaxed mb-3'>
								Simple cart system, choose product and add to cart, remove all product from cart and so on.The fundamental function of a cart is the ability to add products. <br></br> Technology used:<br></br> HTML,CSS, REACT JS.
							</p>
							<div class='flex justify-center items-center flex-wrap '>
								<a class='btn btn-sm m-2' href='https://musical-sprite-62cf1f.netlify.app/' target='_blank'>
									Live
								</a>
								<a class='btn btn-sm m-2' href='https://github.com/LiponRoy/pick-your-monitor' target='_blank'>
									Clint
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardThree;
