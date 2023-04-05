import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Link
} from 'react-router-dom';
import Home from './component/Home';
import Industries from './component/Industries';
import Candidates from './component/Candidates';
import Vacant from './component/Vacant';
import React, { useState } from 'react';
import Banner from './component/Banner';
import logo from './assets/logo.png';
import VacantDetailCaller from './component/VacantDetailCaller';
import Modal from './component/Modal';
import { TypeContext } from './component/TypeContext';
import { FormPage } from './component/FormPage';
import { ModalContext } from './component/ModalContext';
import { BannerContext } from './component/BannerContext';

function App() {
  const [mobile, setMobile] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [typeForm, setTypeForm] = useState('');
  const [showBanner, setShowBanner] = useState(true);
  return (
    <ModalContext.Provider value={[showModal, setShowModal]}>
      <TypeContext.Provider value={[typeForm, setTypeForm]}>
        <BannerContext.Provider value={[showBanner, setShowBanner]}>
          <div className='font-DMSans'>
            <Router>
              {/* a whole container */}
              <div className='flex px-12 mx-auto container-fill py-4 items-center justify-between sticky top-0 z-30 bg-white'>
                {/* nav consisted of logo and a list of links for md++ */}
                <nav className='bg-white flex items-center lg:space-x-24'>
                  <div className='h-14 w-14 md:mx-8'>
                    <img
                      src={ logo }
                      className='object-scale-down h-14 w-14'
                      alt=''
                    />
                  </div>
                  <div className='hidden items-center lg:space-x-16 lg:flex ml-14 text-xl' onClick={()=>{setShowModal(false); setShowBanner(true)}}>
                    <span className='text-gray-500 hover:text-gray-900'><Link to="/">Homepage</Link></span>
                    <span className='text-gray-500 hover:text-gray-900'><Link to="/industries">Industries</Link></span>
                    <span className='text-gray-500 hover:text-gray-900'><Link to="/candidates">Candidates</Link></span>
                    <span className='text-gray-500 hover:text-gray-900'><Link to="/vacant">Job Gallery</Link></span>
                  </div>
                </nav>
                <div className='cursor-default px-10 py-2 md:mx-8 bg-blue-700 rounded-xl hover:bg-blue-500' onClick={()=>setShowModal(true)}>
                    <h3 className="text-white text-xl">Contact Us</h3>
                </div>
                {/* mobile nav thingies */}
                <div className="lg:hidden flex items-center">
                  {/* mobile hamburger button */}
                  <button className="outline-none mobile-menu-button" onClick={()=>setMobile(!mobile)}>
                    <svg
                      className="w-6 h-6 text-gray-500"
                      x-show="!showMenu"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                  { mobile &&
                    <p>AAAAAAAA</p>
                  }
                </div>
              </div>
              <Routes>
                <Route exact path='/' element={< Home />}>
                </Route>
                <Route exact path='/industries' element={< Industries />}>
                </Route>
                <Route exact path='/candidates' element={< Candidates />}>
                </Route>
                <Route exact path='/vacant' element={< Vacant />}>
                </Route>
                <Route exact path='/vacant/vacantDetail' element={< VacantDetailCaller />}>
                </Route>
                <Route exact path='/form' element={< FormPage type={typeForm} />}>
                </Route>
              </Routes>
              {/* Modal things */}
              { showModal &&
                  <div className=''>
                    <div className='fixed z-50'>
                      <Modal />
                    </div>
                    <div className='fixed top-0 h-screen w-screen z-40 bg-black bg-opacity-50' onClick={()=>setShowModal(false)}>
                    </div>
                  </div>
              }
              {/* Banner goes here */}
              {showBanner &&
                <Banner />
              }
          
              {/* Horizontal Line */}
              <div className='h-1 border-b-2 border-gray-300 mb-32'>
              </div>
              {/* Footer links goes here */}
              <div className='container-fill  mx-auto w-5/12 text-center mb-28'>
                <div className='container-fill flex justify-center items-center mb-4'>
                  <img src={ logo } alt='' />
                </div>
                <div className='text-xl mb-12 text-gray-700'>
                    HSW Headhunter
                </div>
                <div className='flex justify-between text-2xl text-blue-700 font-medium' onClick={()=>{setShowModal(false); setShowBanner(true)}}>
                    <span><Link to="/">Homepage</Link></span>
                    <span><Link to="/industries">Industries</Link></span>
                    <span><Link to="/candidates">Candidates</Link></span>
                    <span><Link to="/vacant">Job Gallery</Link></span>
                </div>
              </div>
            </Router>
            {/* copyright and subs button goes here */}
            <div className='container-fill mx-28 justify-between flex items-center mb-12'>
              <div className='text-xl text-blue-500'>
                Copyright © 2023 HSW Headhunter | All Rights Reserved
              </div>
              <div className='w-1/2 flex justify-end'>
                <div className="container-fill flex mb-3 bg-white h-16 w-7/12 items-center justify-evenly rounded-full shadow-xl hover:shadow-2xl">
                    <input className="text-black px-3 text-xl bg-white h-14 rounded-full mr-16 focus:outline-none" placeholder="Enter your email" type="text"></input>
                    <button className="bg-blue-700 text-white text-lg px-3 py-2 h-12 w-32 flex items-center justify-center rounded-full hover:bg-blue-500">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </BannerContext.Provider>
      </TypeContext.Provider>
    </ModalContext.Provider>
  );
}
  

export default App;
