import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-myred px-20 py-10 text-mybiege flex flex-col gap-5 max-sm:px-5 max-md:px-5">
            <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
                <h1 className="text-7xl font-extrabold tracking-tighter max-md:text-5xl">
                    IELTS
                </h1>
                <div className="flex justify-center items-center gap-5">
                    <img
                        className="w-45 max-sm:w-30 max-md:w-35"
                        src="/university/cambridge.png"
                        alt=""
                    />
                    <img
                        className="w-45 max-sm:w-30 max-md:w-35"
                        src="/university/bristol.png"
                        alt=""
                    />
                    <img
                        className="w-45 max-sm:w-30 max-md:w-35"
                        src="/university/oxford.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="w-full flex justify-between max-sm:flex-col max-md:flex-col">
                <div className="flex items-center gap-5 max-sm:mb-10 max-sm:justify-around max-md:mb-10 max-md:gap-10">
                    <img className="w-7 max-sm:w-10 max-md:w-10" src="/links/linkedin.png" alt="" />
                    <img className="w-7 max-sm:w-10 max-md:w-10" src="/links/youtube.png" alt="" />
                    <img className="w-7 max-sm:w-10 max-md:w-10" src="/links/instagram.png" alt="" />
                    <img className="w-7 max-sm:w-10 max-md:w-10" src="/links/facebook.png" alt="" />
                </div>
                <div className="flex items-center gap-5 max-sm:flex-col max-sm:items-start">
                    <input
                        className="w-[20rem] max-sm:w-full bg-mybiege outline-0 px-5 py-2 placeholder-shadow text-shadow"
                        type="text"
                        placeholder="type your email here"
                    />
                    <button className="bg-mybiege text-myred rounded-md px-5 py-2 font-bold cursor-pointer transition-colors hover:bg-mypeach hover:text-mybiege">
                        Join our newsletter
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-20 uppercase font-semibold mt-10 max-sm:flex-col max-sm:gap-3 max-md:gap-10">
                <a href="">Home</a>
                <a href="">Features</a>
                <a href="">Legal Policies</a>
                <a href="">Terms & Conditions</a>
            </div>
            <p className="text-center mt-20">
                &copy; 2025. Copyright by Swagat Talukdar
            </p>
        </div>
    );
};

export default Footer;
