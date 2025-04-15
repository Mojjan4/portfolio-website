import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="w-full py-2 flex justify-center gap-50 ound pb-30">
            <a
                href="https://github.com/Mojjan4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-sand transition-transform duration-300 hover:scale-110"
            >
                <SiGithub size={50} />
            </a>
            <a
                href="https://www.linkedin.com/in/christopher-lundqvist-8741b2aa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-sand transition-transform duration-300 hover:scale-110"
            >
                <SiLinkedin size={50} />
            </a>
        </footer>
    );
};

export default Footer;
