import Highlight from 'react-highlight'

export const PyoDevReactBoardCodeBasicView = () => {
	const importHmtl = `// @/components/board/basic/PyoView.jsx
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const PyoBoardView = () => {
	const { viewNo } = useParams();
	const navigate = useNavigate();
	const boardName = useLocation().pathname.split('/')[2];

	return (
		<div>
			{boardName} - {viewNo}
			<div className="pyo-tab">
				<button onClick={() => { navigate(-1) }}>목록</button>
			</div>
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
