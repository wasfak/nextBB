import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base ">
      <div className="p-6 fij">
        {" "}
        <Link href="/">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </Link>
        <div className="flex items-center">
          Build With <span className="text-2xl px-1">&#9825;</span>{" "}
          <Link href="/">Techarpe</Link>
          <span className="text-2xl px-1">&#9825;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
