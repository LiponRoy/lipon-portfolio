import React from 'react';
import Blog from '../blog/Blog';
import CardMy from '../cardMy/CardMy';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyServices from '../myServices/MyServices';
import CardThree from '../Projects/CardThree';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<MyServices></MyServices>
			<CardThree></CardThree>
			<Blog></Blog>
			<Footer></Footer>
		</div>
	);
};

export default Home;
