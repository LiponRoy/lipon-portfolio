import React from 'react';
import { TbWorld } from 'react-icons/tb';
const Blog = () => {
	return (
		<div>
			<section class='text-gray-600 body-font mx-5'>
				<div className=' p-2 text-3xl text-center text-white mt-6 bg-slate-800'>
					<h1>My Blog</h1>
				</div>
				<div class='container py-8 mx-auto'>
					<div class='flex flex-wrap -m-4'>
						<div class='p-4 md:w-1/3 text-left'>
							<div class='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
								<div class='flex items-center mb-3'>
									<div class='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
										<TbWorld></TbWorld>
									</div>
									<h2 class='text-gray-900 text-lg title-font font-medium'>Web Design</h2>
								</div>
								<div class='flex-grow'>
									<p class='leading-relaxed text-base'>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
									<a class='mt-3 text-indigo-500 inline-flex items-center'>Learn More</a>
								</div>
							</div>
						</div>
						<div class='p-4 md:w-1/3 text-left'>
							<div class='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
								<div class='flex items-center mb-3'>
									<div class='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
										<TbWorld></TbWorld>
									</div>
									<h2 class='text-gray-900 text-lg title-font font-medium'>Front End Dev</h2>
								</div>
								<div class='flex-grow'>
									<p class='leading-relaxed text-base'>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
									<a class='mt-3 text-indigo-500 inline-flex items-center'>Learn More</a>
								</div>
							</div>
						</div>
						<div class='p-4 md:w-1/3 text-left'>
							<div class='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
								<div class='flex items-center mb-3'>
									<div class='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
										<TbWorld></TbWorld>
									</div>
									<h2 class='text-gray-900 text-lg title-font font-medium'>Mern Stack Dev</h2>
								</div>
								<div class='flex-grow'>
									<p class='leading-relaxed text-base'>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
									<a class='mt-3 text-indigo-500 inline-flex items-center'>Learn More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;
