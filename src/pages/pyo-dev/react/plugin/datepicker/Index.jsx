import Highlight from 'react-highlight'
import { useState } from "react";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "@/assets/scss/_datepicker.scss";

export const PyoDevPluginDatepicker = () => {
	const pageCode = `// 페이지
import { useState } from "react";
import { ko } from "date-fns/locale";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "@/assets/scss/_datepicker.scss";

export const 컴포넌트이름 = () => {
	// 기본
	const [startDateA, setStartDateA] = useState(new Date());
	
	// 년,월 선택
	const [startDateB, setStartDateB] = useState(new Date());

	// ranges 선택
	const [dateRangeC, setDateRangeC] = useState([null, null]);
	const [startDateC, endDateC] = dateRangeC;

	// 이전일 이후일 선택 금지
	const [dateRangeD, setDateRangeD] = useState([new Date(), new Date()]);
	const [startDateD, endDateD] = dateRangeD;

	// 듀얼 달력
	const [startDateE, setStartDateE] = useState(new Date());

	// 듀얼 달력
	const [dateRangeF, setDateRangeF] = useState([new Date(), new Date('2024-09-10')]);
	const [startDateF, endDateF] = dateRangeF;
	return (
		<>
			<DatePicker
				className="lm-input"
				locale={ko}
				dateFormat="YYYY-MM-dd"
				selected={startDateA}
				onChange={(date) => setStartDateA(date)}
			/>

			<DatePicker
				className="lm-input"
				locale={ko}
				dateFormat="YYYY-MM-dd"
				selected={startDateB}
				onChange={(date) => setStartDateB(date)}
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
			/>

			<DatePicker
				className="lm-input"
				locale={ko}
				selectsRange={true}
				startDate={startDateC}
				endDate={endDateC}
				onChange={(date) => setDateRangeC(date)}
			/>

			<DatePicker
				className="lm-input"
				locale={ko}
				selectsRange={true}
				startDate={startDateD}
				endDate={endDateD}
				minDate={'2024-12-01'}
				maxDate={'2024-12-11'}
				onChange={(date) => setDateRangeD(date)}
			/>

			<DatePicker
				className="lm-input"
				locale={ko}
				selected={startDateE}
				onChange={(date) => setStartDateE(date)}
				monthsShown={2}
			/>

			<DatePicker
				className="lm-input"
				locale={ko}
				selectsRange={true}
				startDate={startDateF}
				endDate={endDateF}
				onChange={(date) => setDateRangeF(date)}
				monthsShown={2}
			/>
		</>
	);
};
`

	// 기본
	const [startDateA, setStartDateA] = useState(new Date());
	
	// 년,월 선택
	const [startDateB, setStartDateB] = useState(new Date());

	// ranges 선택
	const [dateRangeC, setDateRangeC] = useState([null, null]);
	const [startDateC, endDateC] = dateRangeC;

	// 이전일 이후일 선택 금지
	const [dateRangeD, setDateRangeD] = useState([new Date(), new Date()]);
	const [startDateD, endDateD] = dateRangeD;

	// 듀얼 달력
	const [startDateE, setStartDateE] = useState(new Date());

	// 듀얼 달력
	const [dateRangeF, setDateRangeF] = useState([new Date(), new Date('2024-09-10')]);
	const [startDateF, endDateF] = dateRangeF;
	return (
		<>
			<div className="lm-panel lm-panel-flex-wrap">
				<Highlight className='javascript lm-panel-code'>{pageCode}</Highlight>
			</div>
			<div className="lm-panel lm-panel-flex-wrap">
				<div>기본</div>
				<DatePicker
					className="lm-input"
					locale={ko}
					dateFormat="YYYY-MM-dd"
					selected={startDateA}
					onChange={(date) => setStartDateA(date)}
				/>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div>년,월 선택</div>
				<DatePicker
					className="lm-input"
					locale={ko}
					dateFormat="YYYY-MM-dd"
					selected={startDateB}
					onChange={(date) => setStartDateB(date)}
					showMonthDropdown
					showYearDropdown
					dropdownMode="select"
				/>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div>ranges 선택</div>
				<DatePicker
					className="lm-input"
					locale={ko}
					selectsRange={true}
					startDate={startDateC}
					endDate={endDateC}
					onChange={(date) => setDateRangeC(date)}
				/>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div>이전일 이후일 선택 금지</div>
				<DatePicker
					className="lm-input"
					locale={ko}
					selectsRange={true}
					startDate={startDateD}
					endDate={endDateD}
					minDate={'2024-12-01'}
					maxDate={'2024-12-11'}
					onChange={(date) => setDateRangeD(date)}
				/>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div>듀얼 달력</div>
				<DatePicker
					className="lm-input"
					locale={ko}
					selected={startDateE}
					onChange={(date) => setStartDateE(date)}
					monthsShown={2}
				/>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div>듀얼 달력 + ranges 선택</div>
				<DatePicker
					className="lm-input"
					locale={ko}
					selectsRange={true}
					startDate={startDateF}
					endDate={endDateF}
					onChange={(date) => setDateRangeF(date)}
					monthsShown={2}
				/>
			</div>
		</>
	);
};
