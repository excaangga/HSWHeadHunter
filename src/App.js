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
import React, { useState, useEffect } from 'react';
import Banner from './component/Banner';
import VacantDetail from './component/VacantDetail';
import Modal from './component/Modal';
import { TypeContext } from './component/TypeContext';
import { FormPage } from './component/FormPage';
import { ModalContext } from './component/ModalContext';
import { BannerContext } from './component/BannerContext';
import Dropdown from './component/Dropdown';
import { MobileContext } from './component/MobileContext';
import Gmail from './assets/Gmail.png';
import Whatsapp from './assets/Whatsapp.png';
import Youtube from './assets/Youtube.png';
import Linkedin from './assets/Linkedin.png';
import axios from 'axios';
import Favicon from 'react-favicon';

function App() {
  const [mobile, setMobile] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [typeForm, setTypeForm] = useState('');
  const [showBanner, setShowBanner] = useState(true);
  const [gmail, setGmail] = useState([]);
  const [linkedin, setLinkedin] = useState([]);
  const [wa, setWa] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [logo, setLogo] = useState([]);
  const [icon, setIcon] = useState('');
  var gmail_url, linkedin_url, wa_url, youtube_url, logo_url;
  useEffect(() => {
    // FETCH ONLY THE ICON, BEWARE OF SPAGHETTI
    fetch('http://202.157.185.132:3030/logo')
      .then(response => response.json())
      .then(data => {
        const image = data[0].image_path;
        setIcon(image);
      })
      .catch(error => console.error(error));
    const fetchData = async () => {
      try {
        const backendUrl = 'http://202.157.185.132:3030';
        const gmail = await axios.get(backendUrl + '/social_media_gmail');
        setGmail(gmail.data);
        const linkedin = await axios.get(backendUrl + '/social_media_linkedin');
        setLinkedin(linkedin.data);
        const wa = await axios.get(backendUrl + '/social_media_wa');
        setWa(wa.data);
        const youtube = await axios.get(backendUrl + '/social_media_youtube');
        setYoutube(youtube.data);
        const logo = await axios.get(backendUrl + '/logo');
        setLogo(logo.data);
      } catch (error) {
        console.error(error);
      }
    };
    // Fetch data initially
    fetchData();
  }, []);
  gmail.map((item, index) =>
    item.shown === 1 ? (
      gmail_url = "mailto:" + item.url
    ) : null
  )
  linkedin.map((item, index) =>
    item.shown === 1 ? (
      linkedin_url = item.url
    ) : null
  )
  wa.map((item, index) =>
    item.shown === 1 ? (
      wa_url = item.url
    ) : null
  )
  youtube.map((item, index) =>
    item.shown === 1 ? (
      youtube_url = item.url
    ) : null
  )
  logo.map((item, index) =>
    item.image_path != null ? (
      logo_url = item.image_path
    ) : null
  )
  return (
    <ModalContext.Provider value={[showModal, setShowModal]}>
      <TypeContext.Provider value={[typeForm, setTypeForm]}>
        <MobileContext.Provider value={[mobile, setMobile]}>
          <BannerContext.Provider value={[showBanner, setShowBanner]}>
            <div className='font-DMSans bg-white'>
              <Favicon url={icon} />
              {console.log(icon)}
              <Router>
                {/* a whole container for nav */}
                <div id='header' className='flex px-3 sm:pr-12 sm:pl-4 mx-auto container-fill py-3 lg:py-4 items-center justify-between sticky top-0 z-30 bg-white'>
                  {/* nav consisted of logo and a list of links for md++ */}
                  <nav id='nav' className='bg-white flex items-center'>
                    <div className='h-8 sm:h-14 w-8 sm:w-14 lg:mx-8'>
                      <img
                        src={logo_url}
                        className='object-scale-down h-8 sm:h-14 w-8 sm:w-14'
                        alt=''
                      />
                    </div>
                    <div className='lg:hidden text-gray-700 ml-4 font-medium sm:text-xl'>
                      HSW Headhunter
                    </div>
                    <div className='hidden items-center lg:space-x-8 lg:flex lg:ml-8 xl:space-x-16 xl:ml-14 text-xl' onClick={() => { setShowModal(false); setShowBanner(true) }}>
                      <span className='text-gray-500 hover:text-gray-900'><Link to="/">Home</Link></span>
                      <span className='text-gray-500 hover:text-gray-900'><Link to="/industries">Industries</Link></span>
                      <span className='text-gray-500 hover:text-gray-900'><Link to="/candidates">Available Candidates</Link></span>
                      <span className='text-gray-500 hover:text-gray-900'><Link to="/vacant">Job Gallery</Link></span>
                    </div>
                  </nav>
                  <div className='hidden lg:block cursor-default px-10 py-2 md:mx-8 bg-blue-700 rounded-xl hover:bg-blue-500' onClick={() => setShowModal(true)}>
                    <h3 className="text-white text-xl">Contact Us</h3>
                  </div>
                  {/* mobile nav thingies */}
                  <div className="lg:hidden flex items-center">
                    {/* mobile hamburger button */}
                    <button className="outline-none mobile-menu-button" onClick={() => setMobile(!mobile)}>
                      <svg
                        className="w-6 h-6 text-gray-900"
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
                    {mobile &&
                      <div className='absolute left-0 top-0 w-screen h-screen'>
                        <div className='w-full z-50 h-[45%] sm:h-[60%]'>
                          <Dropdown />
                        </div>
                        <div className='w-full z-40 h-[55%] bg-black bg-opacity-50' onClick={() => setMobile(!mobile)}>

                        </div>
                      </div>
                    }
                  </div>
                </div>
                {/* Floating action button */}
                <div className='fixed w-auto h-auto top-[40%] right-4 z-20 bg-white space-y-1 rounded-full shadow-xl border'>
                  <a href={gmail_url} target="_blank">
                    <div className='rounded-full hover:shadow-md hover:border'>
                      <img
                        src={Gmail}
                        className='object-scale-up w-10 sm:w-14 h-10 sm:h-14'
                      />
                    </div>
                  </a>
                  <a href={wa_url} target="_blank">
                    <div className='rounded-full hover:shadow-md hover:border'>
                      <img
                        src={Whatsapp}
                        className='object-scale-up w-10 sm:w-14 h-10 sm:h-14'
                      />
                    </div>
                  </a>
                  <a href={youtube_url} target="_blank">
                    <div className='rounded-full hover:shadow-md hover:border'>
                      <img
                        src={Youtube}
                        className='object-scale-up w-10 sm:w-14 h-10 sm:h-14'
                      />
                    </div>
                  </a>
                  <a href={linkedin_url} target="_blank">
                    <div className='rounded-full hover:shadow-md hover:border'>
                      <img
                        src={Linkedin}
                        className='object-scale-up w-10 sm:w-14 h-10 sm:h-14'
                      />
                    </div>
                  </a>
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
                  <Route exact path='/vacant/vacantDetail/:id' element={< VacantDetail />}>
                  </Route>
                  <Route exact path='/form' element={< FormPage type={typeForm} />}>
                  </Route>
                </Routes>
                {/* Modal things */}
                {showModal &&
                  <div className=''>
                    <div className='fixed z-50'>
                      <Modal />
                    </div>
                    <div className='fixed top-0 h-screen w-screen z-40 bg-black bg-opacity-50' onClick={() => setShowModal(false)}>
                    </div>
                  </div>
                }

                {/* Banner goes here */}
                {/* <div className='hidden lg:block'>
                  {showBanner &&
                    <Banner />
                  }
                </div>         */}

                {/* Horizontal Line */}
                <div className='h-1 border-b-2 border-gray-300 mb-14 mt-14 sm:mb-20'>
                </div>
                {/* Footer links goes here */}
                <div className='container-fill  mx-auto w-7/12 2xl:w-6/12 text-center mb-14 sm:mb-20'>
                  {/* <div className='container-fill flex justify-center items-center mb-1 sm:mb-4'>
                    <img src={ logo } alt='' className='object-scale-down h-8 sm:h-14 w-8 sm:w-14' />
                  </div>
                  <div className='text-md sm:text-xl mb-12 text-gray-700'>
                      HSW Headhunter
                  </div> */}
                  <div className='xl:flex space-y-2 sm:space-y-4 justify-between items-end text-md sm:text-2xl text-blue-700 font-medium' onClick={() => { setShowModal(false); setShowBanner(true) }}>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/industries">Industries</Link></div>
                    <div><Link to="/candidates">Available Candidates</Link></div>
                    <div><Link to="/vacant">Job Gallery</Link></div>
                  </div>
                </div>
              </Router>
              {/* copyright and subs button goes here */}
              <div className='container-fill mx-auto justify-center xl:flex space-y-12 xl:space-y-0  items-center pb-16 w-10/12'>
                <div className='text-xs sm:text-xl text-gray-500 text-center'>
                  Rejuvenated 2023 | HSW Headhunter
                </div>
                {/* <div className='2xl:w-7/12 flex justify-end items-center'>
                  <div className="container-fill flex mb-3 bg-white w-full h-12 sm:h-16 2xl:w-7/12 items-center justify-between rounded-full shadow-xl hover:shadow-2xl border">
                      <input className="text-black px-3 sm:mx-6 text-xs sm:text-xl bg-white h-10 sm:h-14 rounded-full md:mr-16 focus:outline-none" placeholder="Enter your email" type="text"></input>
                      <button className="bg-blue-700 text-white text-xs sm:text-lg px-3 py-2 mx-2 h-8 sm:h-12 w-24 sm:w-32 flex items-center justify-center rounded-full hover:bg-blue-500">Subscribe</button>
                  </div>
                </div> */}
              </div>
            </div>
          </BannerContext.Provider>
        </MobileContext.Provider>
      </TypeContext.Provider>
    </ModalContext.Provider>
  );
}


export default App;
