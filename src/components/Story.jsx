import AnimatedTitle from "./AnimatedTitle.jsx";

const Story = () => {
    return (
        <section id='story' className='min-h-dvh w-screen bg-black text-blue-50 '>
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    the open ip Universe
                </p>

                {/*Animated title*/}
                <div className="relative size-full">
                    <AnimatedTitle
                        title='the st<b>o</b>ry of <br/> a hidden W<b>o</b>rld'
                        sectionId='#story'
                        containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'
                    />
                    {/*Story Image holder*/}
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story
