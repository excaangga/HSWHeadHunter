import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import businessman from '../assets/businessman.png';
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
        <div className="fixed top-[23.5%] left-[29%] h-[53%] w-[42%] bg-white font-DMSans text-gray-700 font-medium text-center rounded-2xl">
            <div className="text-4xl mt-20">
                What Are You?
            </div>
            <div className="mt-10 flex justify-evenly">
                {/* left part */}
                <div className="text-center flex flex-col items-center rounded-2xl hover:bg-blue-100 hover:cursor-pointer py-6 px-12 mx-auto mr-8" onClick={()=>{setTypeForm('jobseeker'); handleOnClick(); setShowModal(false); setShowBanner(false)}}>
                    <img
                        src={mag_glass}
                        alt=''
                    />
                    <div className="text-4xl text-blue-700 mt-8">
                        Job Seeker
                    </div>
                </div>
                {/* right part */}
                <div className="text-center flex flex-col items-center rounded-2xl hover:bg-blue-100 hover:cursor-pointer py-6 px-12 mx-auto ml-8" onClick={()=>{setTypeForm('employer'); handleOnClick(); setShowModal(false); setShowBanner(false)}}>
                    <img
                        src={businessman}
                        alt=''
                    />
                    <div className="text-4xl text-blue-700 mt-8">
                        Employer
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;