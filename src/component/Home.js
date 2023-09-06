import React from 'react';
import axios from 'axios';
import card_1 from '../assets/card_1.png';
import card_2 from '../assets/card_2.png';
import card_3 from '../assets/card_3.png';
import card_4 from '../assets/card_4.png';
import Testimony from './Testimony';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import icon_active_client from '../assets/100Clients.png';
import key_industries from '../assets/14KeyIndustries.png';
import shorlisted_candidates from '../assets/50kShortlistedCandidates.png';
import countries from '../assets/15Countries.png';
import sameday_service from '../assets/SamedayService.png';
import hospitality from '../assets/247Hospitality.png';
import icon_advantages from '../assets/icon_advantages.png';

function Home() {
	const settings_client = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	const settings_sm = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	const settings_xl = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	const settings_2xl = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	const [breakpoint, setBreakpoint] = useState('');
	function handleResize() {
		if (window.innerWidth < 1280) { setBreakpoint('sm') }
		else if (window.innerWidth >= 1280 && window.innerWidth < 1536) { setBreakpoint('xl') }
		else if (window.innerWidth >= 1536) { setBreakpoint('2xl') }
	};
	// function handleScroll() {
	// 	const scrollPosition = window.scrollY;
	// 	const targetPosition = 270;
	// 	const element1 = document.getElementById("header");
	// 	const element2 = document.getElementById("nav");
	// 	if (scrollPosition >= targetPosition) {
	// 		element1.classList.add("bg-white");
	// 		element2.classList.add("bg-white");
	// 	} else {
	// 		element1.classList.remove("bg-white");
	// 		element2.classList.remove("bg-white");
	// 	}
	// }
	const [clients, setClients] = useState([]);
	const [heroImage, setHeroImage] = useState([]);
	const [testimony, setTestimony] = useState([]);
	useEffect(() => {
		// window.scrollTo(0, 0);
		// window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		// handleScroll();
		handleResize();
		document.title = "HSW HeadHunter | Home";

		const fetchData = async () => {
			try {
				const backendUrl = 'http://202.157.185.132:3030';
				const active_clients = await axios.get(backendUrl+'/active_clients');
				setClients(active_clients.data);
				const hero_images = await axios.get(backendUrl+'/hero_image');
				setHeroImage(hero_images.data);
				const testimony = await axios.get(backendUrl+'/testimony_card');
				setTestimony(testimony.data);
			} catch (error) {
				console.error(error);
			}
		};
		// Fetch data initially
		fetchData();
		// put inside return: window.removeEventListener("scroll", handleScroll);
		return () => { window.removeEventListener('resize', handleResize); };
	}, []);
	var settings_testimony;
	if (breakpoint === 'sm') {
		settings_testimony = settings_sm;
	} else if (breakpoint === 'xl') {
		if (testimony.length === 1) {
			settings_testimony = settings_sm;
		} else if (testimony.length >= 2) {
			settings_testimony = settings_xl;
		}
	} else if (breakpoint === '2xl') {
		if (testimony.length === 2) {
			settings_testimony = settings_xl;
		} else if (testimony.length >= 3) {
			settings_testimony = settings_2xl;
		}
	}
	console.log(breakpoint);
	return (
		// main content goes here
		<div className='mx-6 sm:mx-16 sm:mt-4 font-DMSans '>
			{/* filler */}
			{/* <div className='relative z-10 container-fill w-full h-[270px] sm:h-[400px] lg:h-[30rem] xl:h-[40rem] 2xl:h-[58rem] lg:bg-[url("../src/assets/bg.png")] lg:bg-contain lg:bg-no-repeat lg:bg-center'>				
				<div className='text-center font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#404040] pt-10 sm:pt-20 md:pt-26 lg:pt-[5rem] xl:pt-32 sm:pb-6'>
					Time is Priceless
				</div>
				<div className='text-center font-light text-md sm:text-2xl lg:text-3xl xl:text-4xl text-[#404040] pb-8'>
					Delay onboard will lose your target profit
				</div>
			</div> */}
			{heroImage.map((item) => item.breakpoint_flag === "1280" ? (
				<div key={item.id}>
					<img
						src={item.image_path}
						className='hidden xl:block w-full'
					/>
				</div>
			) : null)
			}
			{heroImage.map((item) => item.breakpoint_flag === "1024" ? (
				<div key={item.id}>
					<img
						src={item.image_path}
						className='hidden lg:block xl:hidden w-full'
					/>
				</div>
			) : null)
			}
			{/* filler mobile */}
			{heroImage.map((item) => item.breakpoint_flag === "768" ? (
				<div key={item.id}>
					<img
						src={item.image_path}
						className='hidden md:block lg:hidden mt-28 mx-0 w-full opacity-0'
					/>
					<img
						src={item.image_path}
						className='hidden md:block lg:hidden absolute top-20 left-0 w-full'
					/>
				</div>
			) : null)
			}
			{heroImage.map((item) => item.breakpoint_flag === "640" ? (
				<div key={item.id}>
					<img
						src={item.image_path}
						className='md:hidden mt-20 sm:mt-28 mx-0 w-full opacity-0'
					/>
					<img
						src={item.image_path}
						className='block md:hidden absolute top-16 sm:top-20 left-0 w-full'
					/>
				</div>
			) : null)
			}
			{/* end filler */}

			{/* desc */}
			<div className='container-fill lg:grid grid-cols-2 justify-center mb-4 lg:mb-12 2xl:mb-20 sm:mt-6 md:mt-12 xl:mt-20'>
				{/* left desc */}
				<div className='self-center col-span-1 text-gray-700 mb-10 lg:mb-0'>
					<div className='text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl mb-5 font-medium text-center lg:text-start'>
						Why Us?
					</div>
					<div className='text-sm sm:text-base 2xl:text-2xl mb-5 text-justify lg:text-start'>
						Jakarta based professional headhunter which focus on searching experience candidates for our clients who put “time” as top priority for their investment and business.
					</div>
					<div className='text-sm sm:text-base 2xl:text-2xl mb-5 text-justify lg:text-start'>
						Appointed by global clients in Europe, USA, Japan, Singapore, Malaysia, Australia, North African, Middle East, Vietnam, Philippines.
					</div>
					<div className='text-sm sm:text-base 2xl:text-2xl mb-10 xl:mb-14 text-justify lg:text-start'>
						Our candidates come from Indonesian, Singaporean, Malaysian, Westerner, Australian, Philippines, Indian and Arabian.
					</div>
					{/* <div className='flex flex-col justify-center items-center space-y-4 xl:space-y-8 lg:mb-10'>
						<div className='container flex space-x-4 justify-between'>
							<img
								src={icon_active_client}
								className='object-scale-down h-[25%] w-[25%]'
							/>
							<img
								src={key_industries}
								className='object-scale-down h-[25.5%] w-[25.5%]'
							/>
							<img
								src={shorlisted_candidates}
								className='object-scale-down h-[42%] w-[42%]'
							/>
						</div>
						<div className='container flex space-x-4 items-end justify-between'>
							<img
								src={countries}
								className='object-scale-down h-[18%] w-[18%]'
							/>
							<img
								src={sameday_service}
								className='object-scale-down h-[35%] w-[35%]'
							/>
							<img
								src={hospitality}
								className='object-scale-down h-[20%] w-[20%]'
							/>
						</div>
					</div> */}
					<img src={icon_advantages} alt='' className='w-full'></img>
				</div>
				{/* right desc */}
				<div className='col-span-1 grid grid-cols-2 gap-y-5 lg:gap-y-0 lg:ml-4 w-[80%] lg:w-full mx-auto mb-10 lg:mb-0'>
					<img src={card_1} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl self-center' />
					<img src={card_2} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl self-center' />
					<img src={card_3} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl self-center' />
					<img src={card_4} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl self-center' />
				</div>
			</div>
			{/* end desc */}

			{/* partner */}
			<div className='container-fill justify-center mb-16 xl:mb-20 2xl:mb-32'>
				<div className='text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-gray-700 text-center font-medium mb-5'>
					Our Top Global Clients
				</div>
				<Slider {...settings_client}>
					{clients.map((item) => item.shown == 1 ? (
						<div key={item.id}>
							<img src={item.image_path} alt='' className="object-scale-down w-10/12 mx-auto" />
						</div>
					) : null
					)}
				</Slider>
			</div>
			{/* end partner */}

			{/* testimony */}
			{/* <div className='container-fill mb-16 xl:mb-20 2xl:mb-32 mx-auto'>
				<div className='text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-gray-700 text-center font-medium mb-5'>
					Client Testimony
				</div>
				<Slider {...settings_testimony}>
					{testimony.map((item) => item.shown === 1 ? (
						<div key={item.id}>
							<Testimony
								company_logo={item.company_logo}
								summary={item.summary}
								desc={item.description}
								person_picture={item.person_picture}
								person_name={item.person_name}
								person_position={item.person_position}
							/>
						</div>
					) : null)
					}
				</Slider>
			</div> */}
			{/* end testimony */}
		</div>
	);
}

export default Home;
