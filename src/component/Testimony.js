import React from "react";

export const Testimony = ({
    company_logo,
    summary,
    desc,
    person_picture,
    person_name,
    person_position
}) => {
    return(
        <div className="container p-8 font-DMSans text-gray-700 w-[31rem] shadow-lg rounded-2xl my-8 mx-auto hover:shadow-xl">
            <img src={ company_logo } alt='' className='mb-4 object-scale-down h-14 w-28' />
            <div className="text-xl font-bold mb-2">{ summary }</div>
            <div className="text-lg mb-4">{ desc }</div>
            <div className="container-fill flex justify-start items-center">
                <img src={ person_picture } alt='' className='object-contain h-16 w-16 rounded-full mr-3' />
                <div className="text-lg">
                    <div className="font-medium">{ person_name }</div>
                    <div>{ person_position }</div>
                </div>
            </div>
        </div>
    );
};

export default Testimony;

