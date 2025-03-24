import HOOK_PYO_TOAST_POP from '@/store/hooks/hookToastPop';
import { getEvent } from "@/utils/getEvent";

export const FormSelect = () => {
	const { setPyoToastPop } = HOOK_PYO_TOAST_POP();

	const copySelect = (pyoClass, state) => {
		let selectHtml = 
`<select className="pyo-input ${pyoClass}" ${state ? state : ''}>
	<option>Select option</option>
	<option>select option1</option>
	<option>select option2</option>
	<option>select option2</option>
	<option>select option3</option>
	<option>select option4</option>
</select>`;
		getEvent.copyText(selectHtml);
		setPyoToastPop({
			items: {
				type: 'guide',
				iconType: 'check',
				title: 'pyo-input select 복사',
				contents: '클립보드에 복사되었습니다.',
			}
		});
	}
	
	return (
		<>
			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-panel-inner-title">Select s-s</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input s-s">
						<option>Select default</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black s-s" onClick={()=> copySelect('s-s')}>Default Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input s-s success">
						<option>Select Success</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black s-s" onClick={()=> copySelect('s-s success')}>Success Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input s-s error">
						<option>Select Error</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black s-s" onClick={()=> copySelect('s-s error')}>Error Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input s-s" disabled>
						<option>Select Disabled</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black s-s" onClick={()=> copySelect('s-s' ,'disabled')}>Disabled Copy</button>
				</div>
			</div>

			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-panel-inner-title">Select default</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input">
						<option>Select default</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black" onClick={()=> copySelect('')}>Default Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input success">
						<option>Select Success</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black" onClick={()=> copySelect('success')}>Success Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input error">
						<option>Select Error</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black" onClick={()=> copySelect('error')}>Error Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input" disabled>
						<option>Select Disabled</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black" onClick={()=> copySelect('', 'disabled')}>Disabled Copy</button>
				</div>
			</div>

			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-panel-inner-title">Select s-l</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input s-l">
						<option>Select default</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black" onClick={()=> copySelect('s-l')}>Default Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input s-l success">
						<option>Select Success</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black" onClick={()=> copySelect('s-l success')}>Success Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input s-l error">
						<option>Select Error</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black" onClick={()=> copySelect('s-l error')}>Error Copy</button>
				</div>
				<div className="pyo-panel-flex-inner">
					<select className="pyo-input s-l" disabled>
						<option>Select Disabled</option>
						<option>select option1</option>
						<option>select option2</option>
						<option>select option2</option>
						<option>select option3</option>
						<option>select option4</option>
					</select>
					<button className="pyo-button color-black" onClick={()=> copySelect('s-l', 'disabled')}>Disabled Copy</button>
				</div>
			</div>
		</>
	);
};
