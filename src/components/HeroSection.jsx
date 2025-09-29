const HeroSection = () => {
    return (
        <div className="w-full flex bg-mybiege p-20 text-shadow justify-center gap-20 max-sm:flex-col max-md:flex-col max-sm:px-5 max-md:px-5">
            <div className="flex flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-md:w-full max-md:justify-center max-md:items-center">
                <h1 className="text-8xl font-extrabold my-3 max-sm:text-7xl">
                    WELCOME TO THE IELTS INSTITUTE
                </h1>
                <p className="text-3xl font-semibold italic mb-10 max-sm:text-2xl">
                    The world's most trusted institute for English test
                </p>
                <div className="flex gap-10 max-sm:gap-5">
                    <button className="bg-mypeach text-mybiege rounded-md px-15 py-4 font-bold cursor-pointer transition-colors hover:bg-myred">
                        Sign In
                    </button>
                    <button className="bg-mypeach text-mybiege rounded-md px-15 py-4 font-bold cursor-pointer transition-colors hover:bg-myred">
                        Explore
                    </button>
                </div>
            </div>
            <div className="w-[70%] max-sm:w-full max-md:w-full">
                <img className="w-full rounded-md" src="/hero.jpg" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;
