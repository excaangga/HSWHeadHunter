import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import apply_cover from '../assets/apply_cover.png';
import briefcase from '../assets/briefcase.png';

export const VacantDetail = ({
    job_name,
    location,
    work_time,
    position,
    summary,
    requirements,
    job_desc,
    optional_info
}) => {
    var requirements_loop = requirements.map((item, index) =>
        <ul className="list-disc">
            <li key={index}>{ item }</li>
        </ul>
    );
    var job_desc_loop = job_desc.map((item, index) =>
        <ul className="list-disc">
            <li key={index}>{ item }</li>
        </ul>
    );
    let navigate = useNavigate();
    const [showComponent, setShowComponent] = useState(false);
    const ref = useRef(null);
    const scrollTo = (ref.current?.scrollIntoView({behavior: 'smooth'}));
    return (
        <div className="mt-12 font-DMSans text-gray-700 mx-14">
            {/* blob */}
			<div className='absolute -left-48 top-1/3 bg-[url("../public/blob.png")] h-3/4 w-72'></div>
			<div className='absolute rotate-180 right-0 -bottom-[30rem] bg-[url("../public/blob.png")] h-3/4 w-72'></div>
            {/* back button 1 */}
            <div className="container w-20 p-4 cursor-default shadow-lg border mx-8 text-xl font-bold text-blue-700 text-center rounded-full hover:shadow-2xl" onClick={() => navigate(-1)}>
                &#9001; &#9001;
            </div>
            {/* title and apply button 1*/}
            <div className="container-fill mt-12 mx-8 flex justify-between">
                <div>
                    <div className="text-5xl font-medium">
                        { job_name }
                    </div>
                    <div className="text-xl">
                        { location } | { work_time } | { position }
                    </div>
                </div>
                <div className="container w-48 h-12 cursor-default text-center text-xl text-white px-10 py-2 bg-blue-700 rounded-xl hover:bg-blue-500" onClick={() => {setShowComponent(true); scrollTo()}}>
                    Apply Now
                </div>
            </div>
            {/* Horizontal Line */}
            <div className='h-1 border-b-2 border-gray-300 mx-8 mt-12'>
            </div>    
            {/* content */}
            <div className="container-fill text-xl mx-8 mt-12 mr-64">
                {/* summary */}
                <div className="mt-12">
                    { summary }
                </div>
                {/* requirements */}
                <div className="mt-12">
                    <div className="font-bold mb-4">
                        Requirements:
                    </div>
                    <div className="ml-10">
                        { requirements_loop }
                    </div>
                </div>
                {/* job desc */}
                <div className="mt-12">
                    <div className="font-bold mb-4">
                        Job Description:
                    </div>
                    <div className="ml-10">
                        { job_desc_loop }
                    </div>
                </div>
                {/* optional info */}
                <div className="mt-12">
                    { optional_info }
                </div>
            </div>
            {/* apply button 2 */}
            <div className="container w-48 h-12 mx-8 cursor-default text-center text-xl text-white px-10 py-2 bg-blue-700 rounded-xl hover:bg-blue-500 mt-12" onClick={() => {setShowComponent(true); scrollTo()}}>
                Apply Now
            </div>
            {/* back button 2 */}
            <div className="container w-20 p-4 cursor-default shadow-lg border mx-8 text-xl font-bold text-blue-700 text-center rounded-full hover:shadow-2xl mt-12" onClick={() => navigate(-1)}>
                &#9001; &#9001;
            </div>
            {/* empty div for ref */}
            <div ref={ref}></div>
            {/* apply component */}
            { showComponent && 
            <div className="container-fill flex h-auto mx-8 mt-16 justify-between">
                {/* left box */}
                <div className="container-fill border shadow-xl rounded-tr-[7rem] rounded-bl-2xl rounded-xl w-1/2 h-auto mt-3 mb-6">
                    <div className="mx-16 my-16">
                        <div className="text-3xl font-medium mb-3">
                            Hello, Applicant!
                        </div>
                        <div className="text-3xl font-medium mb-10">
                            Please fill the form below.
                        </div>
                        <div className="text-xl font-bold mb-3">
                            Name
                            <span className="text-red-500">*</span>
                        </div>
                        <input className="w-full px-3 text-xl bg-white h-14 rounded-md focus:outline-none border mb-6" placeholder="Enter your full name" type="text"></input>
                        <div className="text-xl font-bold mb-3">
                            Current Position
                            <span className="text-red-500">*</span>
                        </div>
                        <input className="w-full px-3 text-xl bg-white h-14 rounded-md focus:outline-none border mb-6" placeholder="Ex: Tax Manager" type="text"></input>
                        <div className="text-xl font-bold mb-3">
                            Apply For
                            <span className="text-red-500">*</span>
                        </div>
                        <input className="w-full px-3 text-xl bg-white h-14 rounded-md focus:outline-none border mb-6" placeholder="Ex: Tax Manager" type="text"></input>
                        <div className="text-xl font-bold mb-3">
                            Upload CV
                            <span className="text-red-500">*</span>
                        </div>
                        <div className="flex">
                            <input disabled className="w-3/4 px-3 text-xl bg-white h-14 rounded-tl-md rounded-bl-md focus:outline-none border mb-12" placeholder="Choose file" type="text"></input>
                            <div className="w-1/4 px-3 text-xl font-medium bg-gray-100 h-14 rounded-tr-md rounded-br-md border flex items-center justify-center hover:text-gray-900 hover:bg-gray-300 cursor-default">
                                Browse
                            </div>
                        </div>
                        {/* submit button */}
                        <div className="w-full py-5 text-xl text-white bg-blue-700 rounded-2xl flex justify-center items-center hover:bg-blue-500 cursor-default">
                            Submit
                        </div>
                    </div>
                </div>
                {/* right box */}
                <div className="relative">
                    <img 
                        src={apply_cover}
                        alt=''
                    />
                    <div className="absolute -right-8 top-24 h-[72px] w-[300px] bg-white rounded-2xl flex items-center justify-between shadow-xl border">
                        <img
                            src={briefcase}
                            alt=''
                            className="ml-4"
                        />
                        <div className="text-md mr-8">
                            Over <span className="text-blue-700">10.000+</span> applicants
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}