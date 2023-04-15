import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import apply_cover from '../assets/apply_cover.png';
import briefcase from '../assets/briefcase.png';
import { useEffect } from "react";

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
    useEffect(() => {
		window.scrollTo(0, 0);

		const element1 = document.getElementById("header");
		const element2 = document.getElementById("nav");			
		element1.classList.add("bg-white");
		element2.classList.add("bg-white");		
		return () => {
			element1.classList.remove("bg-white");
			element2.classList.remove("bg-white");
		}
	}, []);
    return (
        <div className="mt-12 font-DMSans text-gray-700 sm:mx-14">
            {/* blob */}
			<div className='absolute left-0 top-2/3 -z-50 bg-[url("../public/blob.png")] bg-no-repeat bg-contain h-3/4 w-72'></div>
            {/* back button 1 and apply button 1 mobile */}
            <div className="container-fill flex justify-between items-center">
                <div className="flex items-center justify-center container w-12 h-8 sm:h-14 sm:w-20 p-4 cursor-default shadow-lg border mx-8 text-[10px] sm:text-xl font-bold text-blue-700 text-center rounded-full hover:shadow-2xl" onClick={() => navigate(-1)}>
                    &#9001; &#9001;
                </div>
                <div className="lg:hidden container w-auto sm:w-48 h-8 sm:h-14 flex items-center justify-center cursor-default text-center text-sm sm:text-xl text-white px-8 sm:px-10 py-2 bg-blue-700 rounded-xl hover:bg-blue-500 mr-8 sm:mr-0" onClick={() => {setShowComponent(true); scrollTo()}}>
                    Apply Now
                </div>
            </div>
            {/* title and apply button 1*/}
            <div className="container-fill mt-8 sm:mt-12 mx-8 flex justify-between">
                <div>
                    <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-medium">
                        { job_name }
                    </div>
                    <div className="text-xs sm:text-base md:text-xl">
                        { location } | { work_time } | { position }
                    </div>
                </div>
                <div className="hidden lg:block container w-48 h-12 cursor-default text-center text-xl text-white px-10 py-2 bg-blue-700 rounded-xl hover:bg-blue-500" onClick={() => {setShowComponent(true); scrollTo()}}>
                    Apply Now
                </div>
            </div>
            {/* Horizontal Line */}
            <div className='h-1 border-b-2 border-gray-300 mx-8 mt-12'>
            </div>    
            {/* content */}
            <div className="container-fill text-sm sm:text-xl mx-8 mt-12 mr-16 lg:mr-32">
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
            <div className="container w-36 sm:w-48 h-8 sm:h-14 flex items-center justify-center cursor-default text-center text-sm sm:text-xl text-white px-8 sm:px-10 py-2 bg-blue-700 rounded-xl hover:bg-blue-500 mt-12 ml-8" onClick={() => {setShowComponent(true); scrollTo()}}>
                Apply Now
            </div>
            {/* back button 2 */}
            <div className="flex items-center justify-center container w-12 h-8 sm:h-14 sm:w-20 p-4 cursor-default shadow-lg border mx-8 text-[10px] sm:text-xl font-bold text-blue-700 text-center rounded-full hover:shadow-2xl mt-8 sm:mt-12" onClick={() => navigate(-1)}>
                &#9001; &#9001;
            </div>
            {/* empty div for ref */}
            <div ref={ref}></div>
            {/* apply component */}
            { showComponent && 
            <div className="relative container-fill flex h-auto md:mx-8 mt-16 justify-center 2xl:justify-between">
                {/* left box */}
                <div className="container-fill border shadow-xl rounded-tr-[3rem] sm:rounded-tr-[7rem] rounded-bl-2xl rounded-xl w-full lg:w-10/12 2xl:w-1/2 mt-3 mb-6 mx-4">
                    <div className="m-12 sm:mx-16 sm:my-16">
                        <div className="text-base sm:text-3xl font-medium mb-3">
                            Hello, Job Seeker!
                        </div>
                        <div className="text-base sm:text-3xl font-medium mb-3 md:mb-10">
                            Please fill the form below.
                        </div>
                        <div className="text-sm sm:text-xl font-bold mb-3">
                            Name
                            <span className="text-red-500">*</span>
                        </div>
                        <input className="w-full px-3 text-sm sm:text-xl bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-3 md:mb-6" placeholder="Enter your full name" type="text"></input>
                        <div className="text-sm sm:text-xl font-bold mb-3">
                            Current Position
                            <span className="text-red-500">*</span>
                        </div>
                        <input className="w-full px-3 text-sm sm:text-xl bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-3 md:mb-6" placeholder="Ex: Tax Manager" type="text"></input>
                        {/* TODO change to props for email */}
                        {/* <div className="text-sm sm:text-xl font-bold mb-3">
                            Apply For
                            <span className="text-red-500">*</span>
                        </div>
                        <input className="w-full px-3 text-sm sm:text-xl bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-3 md:mb-6" placeholder="Ex: Tax Manager" type="text"></input> */}
                        <div className="text-sm sm:text-xl font-bold mb-3">
                            Upload CV
                            <span className="text-red-500">*</span>
                        </div>
                        <div className="flex">
                            <input disabled className="w-3/4 px-3 text-sm sm:text-xl bg-white h-8 sm:h-14 rounded-tl-md rounded-bl-md focus:outline-none border mb-6 md:mb-12" placeholder="Choose file" type="text"></input>
                            <div className="w-1/4 px-3 text-sm sm:text-xl font-medium bg-gray-100 h-8 sm:h-14 rounded-tr-md rounded-br-md border flex items-center justify-center hover:text-gray-900 hover:bg-gray-300 cursor-default">
                                Browse
                            </div>
                        </div>
                        {/* submit button */}
                        <div className="w-full py-2 sm:py-5 text-sm sm:text-xl text-white bg-blue-700 rounded-2xl flex justify-center items-center hover:bg-blue-500 cursor-default">
                            Submit
                        </div>
                    </div>
                </div>
                {/* right box */}
                <div className="hidden 2xl:block relative w-1/2">
                    <img 
                        src={apply_cover}
                        alt=''
                        className="h-full"
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