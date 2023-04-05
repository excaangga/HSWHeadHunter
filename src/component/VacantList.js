import React from "react";
import { useNavigate } from 'react-router-dom';

export const VacantList = ({
    job_name,
    location,
    work_time,
    position
}) => {
	const navigate = useNavigate();
    const handleOnClick = () => navigate('/vacant/vacantDetail');
    return (
        <div className="font-DMSans cursor-default container-fill rounded-xl flex justify-between mb-4 p-4 hover:bg-gray-100" onClick={ handleOnClick }>
            <div>
                <div className="font-medium text-3xl text-blue-700">
                    ► { job_name }
                </div>
                <div className="text-xl ml-10 text-gray-700">
                    { location } | { work_time }
                </div>
            </div>
            <div className="text-xl text-gray-700">
                { position }
            </div>
        </div>
    );
}

export default VacantList;