import React from 'react';
import VacantList from './VacantList';
import { useEffect } from 'react';

function Vacant (){
	let job_name = 'Sr. Tax Specialist';
	let location = 'Jakarta, Indonesia';
    let work_time = 'Full-time';
    let position = 'Electrical Manufacturing';
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
	return (
		<div className='mt-8 sm:mt-16 font-DMSans text-gray-700'>
			{/* title */}
			<div className='text-center text-3xl xl:text-4xl 2xl:text-5xl font-medium mb-8 xl:mb-12 2xl:mb-16'>
				Job Gallery
			</div>
			{/* blob */}
			<div className='absolute -left-10 top-30 -z-50 bg-[url("../public/blob.png")] bg-no-repeat bg-contain h-1/2 w-72'></div>
			<div className='hidden sm:block absolute rotate-180 right-0 bottom-0 -z-50 bg-[url("../public/blob.png")] bg-no-repeat h-full w-72'></div>
			{/* scrollable content */}
			<div className='container mx-auto max-h-[21rem] sm:max-h-[34rem] overflow-y-auto w-full md:w-3/4 xl:w-1/2'>
				<VacantList 
					job_name={job_name}
					location={location}
					work_time={work_time}
					position={position}
				/>
				<VacantList 
					job_name={job_name}
					location={location}
					work_time={work_time}
					position={position}
				/>
				<VacantList 
					job_name={job_name}
					location={location}
					work_time={work_time}
					position={position}
				/>
				<VacantList 
					job_name={job_name}
					location={location}
					work_time={work_time}
					position={position}
				/>
				<VacantList 
					job_name={job_name}
					location={location}
					work_time={work_time}
					position={position}
				/>
				<VacantList 
					job_name={job_name}
					location={location}
					work_time={work_time}
					position={position}
				/>
				<VacantList 
					job_name={job_name}
					location={location}
					work_time={work_time}
					position={position}
				/>
				<VacantList 
					job_name={job_name}
					location={location}
					work_time={work_time}
					position={position}
				/>
			</div>
		</div>
	);
}

export default Vacant;
