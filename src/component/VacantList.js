import React from "react";
import { useNavigate } from 'react-router-dom';

export const VacantList = ({
    job_name,
    location,
    work_time,
    position
}) => {
	const navigate = useNavigate();
    // const handleOnClick = () => navigate('/vacant/vacantDetail');
    return (
        <div className="font-DMSans cursor-default container-fill rounded-xl flex sm:space-x-12 md:space-x-20 xl:space-x-0 justify-between mx-6 sm:mx-0 lg:mb-4 px-4 py-2 hover:bg-gray-100">
            <div>
                <div className="font-medium text-md sm:text-xl lg:text-2xl 2xl:text-3xl text-blue-700">
                    &#x25BA; { job_name }
                </div>
                <div className="text-[12px] sm:text-base lg:text-xl ml-4 sm:ml-6 lg:ml-8 2xl:ml-10 text-gray-700">
                    { location } | { work_time }
                </div>
            </div>
            <div className="text-xs sm:text-base lg:text-xl mt-1 sm:mt-2 text-gray-700">
                { position }
            </div>
        </div>
    );
}

export default VacantList;