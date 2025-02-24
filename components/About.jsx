import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
    CreditCardIcon,
    SunIcon,
    CloudIcon,
    WorkflowIcon,
    FlagIcon,
    AlbumIcon,
    ServerIcon,
    ComputerIcon,
    Icon,
    CopyMinusIcon,
    KeyIcon,
    TagsIcon,
    UsersIcon,
    CaptionsIcon,
    CigaretteIcon,
    PersonStandingIcon,
    PresentationIcon,
    GitPullRequestIcon,
    PersonStanding,
    InfoIcon,
    Info,
    InfinityIcon,
    BadgeInfo,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Kevin"
    },
    {
        icon: <MailIcon size={20} />,
        text: "choicanlight@gmail.com"
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Base in Auckland"
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+64 210 857 3484"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Master on Computer Science"
    },
    // {
    //     icon: <Calendar size={20} />,
    //     text: "Born on 20 Jul, 1990"
    // },
]

const qualificationData = [
    {
        title: "experience",
        data: [
            {
                company: "SAL Technologies - NZ",
                role: "Data Engineer",
                years: "Oct.2024 - Jan.2015",
            },
            {
                company: "GFK - An NIQ Company - NZ",
                role: "Field Data Interviewer",
                years: "May.2024 - Present",
            },
            {
                company: "CBS Group - China",
                role: "Product Analyst",
                years: "Mar.2017 - Apr.2024",
            },
            {
                company: "CBS Industry Go.Ltd - China",
                role: "Salesforce Consultant",
                years: "Jun.2015 - Feb.2017",
            },
            {
                company: "DATANG Mobile - China",
                role: "Junior Software Engineer",
                years: "Jun.2014 - May.2015",
            },
            {
                company: "CHINA Mobile - China",
                role: "IT Technical Support",
                years: "Sep.2012 - May.2014",
            },
        ]
    },
    {
        title: "education",
        data: [
            {
                university: "Unitec Institute of Technology",
                qualification: "Master on Applied of Computing Technology",
                years: "2023 - 2024",
            },
            // {
            //     university: "Yanbian University",
            //     qualification: "Master on Computer Technology",
            //     years: "2012 - 2014",
            // },
            {
                university: "Yanbian University",
                qualification: "Bacherlor of Communication Engineering",
                years: "2008 - 2012",
            },
        ]

    }
]

const certificationData = [
    {
        title: "cert",
        data: [
            {
                institue: "AWS",
                name: [
                    "Solution Architect Professional",
                    "DevOps Professional",
                    "Developer Associate",
                    "Solution Architect Associate",
                    "AI Practitioner",
                ]
            },
            {
                institue: "Microsoft",
                name: [
                    "Azure Solution Architect Expert",
                    "Azure Administrator Associate",
                    "Power BI Associate",
                ]
            },
            {
                institue: "Salesforce",
                name: [
                    "Developer I",
                    "Administrator",
                    "AI Specialist",
                    "AI Associate",
                ]
            },
        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            { name: 'HTML, React.js, Tailwind CSS, TypeScript' },
            { name: 'Python, Node.js' },
            { name: 'Git, GitHub, GitHub Actions' },
            { name: 'SQL, MongoDB, MySQL, PostgreSQL' },
            { name: 'Docker, Kubernetes, Terraform AWS, Azure' },
            { name: 'Salesforce, Apex, Visualforce, Lightning' }
        ],
    },

    {
        title: 'tools',
        data: [
            { imgPath: '/about/vscode.svg' },
            { imgPath: '/about/figma.svg' },
            { imgPath: '/about/github.svg' },
            { imgPath: '/about/wordpress.svg' },

        ],
    },
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    About me
                </h2>

                {/* Wrapper: Personal Info & Experience */}
                <div className='flex flex-col xl:flex-row gap-1'>

                    {/* Personal Info */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-1 xl:max-w-[300px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                                    <InfoIcon size={28} className="mr-4" /> Personal Info
                                </TabsTrigger>
                                <h3 className='h3 mb-8 text-center xl:text-left'>
                                    {/* My Education History */}
                                </h3>
                                {/* Tabs Content */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-1 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                                        key={index}
                                                    >
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Education */}
                    <div className='flex-1'>
                        <Tabs defaultValue='education'>
                            <TabsList className='w-full grid xl:grid-cols-1 xl:max-w-[320px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>
                                    <GraduationCap size={28} className="mr-4" /> Education
                                </TabsTrigger>

                                {/* qualifications -> education */}
                                <TabsContent value='qualifications'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                            {/* My Education History */}
                                        </h3>
                                        <div className='grid md:grid-cols-1 gap-y-8'>
                                            <div className='flex flex-col gap-y-6'>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'education').data.map(
                                                        (item, index) => {
                                                            const { university, qualification, years } = item;
                                                            return (
                                                                <div className='flex gap-x-8 group' key={index}>
                                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-medium text-lg leading-none mb-2'>
                                                                            {university}
                                                                        </div>
                                                                        <div className='text-base leading-none text-muted-foreground mb-4'>
                                                                            {qualification}
                                                                        </div>
                                                                        <div className='text-base font-medium'>
                                                                            {years}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Certifications */}
                    <div className='flex-1'>
                        <Tabs defaultValue='education'>
                            <TabsList className='w-full grid xl:grid-cols-1 xl:max-w-[320px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>
                                    <CreditCardIcon size={28} className="mr-4" /> Certifications
                                </TabsTrigger>


                                <TabsContent value='qualifications'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                        </h3>
                                        <div className='grid md:grid-cols-1 gap-y-8'>
                                            <div className='flex flex-col gap-y-6'>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(certificationData, 'cert').data.map(
                                                        (item, index) => {
                                                            const { institue, name, date } = item;
                                                            return (
                                                                <div className='flex gap-x-8 group' key={index}>
                                                                    <div className='w-[1px] bg-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-medium text-lg leading-none mb-2'>
                                                                            {institue}
                                                                        </div>
                                                                        <div className='text-base leading-none text-muted-foreground mb-4 space-y-2'>
                                                                            {name.map((cert, i) => (
                                                                                <div key={i}>{cert}</div>  // each cert occupies one line
                                                                            ))}
                                                                        </div>
                                                                        <div className='text-base font-medium'>
                                                                            {date}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </TabsList>
                        </Tabs>
                    </div>


                    {/* Experience */}
                    <div className='flex-1'>
                        <Tabs defaultValue='experience'>
                            <TabsList className='w-full grid xl:grid-cols-1 xl:max-w-[300px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>
                                    <Briefcase size={28} className="mr-4" /> Experience
                                </TabsTrigger>

                                {/* qualifications -> experience */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                            {/* My Work Journey */}
                                        </h3>
                                        {/* experience items */}
                                        <div className='grid md:grid-cols-1 gap-y-8'>
                                            <div className='flex flex-col gap-y-6'>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-3'>
                                                    {getData(qualificationData, 'experience').data.map(
                                                        (item, index) => {
                                                            const { company, role, years } = item;
                                                            return (
                                                                <div className='flex gap-x-8 group' key={index}>
                                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                                        group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-medium text-lg leading-none mb-2'>
                                                                            {company}
                                                                        </div>
                                                                        <div className='text-base leading-none text-muted-foreground mb-2 space-y-2'>
                                                                            {role}
                                                                        </div>
                                                                        <div className='text-sm font-medium'>
                                                                            {years}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </TabsList>
                        </Tabs>
                    </div>


                </div >
            </div>
        </section >
    );
};

export default About;

