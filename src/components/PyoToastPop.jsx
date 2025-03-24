import { useState, useEffect } from "react";
import HOOK_PYO_TOAST_POP from "@/store/hooks/hookToastPop";
import PyoToastPopItem from "@/components/PyoToastPopItem";

const PyoToastPop = () => {
	const [items, setItems] = useState([]);
	const [itemsLength, setItemsLength] = useState(0);
	const { getPyoToastPop, setPyoToastPop } = HOOK_PYO_TOAST_POP();

	const closeToastPop = () => {
		if(items.length === itemsLength){
			setPyoToastPop(getPyoToastPop.reset);
			setItemsLength(0);
			setItems([]);
		}
	};

	useEffect(() => {
		let reData = items;
		if (getPyoToastPop.items) {
			reData.push(getPyoToastPop.items);
			setItems(reData);
			setItemsLength(items.length + 1);
		}
		return (
			setPyoToastPop(getPyoToastPop.reset)
		);
	}, [getPyoToastPop.items]);

	return (
		items.length > 0 && (
			<div
				className="pyo-pop-toast-wrap"
				style={{
					...getPyoToastPop.position,
					width: getPyoToastPop.width,
					padding: getPyoToastPop.padding
				}}
			>
				{items.map((item, index) => (
					<PyoToastPopItem
						data={item}
						closeAc={closeToastPop} // close 함수 전달
						key={index}
					/>
				))}
			</div>
		)
	);
};

export default PyoToastPop;
