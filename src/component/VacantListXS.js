import React from "react";
import { useNavigate } from 'react-router-dom';

export const VacantListXS = ({
    job_name,
    location,
    work_time,
    position
}) => {
    const navigate = useNavigate();
    // const handleOnClick = () => navigate('/vacant/vacantDetail');
    return (
        <div className="font-DMSans cursor-default container-fill rounded-xl px-4 py-2 hover:bg-gray-100 grid grid-cols-12">
            <div className="col-span-1 font-medium text-md text-blue-700">
                &#x25BA;
            </div>
            <div className="col-span-11">
                <div className="font-medium text-md text-blue-700">
                    {job_name}
                </div>
                <div className="text-[12px] text-gray-700">
                    {location} | {work_time}
                </div>
                <div className="text-[11px] text-gray-700">
                    {position}
                </div>
            </div>
        </div>
    );
}

export default VacantListXS;