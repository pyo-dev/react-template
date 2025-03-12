import Highlight from 'react-highlight'

export const LeadermineReactBoardCodePageList2 = () => {
	const importHmtl = `// @/page/board/faq/List.jsx
import { useEffect, useState } from 'react';
import { LmAxios } from '@/axios/LmAxios';
import { useParams } from 'react-router-dom';

import { LmBoardList } from '@/components/board/faq/LmList';
import { LmPaging } from '@/components/board/LmPaging';

export const LeadermineReactBoardFaqList = () => {
	const boardUrl = '/leadermine/react/board/faq';
	const { pageNo } = useParams();
	const currentPage = pageNo ? parseInt(pageNo) : 1;
	const [list, setlist] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const pageRow = 10;
	const maxPagesToShow = 5;
	const listData = {
		url: boardUrl,
		list,
		totalPages,
	}
	const pagingData = {
		url: boardUrl,
		currentPage,
		totalPages,
		maxPagesToShow
	}

	useEffect(() => {
		getList(currentPage);
	}, [currentPage]);

	const getList = async (currentPage) => {
		try {
			const res = await LmAxios({
				method: 'GET',
				url: \`/board_list.php?pageNo=\${currentPage}&pageRow=\${pageRow}\`,
			});
			const resData = res.data.data ? res.data.data : [];
			setlist(resData);
			setTotalPages(Math.ceil(res.data.totalCount / pageRow));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<div className='lm-panel lm-panel-flex-wrap'>
				<div className='w-full'>
					<LmBoardList data={listData} />
				</div>
			</div>
			<div className='lm-panel lm-panel-flex-wrap'>
				<div className='w-full'>
					<LmPaging data={pagingData} />
				</div>
			</div>
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
