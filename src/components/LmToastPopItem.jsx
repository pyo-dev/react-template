import { useState, useEffect, useRef } from "react";

const LmToastPopItem = ({ data, closeAc }) => {
	// props로 data와 close를 받음
	const [show, setShow] = useState(false);
	const [showClass, setShowClass] = useState("");
	const innerRef = useRef(null);
	const [innerHeight, setInnerHeight] = useState(0);

	const itemClose = () => {
		setShowClass("hidden");
		if (innerRef.current) {
			setInnerHeight(0);
		}
		setTimeout(() => {
			setShow(false);
			closeAc();
		}, 510);
	};

	useEffect(() => {
		setShow(true);
		const timer = setTimeout(() => {
			setShowClass("show");
			if (innerRef.current) {
				setInnerHeight(innerRef.current.offsetHeight);
			}
			
			setTimeout(() => {
				itemClose();
			}, 3000);
		}, 10);

		return () => clearTimeout(timer);
	}, []);

	return (
		show && 
		<div
			className={`lm-pop-toast ${showClass}`}
			style={{ height: innerHeight }}
		>
			<div className={`inner ${data.type}`} ref={innerRef}>
				<div className="info">
					<div className={`icon ${data.iconType}`}></div>
					<div className="contents">
						<div className="title">{data.title}</div>
						<div className="con">{data.contents}</div>
					</div>
				</div>
				<button className="close" onClick={itemClose}></button>
			</div>
		</div>
	);
};

export default LmToastPopItem;
