'use client'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstallFill,
  RiWechatFill
} from "react-icons/ri"

import Link from "next/link"


const icons = [

  {
    path: "https://www.linkedin.com/in/kevinchoi0720/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/KChoi0720",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.youtube.com/@KevinChoi0720",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=61550291334347",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "/",
    name: <RiWechatFill />,
  },
  // {
  //   path: "/",
  //   name: <RiInstallFill />,
  // },
]


const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
      
    </div>
  )
}

export default Socials
