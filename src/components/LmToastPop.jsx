import { useState, useEffect } from "react";
import HOOK_LM_TOAST_POP from "@/store/hooks/hookToastPop";
import LmToastPopItem from "@/components/LmToastPopItem";

const LmToastPop = () => {
	const [items, setItems] = useState([]);
	const [itemsLength, setItemsLength] = useState(0);
	const { getLmToastPop, setLmToastPop } = HOOK_LM_TOAST_POP();

	const closeToastPop = () => {
		if(items.length === itemsLength){
			setLmToastPop(getLmToastPop.reset);
			setItemsLength(0);
			setItems([]);
		}
	};

	useEffect(() => {
		let reData = items;
		if (getLmToastPop.items) {
			reData.push(getLmToastPop.items);
			setItems(reData);
			setItemsLength(items.length + 1);
		}
		return (
			setLmToastPop(getLmToastPop.reset)
		);
	}, [getLmToastPop.items]);

	return (
		items.length > 0 && (
			<div
				className="lm-pop-toast-wrap"
				style={{
					...getLmToastPop.position,
					width: getLmToastPop.width,
					padding: getLmToastPop.padding
				}}
			>
				{items.map((item, index) => (
					<LmToastPopItem
						data={item}
						closeAc={closeToastPop} // close 함수 전달
						key={index}
					/>
				))}
			</div>
		)
	);
};

export default LmToastPop;
