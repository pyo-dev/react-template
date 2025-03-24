import { useEffect, useState } from 'react';
import { PyoAxios } from '@/axios/PyoAxios';
import { useParams } from 'react-router-dom';

import { PyoBoardList } from '@/components/board/basic/PyoList';
import { PyoPaging } from '@/components/board/PyoPaging';

export const PyoDevReactBoardNoticeList = () => {
	const boardUrl = '/pyo-dev/react/board/notice';
	const { pageNo } = useParams();
	const currentPage = pageNo ? parseInt(pageNo) : 1;
	const [list, setlist] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const pageRow = 10;
	const maxPagesToShow = 5;
	const listData = {
		url: boardUrl,
		listHeader: [
			{
				text: 'NO',
				class: 'no',
			},
			{
				text: '제목',
				class: 'subject',
			},
			{
				text: '글쓴이',
				class: 'writer',
			},
			{
				text: '작성일',
				class: 'date',
			}
		],
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
			const res = await PyoAxios({
				method: 'GET',
				url: `/board_list.php?pageNo=${currentPage}&pageRow=${pageRow}`,
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
			<div className='pyo-panel'>
				<PyoBoardList data={listData} />
				<PyoPaging data={pagingData} />
			</div>
		</>
	);
};
