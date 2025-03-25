import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
    RiBriefcaseFill,
} from 'react-icons/ri';

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import react from "react"



const Hero = () => {
    
    return (
        <section className="py-12 xl:py-2 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif">
                            Hello, I'm Jiping
                        </h1>
                        <p className="max-w-[490px] mx-auto xl:mx-0 xl:text-lg py-2 text-primary mb-10 ">
                            Cloud/Software Engineer, DA/DE, Salesforce.
                        </p>

                        {/* buttons */}
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-8 mx-auto xl:mx-0 mb-16">
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Contact me
                                    <Send size={18} />
                                </Button>
                            </Link>
                            <Button asChild variant='secondary' className='gap-x-2'>
                                <a href='/Jiping-Cui-CV.pdf' download>
                                    Download CV
                                    <Download size={18} />
                                </a>
                            </Button>
                        </div>


                        {/* Socials */}
                        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary
                        transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className='hidden xl:flex relative'>
                        <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                        <DevImg
                            containerStyles=' w-[400px] h-[360px] bg-no-repeat relative bg-bottom'
                            imgSrc='/images/developer.png'
                        />
                    </div>
                </div>
                {/* icon */}
                {/* <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div> */}
            </div>
        </section>
    );
};

export default Hero;