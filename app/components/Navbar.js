"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  const path = usePathname();
  const router = useRouter();

  return (
    <li key={title}>
      <Link
        href={href}
        className={`${
          href === path
            ? "px-4 py-2 transition-background duration-300 rounded-2xl font-extrabold text-[#00aba9] capitalize relative group"
            : "px-4 py-2 transition-background duration-300  rounded-2xl font-extrabold text-rb capitalize relative group"
        } `}
      >
        {title}
        <span
          className={`h-[1.5px] inline-block bg-rb absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    </li>
  );
};
const Navbar = () => {
  return (
    <header className=" text-white  ">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-xl font-bold ml-2">
          <Image
            src="vercel.svg"
            alt="Logo"
            className="h-8"
            width={100}
            height={100}
          />
        </Link>

        <ul className="flex justify-between w-[35%] items-center">
          <NavLink href="/" title="home" />
          <NavLink href="/about" title="about" />
          <NavLink href="/contact" title="contact" />
          <NavLink href="/blog" title="blog" />
        </ul>

        <nav className="flex items-right justify-center flex-wrap  ml-12 ">
          <motion.a
            href="https://twitter.com/?lang=en"
            target="_blank"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 text-rb"
          >
            <FaWhatsapp className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://twitter.com/?lang=en"
            target="_blank"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <AiFillLinkedin className="w-6 h-6 text-rb" />
          </motion.a>
          <motion.a
            href="https://twitter.com/?lang=en"
            target="_blank"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <AiOutlineFacebook className="w-6 h-6 text-rb" />
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
