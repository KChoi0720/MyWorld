// Next.js 相关
import Link from "next/link";
import { usePathname } from "next/navigation";  // ✅ 直接导入 usePathname

// Framer Motion
import { motion } from "framer-motion";

const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'projects' },
    { path: '/contact', name: 'contact' }
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();  // ✅ 直接调用 usePathname()
    
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => (
                <Link key={index} href={link.path} className={`capitalize ${linkStyles}`}>
                    {link.path === path && (
                        <motion.span 
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'tween' }}
                            layoutId='underline'
                            className={`${underlineStyles}`}
                        />
                    )}
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
