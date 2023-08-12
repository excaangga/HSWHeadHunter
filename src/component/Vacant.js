import React from 'react';
import VacantList from './VacantList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Vacant() {
	let job_name = 'Sr. Tax Specialist';
	let location = 'Jakarta, Indonesia';
	let work_time = 'Full-time';
	let position = 'Electrical Manufacturing';
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		window.scrollTo(0, 0);

		const element1 = document.getElementById("header");
		const element2 = document.getElementById("nav");
		element1.classList.add("bg-white");
		element2.classList.add("bg-white");

		const fetchData = async () => {
			try {
				const backendUrl = 'http://202.157.185.132:3030';
				const jobs = await axios.get(backendUrl + '/jobs');
				setJobs(jobs.data);
			} catch (error) {
				console.error(error);
			}
		};
		// Fetch data initially
		fetchData();

		return () => {
			element1.classList.remove("bg-white");
			element2.classList.remove("bg-white");
		}
	}, []);
	return (
		<div className='mt-8 sm:mt-16 font-DMSans text-gray-700'>
			{/* title */}
			<div className='text-center text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-medium mb-8 xl:mb-12 2xl:mb-16'>
				Job Gallery
			</div>
			{/* blob */}
			<div className='absolute -left-10 top-30 -z-50 bg-[url("../public/blob.png")] bg-no-repeat bg-contain h-1/2 w-72'></div>
			<div className='hidden sm:block absolute rotate-180 right-0 bottom-0 -z-50 bg-[url("../public/blob.png")] bg-no-repeat h-full w-72'></div>
			{/* scrollable content */}
			<div className='container mx-auto max-h-[21rem] sm:max-h-[34rem] overflow-y-auto w-full md:w-3/4 xl:w-1/2'>
				{jobs.map((item) => item.shown == 1 ? (
					<div key={item.id}>
						<Link to={`/vacant/vacantDetail/${item.id}`}>
							<VacantList
								job_name={item.job_name}
								location={item.location}
								work_time={item.work_time}
								position={item.position}
							/>
						</Link>
					</div>
				) : null
				)}
			</div>
		</div>
	);
}

export default Vacant;
