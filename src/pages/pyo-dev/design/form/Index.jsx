import { useLocation } from 'react-router-dom';

import { PyoNavButton } from "@/components/PyoButton";
import { FormCheckRadio } from "./CheckRadio";
import { FormInput } from "./Input";
import { FormSelect } from "./Select";
import { FormTextarea } from "./Textarea";
import { FormTable } from "./Table";

export const PyoDevDesignForm = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('formType') || 'checkradio'; 

	return (
		<>
			<div className="pyo-tab">
				<PyoNavButton to="/pyo-dev/design?type=form"><div className="pyo-icon-pin"></div>Checkbox Radio</PyoNavButton>
				<PyoNavButton to="/pyo-dev/design?type=form&formType=input"><div className="pyo-icon-pin"></div>Input</PyoNavButton>
				<PyoNavButton to="/pyo-dev/design?type=form&formType=select"><div className="pyo-icon-pin"></div>Select</PyoNavButton>
				<PyoNavButton to="/pyo-dev/design?type=form&formType=textarea"><div className="pyo-icon-pin"></div>Textarea</PyoNavButton>
				<PyoNavButton to="/pyo-dev/design?type=form&formType=table"><div className="pyo-icon-pin"></div>Table ...etc</PyoNavButton>
			</div>
			{getType === 'checkradio' && <FormCheckRadio />}
			{getType === 'input' && <FormInput />}
			{getType === 'select' && <FormSelect />}
			{getType === 'textarea' && <FormTextarea />}
			{getType === 'table' && <FormTable />}
		</>
	);
};
