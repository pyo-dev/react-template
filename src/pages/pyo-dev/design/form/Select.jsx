import HOOK_LM_TOAST_POP from '@/store/hooks/hookToastPop';
import { getEvent } from "@/utils/getEvent";

export const FormSelect = () => {
	const { setLmToastPop } = HOOK_LM_TOAST_POP();

	const copySelect = (lmClass, state) => {
		let selectHtml = 
`<select className="lm-input ${lmClass}" ${state ? state : ''}>
	<option>Select option</option>
	<option>select option1</option>
	<option>select option2</option>
	<option>select option2</option>
	<option>select option3</option>
	<option>select option4</option>
</select>`;
		getEvent.copyText(selectHtml);
		setLmToastPop({
			items: {
				type: 'guide',
				iconType: 'check',
				title: 'lm-input select 복사',
				contents: '클립보드에 복사되었습니다.',
			}
		});
	}
	
	return (
		<>
			<div className="lm-panel lm-panel-flex-wrap">
				<div className="lm-panel-inner-title">Select s-s</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input s-s">
						<option>Select default</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black s-s" onClick={()=> copySelect('s-s')}>Default Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input s-s success">
						<option>Select Success</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black s-s" onClick={()=> copySelect('s-s success')}>Success Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input s-s error">
						<option>Select Error</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black s-s" onClick={()=> copySelect('s-s error')}>Error Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input s-s" disabled>
						<option>Select Disabled</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black s-s" onClick={()=> copySelect('s-s' ,'disabled')}>Disabled Copy</button>
				</div>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div className="lm-panel-inner-title">Select default</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input">
						<option>Select default</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black" onClick={()=> copySelect('')}>Default Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input success">
						<option>Select Success</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black" onClick={()=> copySelect('success')}>Success Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input error">
						<option>Select Error</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black" onClick={()=> copySelect('error')}>Error Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input" disabled>
						<option>Select Disabled</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black" onClick={()=> copySelect('', 'disabled')}>Disabled Copy</button>
				</div>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div className="lm-panel-inner-title">Select s-l</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input s-l">
						<option>Select default</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black" onClick={()=> copySelect('s-l')}>Default Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input s-l success">
						<option>Select Success</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black" onClick={()=> copySelect('s-l success')}>Success Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input s-l error">
						<option>Select Error</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black" onClick={()=> copySelect('s-l error')}>Error Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<select className="lm-input s-l" disabled>
						<option>Select Disabled</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="lm-button color-black" onClick={()=> copySelect('s-l', 'disabled')}>Disabled Copy</button>
				</div>
			</div>
		</>
	);
};
