'use client'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstallFill,
} from "react-icons/ri"

import Link from "next/link"


const icons = [
  {
    path: "/",
    name: <RiYoutubeFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "/",
    name: <RiInstallFill />,
  },
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
      Social
    </div>
  )
}

export default Socials
