import React from "react";

function Jobseeker(){
    return(
        <div className="my-12 mx-6 sm:mx-16 md:mx-32 font-DMSans text-gray-700">
            {/* title */}
            <div className="text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl text-center">
                <div className="mb-2 sm:mb-6">Hello, Job Seeker!</div>
                <div className="mb-6 sm:mb-12">Please fill the form below.</div>
            </div>
            {/* form box */}
            <div className="h-1/2 lg:w-[80%] xl:w-2/3 border mx-auto mb-32 shadow-xl rounded-xl">
                {/* inner container */}
                <div className="m-8 sm:m-16 text-sm sm:text-xl font-medium">
                    <div className="font-bold sm:mb-3">
                        Name
                        <span className="text-red-500">*</span>
                    </div>
                    <input className="w-full px-3 bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-2 sm:mb-6" placeholder="Enter your full name" type="text"></input>
                    <div className="font-bold sm:mb-3">
                        Current Position
                        <span className="text-red-500">*</span>
                    </div>
                    <input className="w-full px-3 bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-2 sm:mb-6" placeholder="Ex: Tax Manager" type="text"></input>
                    <div className="font-bold sm:mb-3">
                        Apply For
                        <span className="text-red-500">*</span>
                    </div>
                    <input className="w-full px-3 bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-2 sm:mb-6" placeholder="Ex: Tax Manager" type="text"></input>
                    <div className="font-bold sm:mb-3">
                        Upload CV
                        <span className="text-red-500">*</span>
                    </div>
                    <div className="flex">
                        <input disabled className="w-3/4 px-3 bg-white h-8 sm:h-14 rounded-tl-md rounded-bl-md focus:outline-none border mb-4 sm:mb-12" placeholder="Choose file" type="text"></input>
                        <div className="w-1/4 px-3 font-medium bg-gray-100 h-8 sm:h-14 rounded-tr-md rounded-br-md border flex items-center justify-center hover:text-gray-900 hover:bg-gray-300 cursor-default">
                            Browse
                        </div>
                    </div>
                    {/* submit button */}
                    <div className="w-full py-2 sm:py-5 text-white bg-blue-700 rounded-2xl flex justify-center items-center hover:bg-blue-500 cursor-default">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Jobseeker;