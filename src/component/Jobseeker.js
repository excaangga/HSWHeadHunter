import React from "react";
import { init, sendForm } from '@emailjs/browser';
init('E_FO3--pEZAv1zsc-');

function Jobseeker() {
    const formRef = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        sendForm('service_zmn54bb', 'template_o5ygqpn', formRef.current)
            .then((result) => {
                console.log(result.text);
                alert('Awesome! Your application was succesfully received. Thanks! Our hiring team will review in details.');
            }, (error) => {
                console.log(error.text);
                alert('Message was not sent, wait and refresh. If this still shows, contact clientrelation@hswheadhunter.com');
            });
    };

    return (
        <div className="my-12 mx-6 sm:mx-16 md:mx-32 font-DMSans text-gray-700">
            <form ref={formRef} onSubmit={sendEmail}>
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
                        <input required name='name' className="w-full px-3 bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-2 sm:mb-6" placeholder="Enter your full name" type="text"></input>
                        <div className="font-bold sm:mb-3">
                            Current Position
                            <span className="text-red-500">*</span>
                        </div>
                        <input required name='current_pos' className="w-full px-3 bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-2 sm:mb-6" placeholder="Ex: Tax Manager" type="text"></input>
                        <div className="font-bold sm:mb-3">
                            Apply For
                            <span className="text-red-500">*</span>
                        </div>
                        <input required name='apply_pos' className="w-full px-3 bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-2 sm:mb-6" placeholder="Ex: Tax Manager" type="text"></input>
                        <div className="font-bold sm:mb-3">
                            Upload CV (attach a Google Drive link below)
                            <span className="text-red-500">*</span>
                        </div>
                        <input required name='link' className="w-full px-3 bg-white h-8 sm:h-14 rounded-md focus:outline-none border mb-2 sm:mb-6" placeholder="Enter Google Drive link containing the file" type="text"></input>
                        {/* submit button */}
                        <button type="submit" className="w-full py-2 sm:py-5 text-white bg-blue-700 rounded-2xl flex justify-center items-center hover:bg-blue-500 cursor-default">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Jobseeker;