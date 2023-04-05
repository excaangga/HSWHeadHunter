import React from "react";
import { VacantDetail } from "./VacantDetail";
import { useEffect } from "react";

function VacantDetailCaller (){
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
    let job_name = 'Sr. Tax Specialist';
	let location = 'Jakarta, Indonesia';
    let work_time = 'Full-time';
    let position = 'Electrical Manufacturing';
    let summary = 'Minimum Bachelor’s Degree in Engineering graduate with minimum 10-years of experience in managing Oil and Gas Operations and Maintenance and 10-years in HSE position. The candidate should have broad hands-on experienced on technical operation both production & maintenance as a back ground and having very solid/strong understanding HSE regulation/compliance/program and its implementation.';
	let requirements = [
		'Extensive knowledge of accounting methods, tax laws, and audits',
		'Excellent analytical and problem-solving skills',
		'Sharp attention to detail',
		'Strong written and oral communication skills',
		'Proficiency with relevant accounting software',
		'Bachelor’s degree (or equivalent) in accounting, finance, or related FileSystemDirectoryEntry',
		'Proven track record as a tax specialist or analyst',
		'Professional certification (ex: CPA in the United States)',
		'Experience in managing extensive volumes of accounting paperwork for a corporation or large organization'
	];
	let job_desc = [
		'Prepare, process, and maintain paperwork related to all aspects of the accounting cycle, culminating in the preparation and filing of tax returns',
		'Confirm the accuracy of records and documents related to tax reporting and preparation',
		'Maintain written and oral communications between the company and all relevant vendors and regulatory agencies',
		'Remain up to date with changes in the tax code and accounting laws',
		'Conduct research on tax compliance issues at the local and national levels'
	];
	let optional_info = 'Our team will review your application and will be in touch if your application is shortlisted to the next stage. If you do not hear from us in 30 days, we will keep your resume on file in case a relevant opportunity opens up.';
    return (
        <VacantDetail 
            job_name={job_name}
            location={location}
            work_time={work_time}
            position={position}
            summary={summary}
            requirements={requirements}
            job_desc={job_desc}
            optional_info={optional_info}
        />
    );
};
export default VacantDetailCaller;