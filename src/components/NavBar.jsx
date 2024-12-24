import {useRef} from "react";
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";

const NavBar = () => {
    const navContainerRef = useRef(null);

    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                {/*LeftSide of the navBar logo and Product button*/}
                    <div className='flex items-center gap-7'>
                        <img
                            src='/img/logo.png'
                            alt='logo'
                            className='w-10'
                        />
                        <Button
                            id='product-button'
                            title='Products'
                            rightIcon={<TiLocationArrow/>}
                            containerClass='bg-blue-50 md:flex hidden items-center justify-center gap-1'
                        />
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default NavBar
