import { useState } from 'react';


export const PyoDevReactDataSub3 = ({dataChange1, dataChange2}) => {
	const [reqData, setreqData] = useState([]);

	const handleChangeData = (e, index) => {
		const { name, value } = e.target;
		setreqData((prevData) => ({
			...prevData, // 기존 데이터 보존
			[index]: {
				...prevData[index],
				[name]: value,
			},
		}));
	};

	const parentDataChange = (e, index) => {
		if (index === 0) {
			dataChange1(e, reqData[0]);
		} else if (index === 1) {
			dataChange2(e, reqData[1]);
		}
	}
	return (
		<>
			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-panel-inner-title">자식 컴포넌트3 데이터1</div>

				<div className='pyo-panel-flex-wrap'>
					<div className='pyo-panel-flex-inner'>
						<input
							type="text"
							name="name"
							className='pyo-input'
							value={reqData[0]?.name || ''}
							onChange={(e) => handleChangeData(e, 0)}
							placeholder="데이터1 이름"
						/>
					</div>
					<div className='pyo-panel-flex-inner'>
						<input
							type="text"
							name="tell"
							className='pyo-input'
							value={reqData[0]?.tell || ''}
							onChange={(e) => handleChangeData(e, 0)}
							placeholder="데이터1 전화번호"
						/>
					</div>
					<button className='pyo-button color-black' onClick={(e) => parentDataChange(e, 0)}>부모 데이터1 변경</button>
				</div>
			</div>

			<div className="pyo-panel pyo-panel-flex-wrap">
				<div className="pyo-panel-inner-title">자식 컴포넌트3 데이터2</div>

				<div className='pyo-panel-flex-wrap'>
					<div className='pyo-panel-flex-inner'>
						<input
							type="text"
							name="name"
							className='pyo-input'
							value={reqData[1]?.name || ''}
							onChange={(e) => handleChangeData(e, 1)}
							placeholder="데이터1 이름"
						/>
					</div>
					<div className='pyo-panel-flex-inner'>
						<input
							type="text"
							name="tell"
							className='pyo-input'
							value={reqData[1]?.tell || ''}
							onChange={(e) => handleChangeData(e, 1)}
							placeholder="데이터1 전화번호"
						/>
					</div>
					<button className='pyo-button color-black' onClick={(e) => parentDataChange(e, 1)}>부모 데이터1 변경</button>
				</div>
			</div>
		</>
	);
};