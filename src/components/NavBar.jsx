import {useEffect, useRef, useState} from "react";
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";
import {useWindowScroll} from "react-use";
import gsap from "gsap";

// Nav right array values
const navItems = ['Roit Games', 'Universe', 'News', 'About', 'Contact' ];

const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        if(isAudioPlaying) {
            audioElementRef.current.play();
        }else {
            audioElementRef.current.pause();
        }
    },[isAudioPlaying])

    useEffect(() => {
        if (currentScrollY === 0) {
            // Topmost position: show navbar without floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            // Scrolling down: hide navbar and apply floating-nav
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up: show navbar with floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);


    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                {/*LeftSide of the navBar logo and Product button*/}
                    <div className='flex items-center gap-7'>
                        <img
                            src='/img/logo_icon_2.png'
                            alt='logo'
                            className='w-24'
                        />
                        <Button
                            id='product-button'
                            title='Discover'
                            rightIcon={<TiLocationArrow/>}
                            containerClass='bg-blue-50 md:flex hidden items-center justify-center gap-1'
                        />
                    </div>

                {/* Right Side of the navBar with audio Button */}
                    <div className='flex h-full items-center'>
                        {/*this div for smaller devices*/}
                        <div className='hidden md:block'>
                            {/* nav items with declared array*/}
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-10 flex items-center space-x-0.5"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/loop3.mp3"
                                loop
                            />
                            {/*audio indicator bar declare with array 6 bars*/}
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default NavBar
