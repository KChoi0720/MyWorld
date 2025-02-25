'use client'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiWechatFill
} from "react-icons/ri";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const icons = [
  { path: "https://www.linkedin.com/in/kevinchoi0720/", name: <RiLinkedinFill /> },
  { path: "https://github.com/KChoi0720", name: <RiGithubFill /> },
  { path: "https://www.youtube.com/@KevinChoi0720", name: <RiYoutubeFill /> },
  { path: "https://www.facebook.com/profile.php?id=61550291334347", name: <RiFacebookBoxFill /> },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  const [showWeChat, setShowWeChat] = useState(false);
  const modalRef = useRef(null); // 用于检测点击是否在弹窗内部

  const handleWeChatClick = (e) => {
    e.preventDefault();
    setShowWeChat(true);
    // 3 秒后自动关闭弹窗
    setTimeout(() => {
      setShowWeChat(false);
    }, 2000);
  };


// 点击窗口外部时关闭弹窗
useEffect(() => {
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowWeChat(false);
    }
  };

  // 监听全局点击事件
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

return (
  <div className={`${containerStyles} relative`}>
    {icons.map((icon, index) => (
      <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
        <div className={`${iconsStyles}`}>{icon.name}</div>
      </Link>
    ))}

    {/* WeChat 按钮 */}
    <button onClick={handleWeChatClick} className={`${iconsStyles} focus:outline-none`}>
      <RiWechatFill />
    </button>

    {/* WeChat 弹窗 */}
    {showWeChat && (
      <div
        ref={modalRef}
        className="absolute top-10 left-0 bg-white shadow-md border rounded-md p-4 w-48 z-50"
      >
        <p className="text-gray-700 text-sm">WeChat: <span className="font-semibold">canlight720</span></p>
      </div>
    )}
  </div>
);
};

export default Socials;
