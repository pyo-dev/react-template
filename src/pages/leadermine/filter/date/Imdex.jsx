import { useLocation } from 'react-router-dom';

import { LmNavButton } from "@/components/LmButton";
import { FilterDateFormat } from "./Format";
import { FilterDateDday } from "./Dday";
import { FilterDateBetween } from "./Between";
import { FilterDateIncheck } from "./Incheck";
import { FilterDateByoffset } from "./Byoffset";

export const FilterDate = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('dateType') || 'format'; 

	return (
		<>
			<div className="lm-tab">
				<LmNavButton to="/leadermine/filter"><div className="lm-icon-pin"></div>포멧 타입</LmNavButton>
				<LmNavButton to="/leadermine/filter?type=date&dateType=dday"><div className="lm-icon-pin"></div>당일기준 남은 일정</LmNavButton>
				<LmNavButton to="/leadermine/filter?type=date&dateType=between"><div className="lm-icon-pin"></div>일정 사이 계산</LmNavButton>
				<LmNavButton to="/leadermine/filter?type=date&dateType=incheck"><div className="lm-icon-pin"></div>일정 사이 포함</LmNavButton>
				<LmNavButton to="/leadermine/filter?type=date&dateType=byoffset"><div className="lm-icon-pin"></div>일정 전,후 일</LmNavButton>
			</div>

			{getType === 'format' && <FilterDateFormat/>}
			{getType === 'dday' && <FilterDateDday/>}
			{getType === 'between' && <FilterDateBetween/>}
			{getType === 'incheck' && <FilterDateIncheck/>}
			{getType === 'byoffset' && <FilterDateByoffset/>}
		</>
	);
};