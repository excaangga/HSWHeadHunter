import React from 'react';
import card_1 from '../assets/card_1.png';
import card_2 from '../assets/card_2.png';
import card_3 from '../assets/card_3.png';
import card_4 from '../assets/card_4.png';
import Testimony from './Testimony';
import temp_logo from '../assets/temp_logo.png';
import temp_picture from '../assets/temp_picture.jpeg';
import client_1 from '../assets/client_1.png';
import client_2 from '../assets/client_2.png';
import client_3 from '../assets/client_3.png';
import client_4 from '../assets/client_4.png';
import client_5 from '../assets/client_5.png';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import active_client from '../assets/100Clients.png';
import key_industries from '../assets/14KeyIndustries.png';
import shorlisted_candidates from '../assets/50kShortlistedCandidates.png';
import countries from '../assets/15Countries.png';
import sameday_service from '../assets/SamedayService.png';
import hospitality from '../assets/247Hospitality.png';
import bg_1280 from '../assets/1280.png';
import bg_1024 from '../assets/1024.png';
import bg_768 from '../assets/768.png';
import bg_640 from '../assets/640.png';

function Home (){
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
		if (window.innerWidth < 1280){setBreakpoint('sm')}
		else if (window.innerWidth >= 1280 && window.innerWidth < 1536){setBreakpoint('xl')}
		else if (window.innerWidth >= 1536){setBreakpoint('2xl')}
	};
	function handleScroll() {
		const scrollPosition = window.scrollY;
		const targetPosition = 270;
		const element1 = document.getElementById("header");
		const element2 = document.getElementById("nav");			
		if (scrollPosition >= targetPosition) {
			element1.classList.add("bg-white");
			element2.classList.add("bg-white");
		} else {
			element1.classList.remove("bg-white");
			element2.classList.remove("bg-white");
		}
	}
	useEffect(() => {
		window.scrollTo(0, 0);
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		handleScroll();
		handleResize();
		return () => {window.removeEventListener("scroll", handleScroll); window.removeEventListener('resize', handleResize);};
	}, []);
	var settings_testimony;
	switch (breakpoint) {
		case 'sm':
			settings_testimony=settings_sm
			break;
		case 'xl':
			settings_testimony=settings_xl
			break;
		case '2xl':
			settings_testimony=settings_2xl
			break;
		default:
			break;
	}
	console.log(breakpoint);
	return(
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
			<img
				src={bg_1280}
				className='hidden xl:block w-full'
			/>
			<img
				src={bg_1024}
				className='hidden lg:block xl:hidden w-full'
			/>
			{/* filler mobile */}
			<div>
				<img
					src={bg_768}
					className='hidden md:block lg:hidden relative top-0 left-0 w-full opacity-0'
				/>
				<img
					src={bg_768}
					className='hidden md:block lg:hidden absolute top-0 left-0 w-full'
				/>
			</div>
			<div>
				<img
					src={bg_640}
					className='md:hidden relative top-0 left-0 w-full opacity-0'
				/>
				<img
					src={bg_640}
					className='md:hidden absolute top-0 left-0 w-full'
				/>
			</div>
			{/* end filler */}

			{/* desc */}
			<div className='container-fill lg:grid grid-cols-2 justify-center lg:mx-8 xl:mx-20 mb-16 xl:mb-20 2xl:mb-32 sm:mt-6'>
				{/* left desc */}
				<div className='self-center col-span-1 text-gray-700 lg:w-10/12 sm:my-10'>
					<div className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mb-5 font-medium text-center lg:text-start'>
						Why Us?
					</div>
					<div className='text-sm sm:text-base xl:text-xl 2xl:text-2xl mb-5 text-justify lg:text-start'>
						Jakarta based professional headhunter which focus on searching experience candidates for our clients who put “ me” as top priority for their investment and business.
					</div>
					<div className='text-sm sm:text-base xl:text-xl 2xl:text-2xl mb-5 text-justify lg:text-start'>
					Appointed by global clients in Europe, USA, Japan, Singapore, Malaysia Australia, North African, Middle East, Vietnam, Philippines.
					</div>
					<div className='text-sm sm:text-base xl:text-xl 2xl:text-2xl mb-10 xl:mb-14 text-justify lg:text-start'>
					Our candidates come from Indonesian, Singaporean, Malaysian, Westerner, Australian, Philippines, Indian and Arabian.
					</div>
					<div className='flex flex-col justify-center items-center space-y-4 xl:space-y-8 mb-10 w-[90%]'>
						<div className='container flex space-x-4 justify-between'>
							<img
								src={active_client}
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
					</div>
				</div>
				{/* right desc */}
				<div className='self-center col-span-1 grid grid-cols-2 2xl:gap-10 lg:ml-4'>
					<img src={card_1} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl lg:self-end' />
					<img src={card_2} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl lg:self-end' />
					<img src={card_3} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl lg:self-start' />
					<img src={card_4} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl lg:self-start' />
				</div>
			</div>
			{/* end desc */}

			{/* partner */}
			<div className='container-fill justify-center mb-16 xl:mb-20 2xl:mb-32'>
				<div className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-700 text-center font-medium mb-5'>
					Our Top Global Clients
				</div>
				<Slider {...settings_client}>
					<div>
						<img src={client_1} alt='' className="object-scale-down w-10/12 mx-auto" />
					</div> 
					<div>
						<img src={client_2} alt='' className="object-scale-down w-10/12 mx-auto" />
					</div> 
					<div>
						<img src={client_3} alt='' className="object-scale-down w-10/12 mx-auto" />
					</div> 
					<div>
						<img src={client_4} alt='' className="object-scale-down w-10/12 mx-auto" />
					</div>
					<div>
						<img src={client_5} alt='' className="object-scale-down w-10/12 mx-auto" />
					</div>
				</Slider>
			</div>
			{/* end partner */}

			{/* testimony */}
			<div className='container-fill mb-16 xl:mb-20 2xl:mb-32 mx-auto'>
				<div className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-700 text-center font-medium mb-5'>
					Client Testimony
				</div>
				<Slider {...settings_testimony}>
					{/* <div id='slide1' className='container-fill justify-center flex'> */}
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
					{/* </div> */}
					{/* <div id='slide2' className='container-fill justify-center flex'> */}
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
					{/* </div> */}
					{/* <div id='slide3' className='container-fill justify-center flex'> */}
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
						<Testimony
							company_logo={ temp_logo }
							summary="THIS IS AMAZINGGG"
							desc="Cillum deserunt magna officia dolor duis eiusmod."
							person_picture={ temp_picture }
							person_name='Parry Hotter'
							person_position='Ketua Osis Hogwarts'
						/>
					{/* </div> */}
				</Slider>
			</div>
			{/* end testimony */}
		</div>		
	);
}

export default Home;
