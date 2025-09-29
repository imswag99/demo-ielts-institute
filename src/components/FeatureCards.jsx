import { features } from "../assets/data.js";
import Card from "./Card.jsx";

const FeatureCards = () => {
    return (
        <div className="w-full bg-mybiege px-20 py-10 max-sm:px-5 max-md:px-5">
            <h1 className="text-2xl font-bold mb-5 uppercase max-sm:text-3xl max-md:text-3xl">Features</h1>
            <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2">
                {features.map((feature, index) => (
                    <Card key={index} feature={feature} />
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;
