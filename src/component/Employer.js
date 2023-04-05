import React from "react";

function Employer(){
    return(
        <div className="my-12 mx-32">
            {/* title */}
            <div className="text-5xl text-center">
                <div className="mb-6">Hello, Employer!</div>
                <div className="mb-12">Please fill the form below.</div>
            </div>
            {/* form box */}
            <div className="h-1/2 w-2/3 border mx-auto mb-32 shadow-xl rounded-xl">
                {/* inner container */}
                <div className="m-16 text-xl font-medium">
                    <div className="font-bold mb-3">
                        Employer Name
                        <span className="text-red-500">*</span>
                    </div>
                    <input className="w-full px-3 bg-white h-14 rounded-md focus:outline-none border mb-6" placeholder="Enter your full name" type="text"></input>
                    <div className="flex justify-between">
                        <div className="w-1/2 mr-12">
                            <div className="font-bold mb-3">
                                Contact Person
                                <span className="text-red-500">*</span>
                            </div>
                            <input className="w-full px-3 bg-white h-14 rounded-md focus:outline-none border mb-6" placeholder="Ex: 08xxxxxxxxxx" type="text"></input>
                        </div>
                        <div className="w-1/2">
                            <div className="font-bold mb-3">
                                Available Vacant
                                <span className="text-red-500">*</span>
                            </div>
                            <input className="w-full px-3 bg-white h-14 rounded-md focus:outline-none border mb-6" placeholder="Ex: Tax Manager" type="text"></input>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-1/2 mr-12">
                            <div className="font-bold mb-3">
                                Est. Join Date
                                <span className="text-red-500">*</span>
                            </div>
                            <input className="w-full px-3 bg-white h-14 rounded-md focus:outline-none border mb-6" type="date"></input>
                        </div>
                        <div className="w-1/2">
                            <div className="font-bold mb-3">
                                Range Salary (IDR)
                                <span className="text-red-500">*</span>
                            </div>
                            <input className="w-full px-3 bg-white h-14 rounded-md focus:outline-none border mb-6" placeholder="Ex: 4200000" type="text"></input>
                        </div>
                    </div>
                    <div className="text-xl font-bold mb-3">
                        Upload Jobdesc
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
        </div>
    );
}
export default Employer;