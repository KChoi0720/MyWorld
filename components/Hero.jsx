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
        <section className="py-12 xl:py-24 h-[60vh] xl:pt-28 bg-hero bg-no-repeat 
  bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
            text-center xl:text-left">
                        <div className="text-1xl uppercase font-semibold mb-4 text-primary tracking-[4px]">Software Engineer</div>
                        <h1 className="h1">Hello, I'm Kevin</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                            I love Full-stack, Cloud, Data Analytics and Salesforce.
                        </p>


                        {/* buttons */}
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Contact me
                                    <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant='secondary' className='gap-x-2'>
                                Download CV
                                <Download size={18} />
                            </Button>
                        </div>
                        {/* Socials */}
                        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                        iconsStyles='text-foreground text-[22px] hover:text-primary
                        transition-all' 
                        />
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex relative">
                        {/* badge 1 */}
                        {/* <Badge icon={<RiBriefcaseFill />} endCountNum={3} badgeText='Years of 3 Experiences'/> */}

                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] 
                        bg-no-repeat absolute -top-1 -right-2">
                        </div>
                        <DevImg containerStyles=' bg-hero_shape w-[500px] h-[500px] bg-no-repeat 
                        relative bg-bottom -top-3 right-3' imgSrc='/images/developer.png'/>

                    </div>
                </div>
                {/* icon */}
                <div className="hidden md:flex">
                    <RiArrowDownSLine className='text-3xl text-primary mx-auto' />
                </div>
            </div>
        </section>
    );
};

export default Hero
