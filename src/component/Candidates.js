import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Candidates (){
	const [candidates, setCandidates] = useState([]);
	useEffect(() => {
		window.scrollTo(0, 0);
		
		const element1 = document.getElementById("header");
		const element2 = document.getElementById("nav");			
		element1.classList.add("bg-white");
		element2.classList.add("bg-white");		

		const fetchData = async () => {
			try {
				const backendUrl = 'http://202.157.185.132:3030';
				const candidates = await axios.get(backendUrl + '/candidates');
				setCandidates(candidates.data);
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
	return(
		<div className='mt-8 sm:mt-16 font-DMSans text-gray-700'>
			<div className='text-center text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-medium mb-8 xl:mb-12 2xl:mb-16'>
				Available Candidates
			</div>
			<div className='absolute -left-10 top-32 -z-50 bg-[url("../public/blob.png")] h-screen w-72'></div>
			<div className='grid grid-cols-2 md:w-3/4 mx-auto'>
				{candidates.map((item) => item.shown == 1 ? (
					<div key={item.id}>
						<div className='container-fill mx-auto w-[90%] md:w-3/4'>
							<div className='container-fill'>
								<div className='grid grid-cols-12 mb-4'>
									<div className='col-span-1 text-sm sm:text-xl lg:text-2xl xl:text-3xl font-medium'>
										►
									</div>
									<div className='col-span-11 text-sm sm:text-xl lg:text-2xl xl:text-3xl font-medium'>
										{item.candidate_job}
									</div>
									<div className='col-span-1'></div>
									<div className='col-span-11 text-xs sm:text-md xl:text-xl'>
										{item.description}
									</div>
								</div>
							</div>
						</div>
					</div>
					)  : null
				)}
			</div>
		</div>
	);
}

export default Candidates;
