import { useLocation } from 'react-router-dom';

import { LmNavButton } from "@/components/LmButton";
import { FormCheckRadio } from "./CheckRadio";
import { FormInput } from "./Input";
import { FormSelect } from "./Select";
import { FormTextarea } from "./Textarea";
import { FormTable } from "./Table";

export const LeadermineDesignForm = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('formType') || 'checkradio'; 

	return (
		<>
			<div className="lm-tab">
				<LmNavButton to="/leadermine/design?type=form"><div className="lm-icon-pin"></div>Checkbox Radio</LmNavButton>
				<LmNavButton to="/leadermine/design?type=form&formType=input"><div className="lm-icon-pin"></div>Input</LmNavButton>
				<LmNavButton to="/leadermine/design?type=form&formType=select"><div className="lm-icon-pin"></div>Select</LmNavButton>
				<LmNavButton to="/leadermine/design?type=form&formType=textarea"><div className="lm-icon-pin"></div>Textarea</LmNavButton>
				<LmNavButton to="/leadermine/design?type=form&formType=table"><div className="lm-icon-pin"></div>Table ...etc</LmNavButton>
			</div>
			{getType === 'checkradio' && <FormCheckRadio />}
			{getType === 'input' && <FormInput />}
			{getType === 'select' && <FormSelect />}
			{getType === 'textarea' && <FormTextarea />}
			{getType === 'table' && <FormTable />}
		</>
	);
};
