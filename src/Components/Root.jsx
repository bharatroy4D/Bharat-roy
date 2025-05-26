import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import TopScroll from './TopScroll/TopScroll';

const Root = () => {
    return (
        <div>
            <TopScroll/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;