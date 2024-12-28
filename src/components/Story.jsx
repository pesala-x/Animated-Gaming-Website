import gsap from "gsap";
import {useRef} from "react";
import AnimatedTitle from "./AnimatedTitle.jsx";
import RoundedCorners from "./RoundedCorners.jsx";

const Story = () => {
    const frameRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // rotate between image center
        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        const element = frameRef.current;

        if (element) {
            gsap.to(element, {
                duration: 0.3,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.inOut",
            });
        }
    };

    return (
        <section id='story' className='min-h-dvh w-screen bg-black text-blue-50 '>
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    the open ip Universe
                </p>

                {/*Animated title*/}
                <div className="relative size-full">
                    <AnimatedTitle
                        title='the st<b>o</b>ry of <br/> T<b>h</b>e hidden W<b>o</b>rld'
                        sectionId='#story'
                        containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'
                    />
                    {/*Story Image holder*/}
                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                    ref={frameRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    src="/img/entrance.webp"
                                    alt="entrance.webp"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <RoundedCorners />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story
