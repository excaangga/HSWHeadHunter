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
import { useEffect } from 'react';

function Home (){
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	const settings_2 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
	return(
		// main content goes here
		<div className='mx-16 mt-10 font-DMSans '>
			{/* filler */}
			<div className='container-fill w-full h-[30rem] xl:h-[40rem] 2xl:h-[58rem] bg-[url("../src/assets/bg.png")] bg-contain bg-no-repeat bg-center'>				
				<div className='text-center font-bold text-4xl lg:text-5xl xl:text-6xl text-[#404040] pt-20 md:pt-26 lg:pt-[5rem] xl:pt-32 pb-6'>
					Time is Priceless
				</div>
				<div className='text-center font-light text-2xl lg:text-3xl xl:text-4xl text-[#404040] pb-8'>
					Delay onboard will lose your target profit
				</div>
			</div>
			{/* end filler */}

			{/* desc */}
			<div className='container-fill flex justify-between mx-20 mb-32 mt-6'>
				{/* left desc */}
				<div className='text-gray-700 w-5/12 mt-10'>
					<div className='text-5xl mb-5 font-medium'>
						Why HSW Headhunter?
					</div>
					<div className='text-2xl mb-20'>
						We have local and international clients base in Europe, USA, North African, Middle East, Singapore, Vietnam, Malaysia, Philippines, Japan, and Australia. Our candidates come from various citizenship includes Indonesian, Singaporean, Malaysian, Philippines, Indian, Arabian, Westerner, and Australian.
					</div>
					<div className='grid grid-rows-2 grid-cols-3'>
						<div className='col-span-1 container text-center'>
							<div className='text-5xl text-gray-700 font-medium'>
								100+
							</div>
							<div className='text-xl text-gray-700'>
								Active Clients
							</div>
						</div>
						<div className='col-span-1 container text-center'>
							<div className='text-5xl text-gray-700 font-medium'>
								14+
							</div>
							<div className='text-xl text-gray-700'>
								Key Industries
							</div>
						</div>
						<div className='col-span-1 container text-center'>
							<div className='text-5xl text-gray-700 font-medium'>
								50.000+
							</div>
							<div className='text-xl text-gray-700'>
								Shortlisted Candidates
							</div>
						</div>
						<div className='col-span-1 container text-center self-end'>
							<div className='text-5xl text-gray-700 font-medium'>
								15+
							</div>
							<div className='text-xl text-gray-700'>
								Countries
							</div>
						</div>
						<div className='col-span-1 container text-center'>
							<div className='text-4xl text-gray-700 font-medium'>
								Sameday Service
							</div>
							<div className='text-xl text-gray-700'>
								Submission Due Date
							</div>
						</div>
						<div className='col-span-1 container text-center self-end'>
							<div className='text-5xl text-gray-700 font-medium'>
								24/7
							</div>
							<div className='text-xl text-gray-700'>
								Hospitaly
							</div>
						</div>
					</div>
				</div>
				{/* right desc */}
				<div className='grid grid-cols-2 gap-10'>
					<img src={card_1} alt='' className='object-scale-down h-80 w-80 hover:shadow-2xl hover:border-t-2 hover:border-blue-700 rounded-xl' />
					<img src={card_2} alt='' className='object-scale-down h-80 w-80 hover:shadow-2xl hover:border-t-2 hover:border-blue-700 rounded-xl' />
					<img src={card_3} alt='' className='object-scale-down h-80 w-80 hover:shadow-2xl hover:border-t-2 hover:border-blue-700 rounded-xl' />
					<img src={card_4} alt='' className='object-scale-down h-80 w-80 hover:shadow-2xl hover:border-t-2 hover:border-blue-700 rounded-xl' />
				</div>
			</div>
			{/* end desc */}

			{/* partner */}
			<div className='container-fill justify-center my-32'>
				<div className='text-5xl text-gray-700 text-center font-medium mb-5'>
					We're trusted by countless company
				</div>
				<Slider {...settings}>
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
			<div className='container-fill my-32 mx-auto w-10/12'>
				<div className='text-5xl text-gray-700 text-center font-medium mb-5'>
					Here's our client testimonial
				</div>
				<Slider {...settings_2}>
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
