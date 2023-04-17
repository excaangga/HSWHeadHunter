import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import close from '../assets/close.png';
import mag_glass from '../assets/mag_glass.png';
import { TypeContext } from "./TypeContext";
import { ModalContext } from "./ModalContext";
import { BannerContext } from "./BannerContext";

function Modal(){
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        return()=>{
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    const [typeForm, setTypeForm] = useContext(TypeContext);
    const [showModal, setShowModal] = useContext(ModalContext);
    const [showBanner, setShowBanner] = useContext(BannerContext);
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/form');

    return(
        <div className="fixed top-[22%] 2xl:top-[25%] inset-x-0 mx-auto w-[320px] sm:w-[400px] lg:w-[655px] h-[244px] lg:h-[400px] bg-white font-DMSans text-gray-700 text-center rounded-2xl flex flex-col justify-center items-center">
            <div className="absolute right-6 top-3 p-1 hover:bg-gray-200" onClick={()=>{setShowModal(false)}}>
                <img
                    src={close}
                    className='object-scale-down h-4 lg:h-full w-4 lg:w-full'
                />
            </div>
            <div className="flex flex-col justify-center items-center m-auto">
                <img
                    src={mag_glass}
                    alt=''
                    className="object-scale-down h-16 lg:h-32 w-16 lg:w-32"
                />
                <div className="text-sm lg:text-xl">
                    Looking for a job or looking for candidate?
                </div>
                <div className="text-sm lg:text-xl">
                    Let's get started!
                </div>
                <div className="w-full mt-4 lg:mt-12 lg:flex lg:space-x-4 space-y-1 lg:space-y-0">
                    <div className="cursor-default w-full py-2 bg-white border border-blue-700 border-2 rounded-xl hover:bg-gray-200 text-blue-700 text-sm lg:text-xl" onClick={()=>{setTypeForm('jobseeker'); handleOnClick(); setShowModal(false); setShowBanner(false)}}>
                        Job Seeker
                    </div>
                    <div className="cursor-default w-full py-2 bg-blue-700 rounded-xl hover:bg-blue-500 text-white text-sm lg:text-xl" onClick={()=>{setTypeForm('employer'); handleOnClick(); setShowModal(false); setShowBanner(false)}}>
                        Employer
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;