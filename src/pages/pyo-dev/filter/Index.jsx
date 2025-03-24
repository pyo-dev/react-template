import { useLocation } from 'react-router-dom';

import { PyoNavButton } from "@/components/PyoButton";

import { FilterDate } from "./date/Index";
import { FilterText } from "./text/Index";

export const PyoDevFilter = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('type') || 'date'; 

	return (
		<>
			<div className="pyo-panel-title">
				<div className="pyo-icon-box color-5"><div className="pyo-icon-el color-white"></div></div>
				<div>
					<div className="title">FILTER</div>
					<div className="des">pyo-dev javascript 필터 모음</div>
				</div>
			</div>

			<div className="pyo-tab">
				<PyoNavButton to="/pyo-dev/filter" pyoClass={ getType === 'date' ? 'active' : '' }><div className="pyo-icon-pin"></div>날짜</PyoNavButton>
				<PyoNavButton to="/pyo-dev/filter?type=text"><div className="pyo-icon-pin"></div>문자</PyoNavButton>
			</div>


			{ getType === "date" && <FilterDate />}
			{ getType === "text" && <FilterText />}
		</>
	);
};