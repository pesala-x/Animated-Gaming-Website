// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// eslint-disable-next-line react/prop-types
const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
    const buttonRef = useRef(null);
    const frameRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 5;
        const centerY = rect.height / 5;

        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.5,
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
                duration: 0.5,
                rotateX: 0,
                rotateY: 0,
                ease: "power3.out",
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
        <div ref={frameRef} className="inline-block perspective-wrapper">
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
