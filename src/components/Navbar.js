import React from 'react';
import NavbarItem from "@/components/NavbarItem";

const Navbar = () => {
    return (
        <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
            <NavbarItem title='Популярные' param='fetchTrending'/>
            <NavbarItem title='наивысший рейтинг' param='fetchTopRated'/>
        </div>
    );
};

export default Navbar;
