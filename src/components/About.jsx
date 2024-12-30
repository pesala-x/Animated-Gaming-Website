import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });
    return (
        <div id='about' className='min-h-screen w-screen '>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to League of Legends</h2>
                {/*about description*/}
                <AnimatedTitle
                    title='Disc<b>o</b>ver the world&#39;s <br/> largest shared <b>a</b>dventure'
                    containerClass='mt-2 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'
                />

                {/*game paragraphs*/}
                <div className='about-subtext'>
                    <p>The ultimate Game of Games begins.</p>
                    <p className='text-gray-500'>
                        Riot Games brings champions from every corner of the gaming universe together, bridging worlds across digital and physical realms to create a seamless Play Ecosystem where every player thrives.
                    </p>
                </div>
            </div>
            {/*clip*/}
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image '>
                    <img
                        src='/img/about-2.jpg'
                        alt='background'
                        className='absolute left-0 top-0 size-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}
export default About
