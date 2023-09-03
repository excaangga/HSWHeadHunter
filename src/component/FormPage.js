import React, { useContext } from "react";
import { TypeContext } from "./TypeContext";
import Employer from "./Employer";
import Jobseeker from "./Jobseeker";
import { useEffect } from "react";

export const FormPage = (type) => {
    useEffect(() => {
		window.scrollTo(0, 0);
        document.title = "HSW HeadHunter | Contact Us";
	}, []);
    const [typeForm, setTypeForm] = useContext(TypeContext);
    return(
        <div>
            { typeForm === 'employer' &&
                <Employer />
            }
            { typeForm === 'jobseeker' &&
                <Jobseeker />
            }
        </div>
    );
}