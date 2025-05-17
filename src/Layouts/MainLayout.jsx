import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;