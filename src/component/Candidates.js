import React from 'react';
import { useEffect } from 'react';

function Candidates (){
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
	return(
		<div className='mt-16 font-DMSans text-gray-700'>
			<div className='text-center text-5xl font-medium mb-16'>
				Available Candidates
			</div>
			<div className='absolute -left-10 top-0 bg-[url("../public/blob.png")] h-3/4 w-72'></div>
			<div className='container-fill mx-auto flex justify-evenly w-3/4'>
				{/* Left part */}
				<div className='container-fill w-5/12'>
					<div className='text-3xl font-medium'>
						► Executives
					</div>
					<div className='text-xl ml-10 mb-24'>
						CEO, CFO, COO, Managing Director, Country Manager
					</div>
					<div className='text-3xl font-medium'>
						► Senior Engineer
					</div>
					<div className='text-xl ml-10 mb-10'>
						Automation, Product Specialist, Pricing Analyst Process Engineer, Application Engineer, Boiler Paper Machine Supervisor, Hydraulic Engineer
					</div>
					<div className='text-3xl font-medium'>
						► Back office
					</div>
					<div className='text-xl ml-10'>
						HRIS, Finance, Accounting, Tax Logistic, Translator, Digital Marketing Sales Support, Executive Secretary
					</div>
				</div>
				{/* Right part */}
				<div className='container-fill w-5/12'>
					<div className='text-3xl font-medium'>
						► Senior Manager
					</div>
					<div className='text-xl ml-10 mb-10'>
						GM, Finance Controller, Sales, Marketing Plan Manager, SCM, Operation & Maintenance Product Manager, Sourcing & Sustainability 
					</div>
					<div className='text-3xl font-medium'>
						► Specialist Engineer
					</div>
					<div className='text-xl ml-10 mb-10'>
						Process Control, Automation Robotic, Process Safety Process Technology, Machinery Safety, Flavourist Flavour & Fragrance, Formulator, Animal Nutrition
					</div>
					<div className='text-3xl font-medium'>
						► Project Management
					</div>
					<div className='text-xl ml-10'>
						PM, Engineering, Procurement, Construction Installation, Commissioning, Project Control HSES, QA/QC, Procurement, Contruct Manager
					</div>
				</div>
			</div>
		</div>
	);
}

export default Candidates;
