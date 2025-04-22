import React from 'react';
import Navbar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1 className='text-center text-5xl'>main</h1>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;