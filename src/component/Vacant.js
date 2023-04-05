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
		<div className='mt-16 font-DMSans text-gray-700'>
			{/* title */}
			<div className='text-center text-5xl font-medium mb-12'>
				Job Gallery
			</div>
			{/* blob */}
			<div className='absolute -left-10 top-0 bg-[url("../public/blob.png")] h-3/4 w-72'></div>
			<div className='absolute rotate-180 -right-20 bottom-0 bg-[url("../public/blob.png")] h-3/4 w-72'></div>
			{/* scrollable content */}
			<div className='container-fill mx-auto max-h-[34rem] overflow-y-auto w-1/2'>
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
