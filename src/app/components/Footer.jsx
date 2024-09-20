import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white py-8">
            <div className="container mx-auto ">

                <div className=" text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    <p className="mt-2">Made with ❤️ using Next.js and Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;