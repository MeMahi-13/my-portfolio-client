import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#DBE6F5] p-3 sticky top-0 z-50">
            <div className="bg-[#CBDCF3] flex justify-between items-center text-[#354E73] font-semibold">

                {/* Logo & Email */}
                <a href="#home">
                    <div className="flex items-center cursor-pointer">
                        <img
                            className="m-3 h-15 w-15 rounded-full"
                            src="https://i.ibb.co.com/hxm5QPFD/1.png"
                            alt="logo"
                        />
                        <h1 className="hidden sm:block">work.mohima@gmail.com</h1>
                    </div>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex  gap-5 p-8">
                    <li className="hover:underline"><a href="#resume">My Resume</a></li>
                    <li className="hover:underline"><a href="#projects">Projects</a></li>
                    <li className="hover:underline"><a href="#contact">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-4"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Links */}
            {isOpen && (
                <ul className="flex flex-col bg-[#CBDCF3] text-[#354E73] p-4 md:hidden">
                    <li className="py-2 border-b">
                        <a href="#resume" onClick={() => setIsOpen(false)}>My Resume</a>
                    </li>
                    <li className="py-2 border-b">
                        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    </li>
                    <li className="py-2">
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
