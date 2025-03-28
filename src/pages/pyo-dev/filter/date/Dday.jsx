import Highlight from 'react-highlight'

export const FilterDateDday = () => {
	let filterJsIm =
`// javascript
<script src="/js/pyoFilter.js"></script>

// react
import { getFilter } from '@/utils/getFilter';`;
	let filterJs =
`getFilter.dateDday(
	'날짜' // 날짜 입력 String, Date object !필수 값
);`;
	let sampleJs =
`// 기준일 !default new Date(); 당일
// 테스트 기준일 2024-09-23
getFilter.dateDday('2024-10-10');
// output: 17

getFilter.dateDday('2024-08-10');
// output: -44
`;

	return (
		<div className="pyo-panel pyo-panel-flex-wrap">
			<Highlight className='javascript pyo-panel-code'>{filterJsIm}</Highlight>
			<Highlight className='javascript pyo-panel-code'>{filterJs}</Highlight>
			<Highlight className='javascript pyo-panel-code'>{sampleJs}</Highlight>
		</div>
	);
};