import Highlight from 'react-highlight'

export const FilterDateIncheck = () => {
	let filterJsIm =
`// javascript
<script src="/js/lmFilter.js"></script>

// react
import { getFilter } from '@/utils/getFilter';`;
		let filterJs =
`getFilter.dateInCheck(
	'시작일', // 날짜 입력 String, Date object !필수 값
	'종료일', // 날짜 입력 String, Date object !필수 값
	'체크일' // 날짜 입력 String, Date object !필수 값
);`;
		let sampleJs =
`getFilter.dateInCheck(
	'2024-10-10',
	'2024-10-15',
	'2024-10-13'
);
// output: true

getFilter.dateInCheck(
	'2024-10-10',
	'2024-10-15',
	'2024-10-18'
);
// output: false
`;
	
		return (
			<div className="lm-panel lm-panel-flex-wrap">
				<Highlight className='javascript lm-panel-code'>{filterJsIm}</Highlight>
				<Highlight className='javascript lm-panel-code'>{filterJs}</Highlight>
				<Highlight className='javascript lm-panel-code'>{sampleJs}</Highlight>
			</div>
		);
};