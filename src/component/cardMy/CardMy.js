import React from 'react';
import './CardMy.css';
import Project1 from '../../asset/model.jpg';
const CardMy = () => {
	return (
		<div className='cardContain'>
			<div className=''>
				<img className='imagePart' src={Project1} alt='no image' />
			</div>
			<div className='TextPart'>
				<span className='TextHeading'>Sould Out</span>
				<p className='TextDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero debitis corrupti cupiditate explicabo illum a atque molestiae eveniet voluptatem quas aperiam hic est officiis asperiores exercitationem, praesentium iste sed.</p>
			</div>
			<div className='BtnPart'>
				<a href='https://github.com/LiponRoy/LR-Furniture-server-side' class='m-2 text-lg'>
					Server
				</a>
			</div>
		</div>
	);
};

export default CardMy;
