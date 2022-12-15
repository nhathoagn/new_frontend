import {NavLink} from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import {RiSpaceShipFill} from "react-icons/ri";
const Nav = () =>{
    return (
        <div className='flex fixed top-0 w-screen bg-white px-1 sm:px-2 md:px-4 z-[100] items-center dark:bg-[#242526] transition-50 dark:text-[#DDDFE3] border-b-[#8a8a8a] py-1 '>
            <ul
                className='hidden md:flex  items-center justify-between text-white dark:text-[#B8BBBF] text-[25px] min-w-[33%] '
                style={{flex: "1 1 auto"}}>
                <>
                    <NavLink
                        to='/'
                        className={`relative bg-inherit text-[#c96c88] py-2 md:py-2.5 my-1 mx-1 shrink-1 w-full flex justify-center hover:text-[#c24269] hover:bg-[#EBEDF0] rounded-[10px] text-[23px] transition-20 after:content-[''] after:absolute after:h-[3px] after:w-[70%] after:left-[15%] after:bg-[#c24269] after:opacity-0 after:bottom-0 -['Home']  before:rounded-lg dark:bg-inherit before:opacity-0 dark:text-[#B8BBBF] dark:hover:bg-[#3A3B3C] dark:hover:text-[#d2d5d7] `}
                        role='button'>
                        <AiFillHome />
                    </NavLink>
                    <NavLink
                        to='/login'
                        className={`relative bg-inherit text-[#26A69A] py-2 md:py-2.5 my-1 mx-1 shrink-1 w-full flex justify-center hover:text-[#00897B] hover:bg-[#EBEDF0] rounded-[10px] text-[23px] transition-20 after:content-[''] after:absolute after:h-[3px] after:w-[70%] after:left-[15%] after:bg-[#26A69A] after:opacity-0 after:bottom-0 -['Home']  before:rounded-lg dark:bg-inherit before:opacity-0 dark:text-[#B8BBBF] dark:hover:bg-[#3A3B3C] dark:hover:text-[#d2d5d7] `}
                        role='button'>
                        <RiSpaceShipFill />
                    </NavLink>
                    <NavLink
                        to='/register'
                        className={`relative bg-inherit text-[#607D8B] py-2 md:py-2.5 my-1 mx-1 shrink-1 w-full flex justify-center hover:text-[#455A64] hover:bg-[#EBEDF0] rounded-[10px] text-[23px] transition-20 after:content-[''] after:absolute after:h-[3px] after:w-[70%] after:left-[15%] after:bg-[#607D8B] after:opacity-0 after:bottom-0 -['Home']  before:rounded-lg dark:bg-inherit before:opacity-0 dark:text-[#B8BBBF] dark:hover:bg-[#3A3B3C] dark:hover:text-[#d2d5d7] `}
                        role='button'>
                        <RiSpaceShipFill className='rotate-180' />
                    </NavLink>
                </>

            </ul>
        </div>
    )
}
export  default Nav
