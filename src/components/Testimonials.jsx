import { testimonials } from "../assets/data";
import CommentCard from "./CommentCard";

const Testimonials = () => {
    return (
        <div className="w-full bg-mybiege px-20 py-10 max-sm:px-5 max-md:px-5">
            <h1 className="text-2xl font-bold mb-5 uppercase max-sm:text-3xl max-md:text-3xl">testimonials</h1>
            <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <CommentCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
