import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

import { User2, MailIcon, HomeIcon, PhoneCallIcon, GraduationCap, Calendar, Briefcase } from "lucide-react"



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
        icon: <PhoneCallIcon size={20} />,
        text: "+64 210 857 3484"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Master on Computer Science"
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 20 Jul, 1990"
    },
]

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "Unitec Institute of Technology",
                qualification: "Master of Computing of Applied Technology",
                years: "2023 - 2024",
            },
            {
                university: "Yanbian University",
                qualification: "Master of Computer Technology",
                years: "2012 - 2014",
            },
            {
                university: "Yanbian University",
                qualification: "Bacherlor of Communication Engineering",
                years: "2008 - 2012",
            },
        ]
    },

    {
        title: "experience",
        data: [
            {
                company: "CBS Group",
                qualification: "Junior Software Developer",
                years: "2014 - 2015",
            },
            {
                university: "CBS",
                qualification: "Master of Computer Technology",
                years: "2012 - 2014",
            },
            {
                university: "Yanbian University",
                qualification: "Bacherlor of Communication Engineering",
                years: "2008 - 2012",
            },
        ]
    },

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
    // console.log(qualificationData);
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    console.log(getData(qualificationData, 'experience'));

    return (
        <section className="xl:">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
            </div>
        </section>
    )
}

export default About
