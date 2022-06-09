import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MajBorabor from '../MajBorabor';
import WhatIDo from '../WhatIDo';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<WhatIDo></WhatIDo>
			{/* <MajBorabor></MajBorabor> */}
			<Footer></Footer>
		</div>
	);
};

export default Home;
