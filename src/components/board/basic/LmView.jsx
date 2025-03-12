import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const LmBoardView = () => {
	const { viewNo } = useParams();
	const navigate = useNavigate();
	const boardName = useLocation().pathname.split('/')[2];

	return (
		<div>
			{boardName} - {viewNo}
			<div className="lm-tab">
				<button onClick={() => { navigate(-1) }}>목록</button>
			</div>
		</div>
	);
};