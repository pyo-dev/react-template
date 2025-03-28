import Highlight from 'react-highlight'

export const PyoDevReactBoardCodeFaqList = () => {
	const importHmtl = `// @/components/board/faq/PyoList.jsx
import { useEffect, useState } from 'react';
import { getFilter } from '@/utils/getFilter';

export const PyoBoardList = ({data}) => {
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
		<div className='pyo-board-faq'>
			{list.map((list, index) => (
				<div
					className={\`pyo-board-item \${showNum[index] ? 'active' : ''}\`}
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
`

	return (
		<>
			<Highlight className='javascript pyo-panel-code'>{importHmtl}</Highlight>
		</>
	);
};
