import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose  } from 'react-icons/ai';
const NavBar = () => {
    const [open,setOpen]=useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/products/:id', name: 'ProductDetail' },
        { id: 5, path: '*', name: 'NotFound' }
    ];


    return (
        <nav className="text-blake bg-yellow-200 p-6">
            <div className="md:hidden text-2xl " onClick={()=> setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> :  <AiOutlineMenu className=""></AiOutlineMenu >
                }
           
            </div>
            <ul className={`md:flex mr-10 duration-1000 absolute md:static
            ${open===true ? 'top-16' : '-top-60'}
             bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;