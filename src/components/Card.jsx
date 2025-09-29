import React from "react";

const Card = ({ feature }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 p-7 bg-mypeach text-mybiege rounded-md cursor-pointer transition-all hover:scale-[1.05] hover:shadow-lg hover:shadow-gray-400">
            <img className="w-20" src={feature.image} alt="" />
            <h1 className="text-xl font-bold">{feature.title}</h1>
            <p>{feature.content}</p>
        </div>
    );
};

export default Card;
