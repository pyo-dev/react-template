import { useState } from "react";
import HOOK_PYO_TOAST_POP from '@/store/hooks/hookToastPop';
import { getEvent } from "@/utils/getEvent";

export const FormCheckRadio = () => {
	const { setPyoToastPop } = HOOK_PYO_TOAST_POP();
	const [isChecked, setIsChecked] = useState(true);
	const [selectedRadio, setSelectedRadio] = useState("radio1");

	const checkHtml = [
`<label class="pyo-check-box">
	<input type="checkbox" />
	<span class="change-d"></span>
	<span class="text">Checkbox</span>
</label>`,
`<label class="pyo-check-box s-l">
	<input type="checkbox" />
	<span class="change-d"></span>
	<span class="text">Checkbox</span>
</label>`
	]
	const radioHtml = [
`<label class="pyo-radio-box">
	<input type="radio" />
	<span class="change-d"></span>
	<span class="text">Radio</span>
</label>`,
`<label class="pyo-radio-box s-l">
	<input type="radio" />
	<span class="change-d"></span>
	<span class="text">Radio</span>
</label>`,
	]
	
	const wrapHtml = [
`<div class="pyo-check-radio-box-wrap">
	<label class="pyo-check-box s-l">
		<input type="checkbox" />
		<span class="change-d"></span>
		<span class="text">Checkbox</span>
	</label>
	<label class="pyo-check-box s-l">
		<input type="checkbox" />
		<span class="change-d"></span>
		<span class="text">Checkbox</span>
	</label>
	<label class="pyo-check-box s-l">
		<input type="checkbox" />
		<span class="change-d"></span>
		<span class="text">Checkbox</span>
	</label>
</div>`,
`<div class="pyo-check-radio-box-wrap">
	<label class="pyo-radio-box s-l">
		<input type="radio" />
		<span class="change-d"></span>
		<span class="text">Checkbox</span>
	</label>
	<label class="pyo-radio-box s-l">
		<input type="radio" />
		<span class="change-d"></span>
		<span class="text">Checkbox</span>
	</label>
	<label class="pyo-radio-box s-l">
		<input type="radio" />
		<span class="change-d"></span>
		<span class="text">Checkbox</span>
	</label>
</div>`
	];

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked);
	};

	const handleRadioChange = (event) => {
		setSelectedRadio(event.target.value);
	};

	const copyCheck = (num) => {
		getEvent.copyText(checkHtml[num]);
		setPyoToastPop({
			items: {
				type: 'guide',
				iconType: 'check',
				title: 'pyo-check-box 복사',
				contents: '클립보드에 복사되었습니다.',
			}
		});
	};

	const copyRadio = (num) => {
		getEvent.copyText(radioHtml[num]);
		setPyoToastPop({
			items: {
				type: 'guide',
				iconType: 'check',
				title: 'pyo-radio-box 복사',
				contents: '클립보드에 복사되었습니다.',
			}
		});
	};

	const copyWrap = (num) => {
		getEvent.copyText(wrapHtml[num]);
		setPyoToastPop({
			items: {
				type: 'guide',
				iconType: 'check',
				title: 'pyo-check-radio-box-wrap 복사',
				contents: '클립보드에 복사되었습니다.',
			}
		});
	};

	return (
		<>
			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-check-radio-box-wrap">
					<label className="pyo-check-box">
						<input type="checkbox" />
						<span className="change-d"></span>
						<span className="text">Checkbox</span>
					</label>
					<label className="pyo-check-box">
						<input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<span className="change-d"></span>
						<span className="text">Checkbox checked</span>
					</label>
					<label className="pyo-check-box">
						<input type="checkbox" disabled />
						<span className="change-d"></span>
						<span className="text">Checkbox disabled</span>
					</label>

					<label className="pyo-check-box s-l">
						<input type="checkbox" />
						<span className="change-d"></span>
						<span className="text">Checkbox s-l</span>
					</label>
					<label className="pyo-check-box s-l">
						<input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<span className="change-d"></span>
						<span className="text">Checkbox checked s-l</span>
					</label>
					<label className="pyo-check-box s-l">
						<input type="checkbox" disabled />
						<span className="change-d"></span>
						<span className="text">Checkbox disabled s-l</span>
					</label>
				</div>
			</div>

			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-check-radio-box-wrap">
					<label className="pyo-radio-box">
						<input
							name="radio-test"
							type="radio"
							value="radio1"
							checked={selectedRadio === "radio1"} // 선택된 상태 관리
							onChange={handleRadioChange}
						/>
						<span className="change-d"></span>
						<span className="text">Radio 1</span>
					</label>
					<label className="pyo-radio-box">
						<input
							name="radio-test"
							type="radio"
							value="radio2"
							checked={selectedRadio === "radio2"} // 선택된 상태 관리
							onChange={handleRadioChange}
						/>
						<span className="change-d"></span>
						<span className="text">Radio 2</span>
					</label>
					<label className="pyo-radio-box">
						<input
							name="radio-test"
							type="radio"
							value="radio3"
							checked={selectedRadio === "radio3"} // 선택된 상태 관리
							onChange={handleRadioChange}
							disabled
						/>
						<span className="change-d"></span>
						<span className="text">Radio disabled</span>
					</label>
					<label className="pyo-radio-box s-l">
						<input
							name="radio-test"
							type="radio"
							value="radio4"
							checked={selectedRadio === "radio4"} // 선택된 상태 관리
							onChange={handleRadioChange}
						/>
						<span className="change-d"></span>
						<span className="text">Radio s-l</span>
					</label>
					<label className="pyo-radio-box s-l">
						<input
							name="radio-test"
							type="radio"
							value="radio5"
							onChange={handleRadioChange}
							disabled
						/>
						<span className="change-d"></span>
						<span className="text">Radio disabled s-l</span>
					</label>
				</div>
			</div>
			<div className="pyo-panel pyo-panel-flex-wrap">
				<button className="pyo-button color-black" onClick={()=>copyCheck(0)} >Checkbox Copy</button>
				<button className="pyo-button color-black" onClick={()=>copyCheck(1)} >Checkbox s-l Copy</button>
				<button className="pyo-button color-black" onClick={()=>copyWrap(0)} >Checkbox Wrap Copy</button>
				<button className="pyo-button color-black" onClick={()=>copyRadio(0)} >Radio Copy</button>
				<button className="pyo-button color-black" onClick={()=>copyRadio(1)} >Radio s-l Copy</button>
				<button className="pyo-button color-black" onClick={()=>copyWrap(1)}>Radio Wrap Copy</button>
			</div>
		</>
	);
};
