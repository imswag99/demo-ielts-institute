import React from "react";

const CommentCard = ({ testimonial }) => {
    return (
        <div className="flex justify-center items-center gap-2 px-3 py-5 bg-mypeach text-mybiege rounded-md">
            <div className="w-[40%] flex flex-col justify-center items-center">
                <img className="w-15" src={testimonial.profile} alt="" />
                <h1 className="text-xs font-semibold">{testimonial.name}</h1>
            </div>
            <p className="flex-1 text-xs italic">{testimonial.comment}</p>
        </div>
    );
};

export default CommentCard;
