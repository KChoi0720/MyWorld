

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
        text: "Jiping Cui"
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
    {
        icon: <Calendar size={20} />,
        text: "Python, Tailwind CSS, React.js, TypeScript, JavaScript, Node.js, MongoDB, MySQL, PostgreSQL, Git, GitHub, Docker, Kubernetes, AWS, Azure, Salesforce, Power BI."
    },
]

const qualificationData = [
    {
        title: "experience",
        data: [
            {
                company: "GFK - An NIQ Company - NZ",
                role: "Field Data Interviewer",
                years: "May.2024 - Present",
            },
            {
                company: "SAL Technologies - NZ",
                role: "Data Engineer",
                years: "Oct.2024 - Jan.2025",
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
                country:"New Zealand",
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
                country:"China",
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



const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className='mt-10 xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    About me
                </h2>

                {/* Wrapper: Personal Info, education, certifications Experience */}
                <div className='flex flex-col xl:flex-row gap-4 items-center xl:items-stretch justify-center'>

                    {/* Personal Info */}
                    <div className='flex-1'>
                        <h3 className='h3 mb-8 text-center font-semibold xl:text-center border border-hidden rounded-2xl bg-primary p-3 w-[280px]'>
                            Personal Info</h3>
                        <div className='text-center xl:text-left text-sm'>
                            {/* icons */}
                            <div className='grid xl:grid-cols-1 gap-2 mb-12 w-[300px] '>
                                {infoData.map((item, index) => {
                                    return (
                                        <div className='flex items-start gap-x-4 mx-auto xl:mx-0' key={index}>
                                            <div className='text-primary'>{item.icon}</div>
                                            <div>{item.text}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className='flex-1'>
                        <h3 className='h3 mb-8 text-center font-semibold xl:text-center border border-hidden rounded-2xl bg-primary text-black p-3 w-[280px]'>Education</h3>
                        <div className='w-[280px] grid md:grid-cols-1 gap-y-8'>
                            <div className='flex flex-col gap-y-6'>
                                {/* list */}
                                <div className='flex flex-col gap-y-8'>
                                    {getData(qualificationData, 'education').data.map(
                                        (item, index) => {
                                            const { university, qualification, country, years } = item;
                                            return (
                                                <div className='flex gap-x-8 group' key={index}>
                                                    <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                    </div>
                                                    <div>
                                                        <div className='text-sm font-medium leading-none mb-1'>
                                                            {university}
                                                        </div>
                                                        <div className='text-sm leading-none text-muted-foreground mb-2 '>
                                                            {qualification}
                                                        </div>
                                                        <div className='text-sm'>
                                                            {country}
                                                        </div>
                                                        <div className='text-sm'>
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

                    {/* Certifications */}
                    <div className='flex-1'>
                        <h3 className='h3 mb-8 text-center font-semibold xl:text-center border border-hidden rounded-2xl bg-primary text-black p-3 w-[280px]'>Certifications</h3>
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
                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500'></div>
                                                    </div>
                                                    <div>
                                                        <div className='text-sm font-medium leading-none mb-1'>
                                                            {institue}
                                                        </div>
                                                        <div className='text-sm leading-none text-muted-foreground mb-1 space-y-0.5 '>
                                                            {name.map((cert, i) => (
                                                                <div key={i}>{cert}</div>  // each cert occupies one line
                                                            ))}
                                                        </div>
                                                        <div className='text-sm font-medium'>
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

                    {/* Experience */}
                    <div className='flex-1'>
                        <h3 className='h3 mb-8 text-center font-semibold xl:text-center border border-hidden rounded-2xl bg-primary text-black p-3 w-[280px]'>Experience</h3>
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
                                                        <div className='text-sm font-medium leading-none mb-1'>
                                                            {role}
                                                        </div>
                                                        <div className='text-sm leading-none text-muted-foreground mb-1 space-y-2'>
                                                            {company}
                                                        </div>
                                                        <div className='text-sm '>
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
                </div >
            </div>
        </section >
    );
};


export default About;

