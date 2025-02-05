import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

// eslint-disable-next-line react/prop-types
export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);
    // Mouse event to card hovering
    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        // tilt corner reaction mythology
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;
        // tilt corner reaction gages
        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        //tilt moving scale handler
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };
    // Mouse event to cursor move without card
    const handleMouseLeave = () => {
        setTransformStyle('')
    }

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

//  reusable BentoCards
// eslint-disable-next-line react/prop-types
export const BentoCard = ({ src, title, description, isComingSoon }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);

    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>

                {isComingSoon && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
                    >
                        {/* Radial gradient hover effect */}
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                            }}
                        />
                        <TiLocationArrow className="relative z-20" />
                        <p className="relative z-20">coming soon</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Features = () => (
    <section id='news' className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">
                    Into the Metagame Layer
                </p>
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                    Immerse yourself in a rich and ever-expanding universe where a vibrant
                    array of products converge into an interconnected overlay experience
                    on your world.
                </p>
            </div>
            {/*first Bento card */}
            <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                    src="videos/feature-1.mp4"
                    title={
                        <>
                            p<b>a</b>tch <b>n</b>otes
                            </>
                    }
                    description="New patch, new you? How about a new way of life?! David, John, and Ke show you the journey to YORDLE UP your life with patch 6.0! Coming to you on January 9th UTC."
                    isComingSoon
                />
            </BentoTilt>
            {/*second Bento card */}
            <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                        src="videos/feature-2.mp4"
                        title={
                            <>
                                A<b>m</b>bessa Cha<b>m</b>pion
                            </>
                        }
                        description="The age of Merdada is upon us. Bow to the warlord or get swept under her power on January 7th UTC!"
                        isComingSoon
                    />
                </BentoTilt>
                {/*third Bento card */}
                <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCard
                        src="videos/feature-3.mp4"
                        title={
                            <>
                                W<b>a</b>rwick Rew<b>o</b>rk
                            </>
                        }
                        description="Uncage the true wrath of Zaun with Warwick's new rework! Hitting the Rift on January 21st UTC!"
                        isComingSoon
                    />
                </BentoTilt>
                {/*fourth Bento card */}
                <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                    <BentoCard
                        src="videos/feature-4.mp4"
                        title={
                            <>
                                vikt<b>o</b>r ch<b>a</b>mpion
                            </>
                        }
                        description="The progress of the arcane is inevitable. Become part of it on December 12th UTC!"
                        isComingSoon
                    />
                </BentoTilt>
                {/*Final Cards*/}
                <BentoTilt className="bento-tilt_2">
                    <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                        <h1 className="bento-title special-font max-w-64 text-black">
                            M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
                        </h1>

                        <TiLocationArrow className="m-5 scale-[5] self-end" />
                    </div>
                </BentoTilt>

                {/*Bento card video*/}
                <BentoTilt className="bento-tilt_2">
                    <video
                        src="/videos/feature-5.mp4"
                        loop
                        muted
                        autoPlay
                        className="size-full object-cover object-center"
                    />
                </BentoTilt>
            </div>
        </div>
    </section>
);

export default Features;
