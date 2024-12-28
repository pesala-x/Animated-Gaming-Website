// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// eslint-disable-next-line react/prop-types
const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
    const buttonRef = useRef(null);
    const frameRef = useRef(null);

    const handleMouseMove = () => {
        const element = frameRef.current;

        if (!element) return;

        // Animate the button to a polygon shape on hover
        gsap.to(element, {
            duration: 0.5,
            clipPath: "polygon(4% 11%, 86% 22%, 96% 93%, 18% 87%)",
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        const element = frameRef.current;

        if (element) {
            // Revert to the original rectangle shape
            gsap.to(element, {
                duration: 0.5,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power1.out",
            });
        }
    };

    useEffect(() => {
        const button = buttonRef.current;
        if (button) {
            button.addEventListener("mousemove", handleMouseMove);
            button.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (button) {
                button.removeEventListener("mousemove", handleMouseMove);
                button.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div
            ref={frameRef}
            className="inline-block perspective-wrapper"
            style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Default rectangle shape
            }}
        >
            <button
                id={id}
                ref={buttonRef}
                className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
            >
                {leftIcon}
                <span className="button-text relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div>{title}</div>
        </span>
                {rightIcon}
            </button>
        </div>
    );
};

export default Button;
