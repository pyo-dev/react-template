import { useNavigate } from 'react-router-dom';

export const LmBoardList = ({data}) => {
	const { url, listHeader, list } = data;
	const navigate = useNavigate();

	const handleViewClick = (id) => {
		navigate(`${url}/view/${id}`);
	};

	return (
		<>
			<table className='lm-board-basic'>
				<thead>
					<tr>
						{listHeader.map((item, index) => (
							<th
								key={index}
								className={item.class}
							>
								{item.text}
							</th>
						))}
					</tr>
					<tr>
						{listHeader.map((item, index) => (
							<th
								key={index}
							>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{list.map((list, index) => (
						<tr
							key={index}
						>
							<td>{list.id}</td>
							<td
								className='subject'
								onClick={() => { handleViewClick(list.id) }}
							>
								<span>{list.subject} --------------------------------------------------</span>
							</td>
							<td>{list.writer}</td>
							<td>{list.writtenTime}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};