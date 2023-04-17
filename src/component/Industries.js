import React from 'react';
import { useEffect } from 'react';

function Industries (){
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
		<div className='mt-8 sm:mt-16 font-DMSans'>
			<div className='text-center text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-medium text-gray-700 mb-8 xl:mb-12 2xl:mb-16'>
				Our Focus Industries
			</div>
			<div className='absolute -left-16 top-1/2 bg-[url("../public/blob.png")] h-3/4 w-72 -z-50'></div>
			<div className='container flex text-center justify-center text-xs sm:text-xl xl:text-3xl 2xl:text-4xl font-medium text-white mx-auto'>
				<div className='container-fill flex flex-col items-end w-full lg:w-1/2 2xl:w-5/12 ml-auto lg:space-y-5'>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Pulp & Paper Machine</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Automotive After Market</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Power Generation</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Industrial Equipment</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Seed & Crop Protection</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Metal Refining</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Tank Terminals</div></div>
				</div>
				<div className='container-fill flex flex-col items-start w-full lg:w-1/2 2xl:w-5/12 lg:mt-16 mr-auto lg:space-y-5'>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Food Ingredients</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>F&B Machinery</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Automation Technology</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Farming & Commodities</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Feed & Animal Nutrition</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Chemicals</div></div>
					<div className='container grid grid-cols-1 bg-[url("../public/flag_point_rev.png")] xl:bg-[url("../public/flag_point.png")] bg-contain bg-no-repeat bg-center h-12 sm:h-20 lg:h-32 w-11/12 2xl:w-full'><div className='col-span-1 pt-[18px] sm:pt-[30px] lg:pt-14 xl:pt-[50px] 2xl:pt-12 pl-2 sm:pl-4 md:pl-6'>Oil & Gas</div></div>
				</div>				
			</div>
		</div>
	);
}

export default Industries;
