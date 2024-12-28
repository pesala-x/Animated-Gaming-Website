import React from 'react'
import Button from "./Button.jsx";

// eslint-disable-next-line react/prop-types
const ImageClipBox = ({src, clipClass}) => (
    <div className={clipClass}>
        <img
            src={src}
        />
    </div>
)

const Contact = () => {
    return (
        <div id="Contact" className='my-20 min-h-96 w-screen px-10 '>
            {/*black card-bg*/}
            <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
                {/*image holder 1*/}
                <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                    <ImageClipBox
                        clipClass='contact-clip-path-1'
                        src='/img/contact-1.webp'
                    />
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>
                {/*image holder 2*/}
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/img/swordman-partial.webp"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/swordman.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-[10px] uppercase">
                        Join With Legends
                    </p>

                    <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]'>
                        let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether.
                    </p>

                    <Button
                        title='Contact Us'
                        containerClass='mt-10 cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}
export default Contact
