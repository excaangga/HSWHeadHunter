import React from 'react';
import { useEffect } from 'react';

function Industries (){
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
	return(
		<div className='mt-8 sm:mt-16 font-DMSans'>
			<div className='text-center text-3xl xl:text-4xl 2xl:text-5xl font-medium text-gray-700 mb-8 xl:mb-12 2xl:mb-16'>
				Our Focus Industries
			</div>
			<div className='absolute -left-16 top-1/2 bg-[url("../public/blob.png")] h-3/4 w-72 -z-50'></div>
			<div className='container lg:flex text-center justify-center text-md sm:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-white mx-auto'>
				<div className='container-fill flex flex-col items-center w-full lg:w-1/2 2xl:w-5/12 mx-auto lg:space-y-5'>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Pulp & Paper Machine</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Automotive After Market</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Power Generation</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Industrial Equipment</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Seed & Crop Protection</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Metal Refining</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Tank Terminals</div>
				</div>
				<div className='container-fill flex flex-col items-center w-full lg:w-1/2 2xl:w-5/12 lg:mt-16 mx-auto lg:space-y-5'>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Food Ingredients</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>F&B Machinery</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Automation Tech</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Farming & Commodities</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Feed & Animal Nutrition</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Chemicals</div>
					<div className='container flex justify-center items-center bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-16 sm:h-32 w-11/12 xl:w-10/12'>Oil & Gas</div>
				</div>				
			</div>
		</div>
	);
}

export default Industries;
