import MenuItem from "@/components/MenuItem";
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "@/components/DarkModeSwitch";


const Header = () => {
    return (
        <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center sm:py-6 px-2'>

            <div className="flex">

                <MenuItem
                title="На главную"
                address='/'
                Icon={AiFillHome}
                />

                <MenuItem
                    title="О проекте"
                    address='/about'
                    Icon={BsFillInfoCircleFill}
                />

            </div>

            <div className="flex items-center space-x-5">

                <DarkModeSwitch/>

                <Link href='/'>

                    <h2 className='text-2xl'>

                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>
                            Фильмы
                        </span>

                        <span className='text-xl hidden sm:inline'>
                            api
                        </span>

                    </h2>

                </Link>

            </div>
        </div>
    );
};

export default Header;
