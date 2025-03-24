import { useLocation } from 'react-router-dom';

import { PyoNavButton } from "@/components/PyoButton";
import { FilterDateFormat } from "./Format";
import { FilterDateDday } from "./Dday";
import { FilterDateBetween } from "./Between";
import { FilterDateIncheck } from "./Incheck";
import { FilterDateByoffset } from "./Byoffset";
import { FilterCode } from '../filterCode';

export const FilterDate = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('dateType') || 'format'; 

	return (
		<>
			<div className="pyo-tab">
				<PyoNavButton to="/pyo-dev/filter"><div className="pyo-icon-pin"></div>포멧 타입</PyoNavButton>
				<PyoNavButton to="/pyo-dev/filter?type=date&dateType=dday"><div className="pyo-icon-pin"></div>당일기준 남은 일정</PyoNavButton>
				<PyoNavButton to="/pyo-dev/filter?type=date&dateType=between"><div className="pyo-icon-pin"></div>일정 사이 계산</PyoNavButton>
				<PyoNavButton to="/pyo-dev/filter?type=date&dateType=incheck"><div className="pyo-icon-pin"></div>일정 사이 포함</PyoNavButton>
				<PyoNavButton to="/pyo-dev/filter?type=date&dateType=byoffset"><div className="pyo-icon-pin"></div>일정 전,후 일</PyoNavButton>
			</div>

			<FilterCode />
			{getType === 'format' && <FilterDateFormat/>}
			{getType === 'dday' && <FilterDateDday/>}
			{getType === 'between' && <FilterDateBetween/>}
			{getType === 'incheck' && <FilterDateIncheck/>}
			{getType === 'byoffset' && <FilterDateByoffset/>}
		</>
	);
};