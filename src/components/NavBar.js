import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest">
                        DEEPAK
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-yellow-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-yellow-800">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 mr-6 rounded text-red-200 hover:text-yellow-800">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/DeepakR24418349" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
                    <SocialIcon url="https://www.youtube.com/channel/UCp2YSmdYn8afwFrJvZjiIQA" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
                    <SocialIcon url="https://github.com/firefistacez" className="mr-4" target="_blank" fgColor="#fff" bgColor="#000" style={{ height:35, width:35 }}/>
                    {/* <SocialIcon url="https://www.instagram.com/i_l0v3_coding/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/> */}
                </div>
            </div>
        </header>
    )
}