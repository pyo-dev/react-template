import HOOK_PYO_TOAST_POP from '@/store/hooks/hookToastPop';
import { getEvent } from "@/utils/getEvent";

export const FormTextarea = () => {
	const { setPyoToastPop } = HOOK_PYO_TOAST_POP();

	const textareaSelect = (pyoClass, state) => {
		let textarea = `<textarea className="pyo-input ${pyoClass}" ${state ? state : ''}></textarea>`;
		getEvent.copyText(textarea);
		setPyoToastPop({
			items: {
				type: 'guide',
				iconType: 'check',
				title: 'pyo-input textarea 복사',
				contents: '클립보드에 복사되었습니다.',
			}
		});
	}

	return (
		<>
			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-panel-inner-title">Textarea default</div>
				<div className="pyo-panel-flex-inner">
					<textarea className="pyo-input w-full" placeholder="Textarea default"></textarea>
					<div>
						<button className="pyo-button color-black" onClick={()=> textareaSelect('', '')}>Default Copy</button>
					</div>
				</div>
				<div className="pyo-panel-flex-inner">
					<textarea className="pyo-input success w-full" defaultValue="Textarea Success"></textarea>
					<div>
						<button className="pyo-button color-black" onClick={()=> textareaSelect('success', '')}>Success Copy</button>
					</div>
				</div>
				<div className="pyo-panel-flex-inner">
					<textarea className="pyo-input error w-full" defaultValue="Textarea Error"></textarea>
					<div>
						<button className="pyo-button color-black" onClick={()=> textareaSelect('error', '')}>Error Copy</button>
					</div>
				</div>
				<div className="pyo-panel-flex-inner">
					<textarea className="pyo-input w-full" defaultValue="Textarea Disabled" disabled></textarea>
					<div>
						<button className="pyo-button color-black" onClick={()=> textareaSelect('', 'disabled')}>Disabled Copy</button>
					</div>
				</div>
			</div>
			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-panel-inner-title">Textarea s-l</div>
				<div className="pyo-panel-flex-inner">
					<textarea className="pyo-input s-l w-full" placeholder="Textarea default"></textarea>
					<div>
						<button className="pyo-button color-black" onClick={()=> textareaSelect('s-l', '')}>Default Copy</button>
					</div>
				</div>
				<div className="pyo-panel-flex-inner">
					<textarea className="pyo-input s-l w-full success" defaultValue="Textarea Success"></textarea>
					<div>
						<button className="pyo-button color-black" onClick={()=> textareaSelect('s-l success', '')}>Success Copy</button>
					</div>
				</div>
				<div className="pyo-panel-flex-inner">
					<textarea className="pyo-input s-l w-full error" defaultValue="Textarea Error"></textarea>
					<div>
						<button className="pyo-button color-black" onClick={()=> textareaSelect('s-l error', '')}>Error Copy</button>
					</div>
				</div>
				<div className="pyo-panel-flex-inner">
					<textarea className="pyo-input s-l w-full" defaultValue="Textarea Disabled" disabled></textarea>
					<div>
						<button className="pyo-button color-black" onClick={()=> textareaSelect('s-l', 'disabled')}>Disabled Copy</button>
					</div>
				</div>
			</div>
		</>
	);
};
