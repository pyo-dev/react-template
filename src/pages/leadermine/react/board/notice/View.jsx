import { useEffect, useState } from 'react';
import { LmAxios } from '@/axios/LmAxios';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilter } from '@/utils/getFilter';

export const LeadermineReactBoardNoticeView = () => {
	const [ viewData, setViewData ]  = useState();
	const { viewNo } = useParams();
	const navigate = useNavigate();

	const getData = async () => {
		try {
			const res = await LmAxios({
				method: 'GET',
				url: `/board_detail.php?viewNo=${viewNo}`,
			});
			const resData = res.data.data ? res.data.data : [];
			resData.contents = getFilter.replaceNewlinesWithBr(resData.contents);
			setViewData(resData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, [viewNo]);

	return (
		<>
			<div className='lm-panel lm-panel-flex-wrap'>
				<div className='w-full'>
					<div>제목 : {viewData?.subject}</div>
					<div>글쓴이 : {viewData?.writer}</div>
					<div>날짜 : {viewData?.writtenTime}</div>
					<div>
						내용 : <div dangerouslySetInnerHTML={{ __html: viewData?.contents }} />
					</div>
				</div>
			</div>
			<button
				className='lm-button color-1'
				onClick={() => { navigate(-1) }}
			>목록</button>
		</>
	);
};