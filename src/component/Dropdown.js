import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "./ModalContext";
import { MobileContext } from "./MobileContext";

function Dropdown(){
    const [showModal, setShowModal] = useContext(ModalContext);
    const [mobile, setMobile] = useContext(MobileContext);
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        return()=>{
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    const navigate = useNavigate();
    const navToHome = () => navigate('/');
    const navToIndustries = () => navigate('/industries');
    const navToCandidates = () => navigate('/candidates');
    const navToVacant = () => navigate('/vacant');
    return(
        <ModalContext.Provider value={[showModal, setShowModal]}>
            <div className="font-DMSans text-gray-400 w-full h-full bg-white flex flex-col justify-center items-center text-sm sm:text-xl font-medium">
                <div className="p-1 sm:p-3 hover:text-gray-700" onClick={()=>{navToHome(); setMobile(false)}}>
                    Home
                </div>
                <div className="p-1 sm:p-3 hover:text-gray-700" onClick={()=>{navToIndustries(); setMobile(false)}}>
                    Industries
                </div>
                <div className="p-1 sm:p-3 hover:text-gray-700" onClick={()=>{navToCandidates(); setMobile(false)}}>
                    Available Candidates
                </div>
                <div className="p-1 sm:p-3 hover:text-gray-700" onClick={()=>{navToVacant(); setMobile(false)}}>
                    Job Gallery
                </div>
                <div className="my-3 sm:my-5">
                    <div className='px-10 py-3 md:mx-8 bg-blue-700 rounded-xl hover:bg-blue-500' onClick={()=>{setShowModal(true); setMobile(false)}}>
                      <h3 className="text-white text-sm sm:text-xl">Contact Us</h3>
                    </div>
                </div>
            </div>
        </ModalContext.Provider>
    );
}
export default Dropdown;