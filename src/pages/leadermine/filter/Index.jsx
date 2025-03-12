import { useLocation } from 'react-router-dom';

import { LmNavButton } from "@/components/LmButton";

import { FilterDate } from "./date/Imdex";
import { FilterText } from "./text/Index";

export const LeadermineFilter = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('type') || 'date'; 

	return (
		<>
			<div className="lm-panel-title">
				<div className="lm-icon-box color-5"><div className="lm-icon-el color-white"></div></div>
				<div>
					<div className="title">FILTER</div>
					<div className="des">리더마인 javascript 필터 모음</div>
				</div>
			</div>

			<div className="lm-tab">
				<LmNavButton to="/leadermine/filter" lmClass={ getType === 'date' ? 'active' : '' }><div className="lm-icon-pin"></div>날짜</LmNavButton>
				<LmNavButton to="/leadermine/filter?type=text"><div className="lm-icon-pin"></div>문자</LmNavButton>
			</div>

			{ getType === "date" && <FilterDate />}
			{ getType === "text" && <FilterText />}
		</>
	);
};