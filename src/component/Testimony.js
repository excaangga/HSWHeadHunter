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
        <div className="container p-8 font-DMSans text-gray-700 w-[95%] sm:w-[31rem] 2xl:w-[90%] shadow-lg rounded-2xl mb-5 mx-auto hover:shadow-xl border">
            <img src={ company_logo } alt='' className='mb-4 object-scale-down h-8 sm:h-14 w-20 sm:w-28' />
            <div className="text-md sm:text-xl font-bold mb-2">{ summary }</div>
            <div className="text-xs sm:text-lg mb-4">{ desc }</div>
            <div className="container-fill flex justify-start items-center">
                <img src={ person_picture } alt='' className='object-contain h-10 sm:h-16 w-10 sm:w-16 rounded-full mr-3' />
                <div className="text-xs sm:text-lg">
                    <div className="font-medium">{ person_name }</div>
                    <div>{ person_position }</div>
                </div>
            </div>
        </div>
    );
};

export default Testimony;

