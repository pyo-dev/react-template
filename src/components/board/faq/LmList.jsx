import { useEffect, useState } from 'react';
import { getFilter } from '@/utils/getFilter';

export const LmBoardList = ({data}) => {
	const [showNum, setShowNum] = useState([])
	const { list } = data;

	const handleViewClick = (index) => {
		const updatedShowNum = showNum.map((item, idx) => (idx === index ? !item : item));
		setShowNum(updatedShowNum);
	};

	useEffect(() => {
		if(list.length > 0){
			let showArrow = new Array(list.length).fill(false);
			setShowNum(showArrow);
		}
	}, [data]);

	return (
		<div className='lm-board-faq'>
			{list.map((list, index) => (
				<div
					className={`lm-board-item ${showNum[index] ? 'active' : ''}`}
					key={index}
					onClick={() => { handleViewClick(index) }}
				>
					<div>{list.id}</div>
					<div>{list.subject}</div>
					{showNum[index] && <div className='contents' dangerouslySetInnerHTML={{ __html: getFilter.replaceNewlinesWithBr(list.contents) }} />}
				</div>
				
			))}
		</div>
	);
};