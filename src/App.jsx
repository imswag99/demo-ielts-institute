import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureCards from "./components/FeatureCards";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col shadow-lg shadow-shadow overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full max-sm:[&::-webkit-scrollbar]:hidden">
            <Navbar />
            <HeroSection />
            <FeatureCards />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;
