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
import bg_mobile from '../assets/bg_mobile.png';

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
		const targetPosition = 500;
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
		<div className='mx-6 sm:mx-16 mt-10 font-DMSans '>			
			{/* filler */}
			<div className='relative z-10 container-fill w-full h-[270px] sm:h-[400px] lg:h-[30rem] xl:h-[40rem] 2xl:h-[58rem] lg:bg-[url("../src/assets/bg.png")] lg:bg-contain lg:bg-no-repeat lg:bg-center'>				
				<div className='text-center font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#404040] pt-10 sm:pt-20 md:pt-26 lg:pt-[5rem] xl:pt-32 sm:pb-6'>
					Time is Priceless
				</div>
				<div className='text-center font-light text-md sm:text-2xl lg:text-3xl xl:text-4xl text-[#404040] pb-8'>
					Delay onboard will lose your target profit
				</div>
			</div>
			{/* filler mobile */}
			<img 
				src={bg_mobile}
				className='lg:hidden absolute top-0 left-0 object-scale-up h-[360px] sm:h-[520px] w-full'
			/>
			{/* end filler */}

			{/* desc */}
			<div className='container-fill lg:flex justify-between lg:mx-8 xl:mx-20 mb-16 xl:mb-20 2xl:mb-32 mt-6'>
				{/* left desc */}
				<div className='text-gray-700 lg:w-8/12 2xl:w-5/12 my-10'>
					<div className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl mb-5 font-medium text-center lg:text-start'>
						Why HSW Headhunter?
					</div>
					<div className='text-sm sm:text-xl xl:text-2xl mb-10 xl:mb-14 2xl:mb-20 text-justify lg:text-start'>
						We have local and international clients base in Europe, USA, North African, Middle East, Singapore, Vietnam, Malaysia, Philippines, Japan, and Australia. Our candidates come from various citizenship includes Indonesian, Singaporean, Malaysian, Philippines, Indian, Arabian, Westerner, and Australian.
					</div>
					<div className='grid grid-rows-2 grid-cols-3 gap-y-4 lg:gap-y-0'>
						<div className='col-span-1 container text-center'>
							<div className='text-md sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-700 font-medium'>
								100+
							</div>
							<div className='text-[10px] sm:text-md md:text-xl text-gray-700'>
								Active Clients
							</div>
						</div>
						<div className='col-span-1 container text-center'>
							<div className='text-md sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-700 font-medium'>
								14+
							</div>
							<div className='text-[10px] sm:text-md md:text-xl text-gray-700'>
								Key Industries
							</div>
						</div>
						<div className='col-span-1 container text-center'>
							<div className='text-md sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-700 font-medium'>
								50.000+
							</div>
							<div className='text-[10px] sm:text-md md:text-xl text-gray-700'>
								Shortlisted Candidates
							</div>
						</div>
						<div className='col-span-1 container text-center self-end lg:self-center 2xl:self-end'>
							<div className='text-md sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-700 font-medium'>
								15+
							</div>
							<div className='text-[10px] sm:text-md md:text-xl text-gray-700'>
								Countries
							</div>
						</div>
						<div className='col-span-1 container text-center self-end'>
							<div className='text-xs sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700 font-medium'>
								Sameday Service
							</div>
							<div className='text-[10px] sm:text-md md:text-xl text-gray-700'>
								Submission Due Date
							</div>
						</div>
						<div className='col-span-1 container text-center self-end lg:self-center 2xl:self-end'>
							<div className='text-md sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-700 font-medium'>
								24/7
							</div>
							<div className='text-[10px] sm:text-md md:text-xl text-gray-700'>
								Hospitaly
							</div>
						</div>
					</div>
				</div>
				{/* right desc */}
				<div className='grid grid-cols-2 2xl:gap-10 lg:ml-4'>
					<img src={card_1} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl lg:self-end' />
					<img src={card_2} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl lg:self-end' />
					<img src={card_3} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl lg:self-start' />
					<img src={card_4} alt='' className='object-scale-down mx-auto h-40 w-40 md:h-56 md:w-56 2xl:h-80  2xl:w-80 hover:shadow-xl hover:border-t-2 hover:border-blue-700 rounded-xl lg:self-start' />
				</div>
			</div>
			{/* end desc */}

			{/* partner */}
			<div className='container-fill justify-center mb-16 xl:mb-20 2xl:mb-32'>
				<div className='text-md sm:text-3xl lg:text-4xl xl:text-5xl text-gray-700 text-center font-medium mb-5'>
					We're trusted by countless company
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
				<div className='text-md sm:text-3xl lg:text-4xl xl:text-5xl text-gray-700 text-center font-medium mb-5'>
					Here's our client testimonial
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
