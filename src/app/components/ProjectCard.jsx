import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, projectLink }) => {
    return (
        <Link href={projectLink} target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-[#181818] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="relative group">
                    <div
                        className="h-52 md:h-72 w-full relative overflow-hidden"
                        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-white text-center px-4 py-2">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;