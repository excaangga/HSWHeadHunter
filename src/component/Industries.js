import React from 'react';
import { useEffect } from 'react';

function Industries (){
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
	return(
		<div className='mt-16 font-DMSans'>
			<div className='text-center text-5xl font-medium text-gray-700 mb-16'>
				Our Focus Industries
			</div>
			<div className='absolute -left-10 top-1/2 bg-[url("../public/blob.png")] h-3/4 w-72'></div>
			<div className='container-fill flex text-center text-4xl font-bold text-white'>
				<div className='container-fill w-5/12'>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 ml-60'>Pulp & Paper Machine</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 ml-60'>Automotive After Market</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 ml-60'>Power Generation</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 ml-60'>Industrial Equipment</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 ml-60'>Seed & Crop Protection</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 ml-60'>Metal Refining</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 ml-60'>Tank Terminals</div>
				</div>
				<div className='container-fill w-5/12 mt-16'>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 ml-52'>Food Ingredients</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 mx-52'>F&B Machinery</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 mx-52'>Automation Tech</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 mx-52'>Farming & Commodities</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 mx-52'>Feed & Animal Nutrition</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 mx-52'>Chemicals</div>
					<div className='container flex justify-center items-center mb-5 bg-[url("../public/flag_point.png")] h-32 w-10/12 mx-52'>Oil & Gas</div>
				</div>				
			</div>
		</div>
	);
}

export default Industries;
