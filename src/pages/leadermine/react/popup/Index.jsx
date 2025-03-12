import Highlight from 'react-highlight'

import HOOK_LM_LODING from '@/store/hooks/hookLoding';
import HOOK_LM_POP from '@/store/hooks/hookPop';
import HOOK_LM_TOAST_POP from '@/store/hooks/hookToastPop';

export const LeadermineReactPopup = () => {
	const commonHtml = `// @/components/LmCommon.jsx // 공통
import LmLoding from '@/components/LmLoding';
import LmPop from '@/components/LmPop';
import LmToastPop from '@/components/LmToastPop';

const LmCommon = () => {
	return (
		<>
			<LmToastPop/>
			<LmPop/>
			<LmLoding/>
		</>
	);
};

export default LmCommon;
`

	const loadingHtml = `// 사용법
import HOOK_LM_LODING from '@/store/hooks/hookLoding';

export const 컴포넌트이름 = () => {
	const { setLmLoding } = HOOK_LM_LODING();

	const openShow = () => {
		setLmLoding({show: true});
		setTimeout(() => {
			setLmLoding({show: false});
		}, 2000);
	}

	return (
		<>
			<button onClick={()=> openShow()}>Loading</button>
		</>
	);
};
`

	const popHtml = `// 사용법
import HOOK_LM_POP from '@/store/hooks/hookPop';

export const 컴포넌트이름 = () => {
	const {setLmPop} = HOOK_LM_POP();

	const openShow = () => {
		setLmPop({
			show: true, // Boolean !필수 값
			type: 'confirm', // 팝업 모양 String(alert, confirm) !default 'alert' !생략 가능
			title: '컨펌창이다', // 팝업 타이틀 String !default '' !생략 가능
			contents: \` // 팝업 내용 String !default '' !생략 가능
				<div>내용이지</div>
				<p>내용이지</p>
			\`,
			success_title: '확인입니다.', // 확인 버튼 텍스트 String !default '확인' !생략 가능
			success_fun: (hidePop) => { // 확인버튼 콜백함수 Function !default 'hidePop()' !생략 가능
				alert('확인창 클릭 2초뒤 팝업창이 닫힘');
				setTimeout(() => {
					hidePop();
				}, 2000);
			},
			cancle_title: '취소입니다.', // 취소버튼 텍스트 String !default '취소' !생략 가능
			cancle_fun: (hidePop) => { // 취소버튼 콜백함수 콜백함수 Function !default 'hidePop()' !생략 가능
				alert('취소창 클릭 3초뒤 팝업창이 닫힘');
				setTimeout(() => {
					hidePop();
				}, 3000);
			}
		});
	}

	return (
		<>
			<button onClick={()=> openShow()}>pop</button>
		</>
	);
};
`

	const toastHtml = `// 사용법
import HOOK_LM_TOAST_POP from '@/store/hooks/hookToastPop';

export const 컴포넌트이름 = () => {
	const { setLmToastPop } = HOOK_LM_TOAST_POP();

	const openShow = () => {
		setLmToastPop({
			position: { // 팝업 포지션 Object !생략 가능 !default ({bottom: '0', right: '0'}) !생략 가능
				bottom: '0', 
				right: '0',
			},
			width: '500px', // 팝업 넓이 String !default (500px) !생략 가능
			padding: '20px', // 팝업 패딩 String !default (20px) !생략 가능
			items: {
				type: 'error', // 팝업 타입 String(guide,warning,error) !default '' !생략 가능
				iconType: 'feel', // 팝업 아이콘 타입 String(check,feel) !default '' !생략 가능
				title: 'error 토스트 팝업 테스트', // 팝업 타이틀 String !default '' !생략 가능
				contents: '토스트 팝업 테스트 중입니다 잘 작동하나요?', // 팝업 내용 String !default '' !생략 가능
			}
		})
	}

	return (
		<>
			<button onClick={()=> openShow()}>pop</button>
		</>
	);
};
`

	const { setLmLoding } = HOOK_LM_LODING();
	const {setLmPop} = HOOK_LM_POP();
	const { setLmToastPop } = HOOK_LM_TOAST_POP();

	const loadingOpen1 = () => {
		setLmLoding({show: true});
		setTimeout(() => {
			setLmLoding({show: false});
		}, 2000);
	}

	const popOpen1 = () => {
		setLmPop({
			show: true,
			title: '팝업 타이틀'
		});
	}

	const popOpen2 = () => {
		setLmPop({
			show: true,
			title: '팝업 타이틀',
			contents: '팝업 콘텐츠',
		});
	}

	const popOpen3 = () => {
		setLmPop({
			show: true,
			type: 'confirm',
			title: '컨펌창이다',
			contents: `
				<div>내용이지</div>
				<p>내용이지</p>
			`,
			cancle_title: '취소입니다.',
			success_title: '확인입니다.',
			success_fun: (hidePop) => {
				alert('확인창 클릭 2초뒤 팝업창이 닫힘');
				setTimeout(() => {
					hidePop();
				}, 2000);
			},
			cancle_fun: (hidePop) => {
				alert('취소창 클릭 3초뒤 팝업창이 닫힘');
				setTimeout(() => {
					hidePop();
				}, 3000);
			}
		});
	}

	const toastPopOpen1 = () => {
		setLmToastPop({
			items: {
				title: '11 -- 토스트 팝업 테스트',
				contents: '토스트 팝업 테스트 중입니다 잘 작동하나요?',
			}
		})
	}

	const toastPopOpen2 = () => {
		setLmToastPop({
			items: {
				type: 'guide',
				iconType: 'check',
				title: 'guide 토스트 팝업 테스트',
				contents: '토스트 팝업 테스트 중입니다 잘 작동하나요?',
			}
		})
	}

	const toastPopOpen3 = () => {
		setLmToastPop({
			items: {
				type: 'warning',
				iconType: 'feel',
				title: 'warning 토스트 팝업 테스트',
				contents: '토스트 팝업 테스트 중입니다 잘 작동하나요?',
			}
		})
	}

	const toastPopOpen4 = () => {
		setLmToastPop({
			items: {
				type: 'error',
				iconType: 'feel',
				title: 'error 토스트 팝업 테스트',
				contents: '토스트 팝업 테스트 중입니다 잘 작동하나요?',
			}
		})
	}

	return (
		<>
			<div className='lm-panel lm-panel-flex-wrap'>
				<Highlight className='javascript lm-panel-code'>{commonHtml}</Highlight>
			</div>
			<div className='lm-panel lm-panel-flex-wrap'>
				<Highlight className='javascript lm-panel-code'>{loadingHtml}</Highlight>
				<button className="lm-button color-1 line" onClick={()=> loadingOpen1()}>Loading</button>
			</div>
			<div className='lm-panel lm-panel-flex-wrap'>
				<Highlight className='javascript lm-panel-code'>{popHtml}</Highlight>
				<button className="lm-button color-1 line" onClick={()=> popOpen1()}>Default Pop</button>
				<button className="lm-button color-3 line" onClick={()=> popOpen2()}>Title Contents Pop</button>
				<button className="lm-button color-4 line" onClick={()=> popOpen3()}>Custom Pop</button>
			</div>
			<div className='lm-panel lm-panel-flex-wrap'>
				<Highlight className='javascript lm-panel-code'>{toastHtml}</Highlight>
				<button className="lm-button color-1 line" onClick={()=> toastPopOpen1()}>Default Toast Pop</button>
				<button className="lm-button color-3 line" onClick={()=> toastPopOpen2()}>Guide Toast Pop</button>
				<button className="lm-button color-4 line" onClick={()=> toastPopOpen3()}>Warning Toast Pop</button>
				<button className="lm-button color-5 line" onClick={()=> toastPopOpen4()}>Error Toast Pop</button>
			</div>
		</>
	);
};