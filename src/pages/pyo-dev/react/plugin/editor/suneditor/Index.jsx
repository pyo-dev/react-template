import { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { getFilter } from '@/utils/getFilter';

export const PyoDevPluginSuneEditor = () => {
	const [device, setDevice] = useState(getFilter.getDeviceCheck());
	const [value, setValue] = useState("<p>테스트 1111</p>");

	const setOptions = {
		buttonList: [
			["undo", "redo"],
			["font", "fontSize"],
			[
				"bold",
				"underline",
				"italic",
				"strike",
				"subscript",
				"superscript",
			],
			['codeView'],
			["fontColor", "hiliteColor"],
			["align", "list", "lineHeight"],
			["outdent", "indent"],
			["table", "horizontalRule", "link", "image", "video"],
			["preview", "print"],
			["removeFormat"],
		],
		// defaultTag: "div",
		minHeight: "300px",
		showPathLabel: false,
		font:  [
			"Logical",
			"Salesforce Sans",
			"Garamond",
			"Sans-Serif",
			"Serif",
			"Times New Roman",
			"Helvetica",
			"Arial",
			"Comic Sans MS",
			"Courier New",
			"Impact",
			"Georgia",
			"Tahoma",
			"Trebuchet MS",
			"Verdana",
		].sort(),
	}

	const handleChange = (content) => {
		setValue(content);
	}

	const handleOnkeyUp = (e, core) => {
		// let target = document.querySelector('.sun-editor-editable');
		// target.scrollTop = target.scrollHeight + 100;
	}
	
	const handleOnkeyDown = (e, core) => {
		if (e.key === "Enter") {
			setTimeout(() => {
				core.focus(); // 포커스를 유지
				if(device === "PC"){
					// pc 엔터시 스크롤 이동
					const selection = window.getSelection();
					if (selection.rangeCount > 0) {
						const range = selection.getRangeAt(0);
						const cursorElement = range.startContainer.parentNode;

						if (cursorElement) {
							// 에디터 컨테이너 가져오기
							const editorContainer = core.context.element.wysiwyg; // WYSIWYG 영역

							// 커서 위치 계산
							const cursorRect = cursorElement.getBoundingClientRect();
							const editorRect = editorContainer.getBoundingClientRect();

							// 스크롤 조정 (세로 스크롤만)
							if (cursorRect.bottom > editorRect.bottom) {
								// 커서가 에디터 하단을 넘어가면 스크롤 다운
								editorContainer.scrollTop += cursorRect.bottom - editorRect.bottom;
							} else if (cursorRect.top < editorRect.top) {
								// 커서가 에디터 상단을 넘어가면 스크롤 업
								editorContainer.scrollTop -= editorRect.top - cursorRect.top;
							}
						}
					}
				}
			}, 0);
		}
	}

	const handleImageUpload = (targetElement, index, state, info, remainingFilesCount, core) => {
		targetElement.src = 'https://shopby-images.cdn-nhncommerce.com/SERVICE/20241114/b726382d-6023-4217-8a6b-50649c6eb79f.jpg'
	};

	return (
		<>
			<SunEditor
				setContents={value}
				onChange={handleChange}
				onKeyUp={handleOnkeyUp}
				onKeyDown={handleOnkeyDown}
				onImageUpload={handleImageUpload}
				setOptions={setOptions}
			/>
			<h2>Example value output:</h2>
			<textarea
				disabled
				value={JSON.stringify(value, null, 2)}
				style={{ width: "100%", resize: "none", height: "600px" }}
			/>
			<div dangerouslySetInnerHTML={{ __html: value }}></div>
		</>
	);
};
