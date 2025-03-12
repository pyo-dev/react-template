import HOOK_LM_TOAST_POP from '@/store/hooks/hookToastPop';
import { getEvent } from "@/utils/getEvent";

export const FormInput = () => {
	const { setLmToastPop } = HOOK_LM_TOAST_POP();

	const copyInput = (lmClass, state) => {
		let inputHtml = `<input type="text" className="lm-input ${lmClass}" ${state ? state : ''} />`;
		getEvent.copyText(inputHtml);
		setLmToastPop({
			items: {
				type: 'guide',
				iconType: 'check',
				title: 'lm-input input 복사',
				contents: '클립보드에 복사되었습니다.',
			}
		});
	}

	return (
		<>
			<div className="lm-panel lm-panel-flex-wrap">
				<div className="lm-panel-inner-title">Input s-s</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input s-s" placeholder="Text Default" />
					<button className="lm-button color-black s-s" onClick={()=> copyInput('s-s')}>Default Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input s-s success" defaultValue="Text Success" />
					<button className="lm-button color-black s-s" onClick={()=> copyInput('s-s success')}>Success Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input s-s error" defaultValue="Text Error" />
					<button className="lm-button color-black s-s" onClick={()=> copyInput('s-s error')}>Error Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input s-s" defaultValue="Text Disabled" disabled />
					<button className="lm-button color-black s-s" onClick={()=> copyInput('s-s', 'disabled')}>Disabled Copy</button>
				</div>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div className="lm-panel-inner-title">Input default</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input" placeholder="Text Default" />
					<button className="lm-button color-black" onClick={()=> copyInput('')}>Default Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input success" defaultValue="Text Success" />
					<button className="lm-button color-black" onClick={()=> copyInput('success')}>Success Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input error" defaultValue="Text Error" />
					<button className="lm-button color-black" onClick={()=> copyInput('error')}>Error Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input" defaultValue="Text Disabled" disabled />
					<button className="lm-button color-black" onClick={()=> copyInput('', 'disabled')}>Disabled Copy</button>
				</div>
			</div>

			<div className="lm-panel lm-panel-flex-wrap">
				<div className="lm-panel-inner-title">Input s-l</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input s-l" placeholder="Text Default" />
					<button className="lm-button color-black" onClick={()=> copyInput('s-l')}>Default Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input s-l success" defaultValue="Text Success" />
					<button className="lm-button color-black" onClick={()=> copyInput('s-l success')}>Success Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input s-l error" defaultValue="Text Error" />
					<button className="lm-button color-black" onClick={()=> copyInput('s-l error')}>Error Copy</button>
				</div>
				<div className="lm-panel-flex-inner">
					<input type="text" className="lm-input s-l" defaultValue="Text Disabled" disabled />
					<button className="lm-button color-black" onClick={()=> copyInput('s-l', 'disabled')}>Disabled Copy</button>
				</div>
			</div>
		</>
	);
};
