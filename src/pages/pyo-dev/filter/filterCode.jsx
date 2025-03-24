import Highlight from 'react-highlight'

export const FilterCode = () => {
	let filterCode =
`// getFilter
const getFilter = {
	dateFormat: (targetDate, options = {}) => {
		// 날짜 포멧 변경
		if(!targetDate){
			return false;
		}
		let reqDate = new Date(targetDate);
		const {
			dateSeparator = '-',
			timeSeparator = ':',
			showYear = true,
			showMonth = true,
			showDay = true,
			showHours = false,
			showMinutes = false,
			showSeconds = false
		} = options;

		const padZero = (num) => (num < 10 ? \`0\${num}\` : num);

		const year = showYear ? reqDate.getFullYear() : '';
		const month = showMonth ? padZero(reqDate.getMonth() + 1) : '';
		const day = showDay ? padZero(reqDate.getDate()) : '';
		const hours = showHours ? padZero(reqDate.getHours()) : '';
		const minutes = showMinutes ? padZero(reqDate.getMinutes()) : '';
		const seconds = showSeconds ? padZero(reqDate.getSeconds()) : '';

		const dateParts = [year, month, day].filter(part => part).join(dateSeparator);
		const timeParts = [hours, minutes, seconds].filter(part => part).join(timeSeparator);

		return [dateParts, timeParts].filter(part => part).join(' ');
	},
	dateDday: (targetDate) => {
		// 당일기준 남은 일정 계산
		if(!targetDate){
			return false;
		}
		const today = new Date();
		const timeDiff = new Date(targetDate).getTime() - today.getTime();
		const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
		return targetDate ? daysRemaining : 0;
	},
	dateBetween: (startDate, endDate) => {
		// 두일정 사이 계산
		if(!startDate || !endDate){
			return false;
		}
		const timeDiff = new Date(endDate).getTime() - new Date(startDate).getTime();
		const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
		return startDate && endDate ? daysDiff : 0;
	},
	dateInCheck: (startDate, endDate, checkDate) => {
		// 두일정 사이 포함 여부
		if(!startDate || !endDate || !checkDate){
			return false;
		}
		const startMs = new Date(startDate).getTime() || new Date();
		const endMs = new Date(endDate).getTime() || new Date();
		const checkMs = new Date(checkDate).getTime() || new Date();
		return checkMs >= startMs && checkMs <= endMs;
	},
	dateByOffset: (offset, unit = 'day', baseDate = new Date()) => {
		// 일정 전,후 일
		if(!offset){
			return false;
		}
		const dateUnits = {
			day: 'Date',
			month: 'Month',
			year: 'FullYear'
		};
	
		const currentDate = new Date(baseDate);
		const resultDate = new Date(currentDate);

		if(!unit){
			unit = 'day';
		}
	
		const setter = \`set\${dateUnits[unit]}\`;
		const getter = \`get\${dateUnits[unit]}\`;

		resultDate[setter](currentDate[getter]() + offset);
	
		return getFilter.dateFormat(resultDate);
	},
	chooseCharacters: (inputString, languages = ['ko']) => {
		// 원하는 문자만 출력
		if(!inputString){
			return false;
		}
		const supportedLanguages = {
			ko: /[가-힣ㄱ-ㅎㅏ-ㅣ]/g, // 한글
			eng: /[a-zA-Z]/g, // 영어
			num: /[0-9]/g, // 숫자
			special: /[!@#$%^&*()_+\-=]/g // 특수문자
		};

		let filteredCharacters = '';
		for (let char of inputString) {
			for (let lang of languages) {
				if (char.match(supportedLanguages[lang])) {
					filteredCharacters += char;
					break;
				}
			}
		}
		return filteredCharacters;
	},
	checkPhoneNumber: (phoneNumber) => {
		// 핸드폰 번호 유효성 검사
		if(!phoneNumber){
			return false;
		}
		const phoneRegex = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
		return phoneRegex.test(phoneNumber);
	},
	checkEmail: (email) => {
		// 이메일 유효성 검사
		if(!email){
			return false;
		}
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(email);
	},
	replaceNewlinesWithBr: (text) => {
		// 내려쓰기 전부 치환
		if(!text){
			return false;
		}
		text = text.replace(/\\r|\r|\\n|\n|<br>/g, '<br />');
		return text;
	},
	spaceDelet: (text) => {
		// 스페이스 삭제
		if(!text){
			return '';
		}
		const resultText = text.replace(/\s+/g, '')
		return resultText;
	},
	getDeviceCheck: () => {
		return /Mobi|Android/i.test(navigator.userAgent) ? "MOBILE_WEB" : "PC";
	},
};

export { getFilter };
`;

		return (
			<div className="pyo-panel pyo-panel-flex-wrap">
				<Highlight className='javascript pyo-panel-code'>{filterCode}</Highlight>
			</div>
		);
};