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
import SkillsMarquee from "./SkillsMarquee";




const Hero = () => {
    
    return (
        <section className="py-12 xl:py-2 bg-gradient-to-b from-blue-500 via-blue-300 to-yellow-100 dark:from-gray-800 dark:via-gray-900 dark:to-black">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif">
                            Hello, I'm Jiping
                        </h1>
                        <p className="max-w-[490px] mx-auto xl:mx-0 xl:text-lg py-2 text-primary mb-8 font-serif font-semibold">
                            Cloud/Software Engineer, DA/DE, Salesforce.
                        </p>

                        {/* buttons */}
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-8 mx-auto xl:mx-0 mb-8">
                            <Link href='/contact'>
                                <Button className='gap-x-2 text-sm'>
                                    Contact me
                                    <Send size={14} />
                                </Button>
                            </Link>
                            <Button asChild variant='secondary' className='gap-x-2 text-sm'>
                                <a href='/Jiping-Cui-CV.pdf' download>
                                    Download CV
                                    <Download size={14} />
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
                            containerStyles=' w-[380px] h-[340px] bg-no-repeat relative bg-bottom'
                            imgSrc='/images/developer.png'
                        />
                    </div>
                </div>
            </div>
            <SkillsMarquee />

        </section>
    );
};

export default Hero;