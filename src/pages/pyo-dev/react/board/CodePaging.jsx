import Highlight from 'react-highlight'

export const PyoDevReactBoardCodePaging = () => {
	const importHmtl = `// @/components/board/LmPaging.jsx
import { useNavigate } from 'react-router-dom';

export const LmPaging = ({data}) => {
	const navigate = useNavigate();
	const { url, currentPage, totalPages, maxPagesToShow } = data;

	const handlePageClick = (currentPage) => {
		navigate(\`\${url}/\${currentPage}\`);
	};

	const renderPagination = () => {
		const arrowBt = [];
		const pagesBt = [];

		let currentGroup = Math.ceil(currentPage / maxPagesToShow);
		let startPage = (currentGroup - 1) * maxPagesToShow + 1;
		let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

		const addButton = (key, label, page, disabled) => {
			let checkKey = ['first', 'prev', 'next', 'last'];
			if(checkKey.includes(key)){
				arrowBt.push(
					<button key={key} onClick={() => handlePageClick(page)} className={\`arrow \${key}\`} disabled={disabled}></button>
				);
			} else {
				let actvieClass = currentPage === page ? 'active' : '';
				pagesBt.push(
					<button key={key} onClick={() => handlePageClick(page)} className={actvieClass} disabled={disabled}>
						{label}
					</button>
				);
			}
		};

		addButton('first', '처음', 1 , startPage === 1 && currentPage <= maxPagesToShow);
		addButton('prev', '이전', currentPage - 1, currentPage <= 1);
		addButton('next', '다음', currentPage + 1, currentPage >= totalPages);
		addButton('last', '마지막', totalPages, endPage === totalPages);

		for (let i = startPage; i <= endPage; i++) {
			addButton(i, i, i);
		}


		return (
			<div className="lm-paging">
				{arrowBt[0]}
				{arrowBt[1]}
				<div className='num'>
					{pagesBt}
				</div>
				{arrowBt[2]}
				{arrowBt[3]}
			</div>
		);
	};


	return (
		<>
			{renderPagination()}
		</>
	);
};
`

	return (
		<>
			<Highlight className='javascript lm-panel-code'>{importHmtl}</Highlight>
		</>
	);
};
