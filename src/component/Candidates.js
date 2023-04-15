import React from 'react';
import { useEffect } from 'react';

function Candidates (){
	useEffect(() => {
		window.scrollTo(0, 0);
		
		const element1 = document.getElementById("header");
		const element2 = document.getElementById("nav");			
		element1.classList.add("bg-white");
		element2.classList.add("bg-white");		
		return () => {
			element1.classList.remove("bg-white");
			element2.classList.remove("bg-white");
		}
	}, []);
	return(
		<div className='mt-8 sm:mt-16 font-DMSans text-gray-700'>
			<div className='text-center text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium mb-8 xl:mb-12 2xl:mb-16'>
				Available Candidates
			</div>
			<div className='absolute -left-10 top-32 -z-50 bg-[url("../public/blob.png")] h-screen w-72'></div>
			<div className='container-fill mx-auto flex sm:justify-evenly w-full md:w-3/4'>
				{/* Left part */}
				<div className='container-fill sm:w-5/12'>
					<div className='text-sm sm:text-xl lg:text-2xl xl:text-3xl font-medium'>
						► Executives
					</div>
					<div className='text-xs sm:text-md xl:text-xl ml-4 sm:ml-6 lg:ml-8 xl:ml-10 mb-[88px] sm:mb-28 md:mb-28 lg:mb-[87px] xl:mb-24'>
						CEO, CFO, COO, Managing Director, Country Manager
					</div>
					<div className='text-sm sm:text-xl lg:text-2xl xl:text-3xl font-medium'>
						► Senior Engineer
					</div>
					<div className='text-xs sm:text-md xl:text-xl ml-4 sm:ml-6 lg:ml-8 xl:ml-10 mb-10'>
						Automation, Product Specialist, Pricing Analyst Process Engineer, Application Engineer, Boiler Paper Machine Supervisor, Hydraulic Engineer
					</div>
					<div className='text-sm sm:text-xl lg:text-2xl xl:text-3xl font-medium'>
						► Back office
					</div>
					<div className='text-xs sm:text-md xl:text-xl ml-4 sm:ml-6 lg:ml-8 xl:ml-10'>
						HRIS, Finance, Accounting, Tax Logistic, Translator, Digital Marketing Sales Support, Executive Secretary
					</div>
				</div>
				{/* Right part */}
				<div className='container-fill sm:w-5/12'>
					<div className='text-sm sm:text-xl lg:text-2xl xl:text-3xl font-medium'>
						► Senior Manager
					</div>
					<div className='text-xs sm:text-md xl:text-xl ml-4 sm:ml-6 lg:ml-8 xl:ml-10 mb-10'>
						GM, Finance Controller, Sales, Marketing Plan Manager, SCM, Operation & Maintenance Product Manager, Sourcing & Sustainability 
					</div>
					<div className='text-sm sm:text-xl lg:text-2xl xl:text-3xl font-medium'>
						► Specialist Engineer
					</div>
					<div className='text-xs sm:text-md xl:text-xl ml-4 sm:ml-6 lg:ml-8 xl:ml-10 mb-10'>
						Process Control, Automation Robotic, Process Safety Process Technology, Machinery Safety, Flavourist Flavour & Fragrance, Formulator, Animal Nutrition
					</div>
					<div className='text-sm sm:text-xl lg:text-2xl xl:text-3xl font-medium'>
						► Project Management
					</div>
					<div className='text-xs sm:text-md xl:text-xl ml-4 sm:ml-6 lg:ml-8 xl:ml-10'>
						PM, Engineering, Procurement, Construction Installation, Commissioning, Project Control HSES, QA/QC, Procurement, Contruct Manager
					</div>
				</div>
			</div>
		</div>
	);
}

export default Candidates;
