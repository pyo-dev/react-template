import Highlight from 'react-highlight'

export const PyoDevReactDataCode = () => {
	const parentstHmtl = `// Parents Components
import { useState } from 'react';
import {PyoDevReactDataSub1} from './Sub1';
import {PyoDevReactDataSub2} from './Sub2';
import {PyoDevReactDataSub3} from './Sub3';

export const PyoDevReactData = () => {

	const [prposData1, setPrposData1] = useState({});
	const [prposData2, setPrposData2] = useState({});

	const handleChangeData1 = (e, childData) => {
		const { name, value } = e.target;
		if(!childData){
			setPrposData1((prevData) => ({
				...prevData,
				[name]: value,
			}));
		} else {
			setPrposData1((prevData) => ({
				...prevData,
				...childData
			}));
		}
	};

	const handleChangeData2 = (e, childData) => {
		const { name, value } = e.target;
		if(!childData){
			setPrposData2((prevData) => ({
				...prevData,
				[name]: value,
			}));
		} else {
			setPrposData2((prevData) => ({
				...prevData,
				...childData
			}));
		}
	};


	return (
		<>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<div className="pyo-panel-inner-title">부모 컴포넌트 데이터1</div>
				<div className='pyo-panel-flex-inner'>
					<input
						type="text"
						name="name"
						className='pyo-input'
						value={prposData1.name || ''}
						onChange={handleChangeData1}
						placeholder="데이터1 이름"
					/>
				</div>
				<div className='pyo-panel-flex-inner'>
					<input
						type="text"
						name="tell"
						className='pyo-input'
						value={prposData1.tell || ''}
						onChange={handleChangeData1}
						placeholder="데이터1 전화번호"
					/>
				</div>
				<div className='pyo-panel-flex-inner'>
					이름 : {prposData1.name} <br />
					전화버호 : {prposData1.tell}
				</div>
			</div>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<div className="pyo-panel-inner-title">부모 컴포넌트 데이터2</div>
				<div className='pyo-panel-flex-inner'>
					<input
						type="text"
						name="name"
						className='pyo-input'
						value={prposData2.name || ''}
						onChange={handleChangeData2}
						placeholder="데이터2 이름"
					/>
				</div>
				<div className='pyo-panel-flex-inner'>
					<input
						type="text"
						name="tell"
						className='pyo-input'
						value={prposData2.tell || ''}
						onChange={handleChangeData2}
						placeholder="데이터2 전화번호"
					/>
				</div>
				<div className='pyo-panel-flex-inner'>
					이름 : {prposData2.name} <br />
					전화버호 : {prposData2.tell}
				</div>
			</div>
			<PyoDevReactDataSub1 data={prposData1} />
			<PyoDevReactDataSub2 data={prposData2} dataChange={setPrposData2} />
			<PyoDevReactDataSub3 dataChange1={handleChangeData1} dataChange2={handleChangeData2} />
			
		</>
	);
};
`
	const sub1Html = `// Sub1
export const PyoDevReactDataSub1 = ({data}) => {
	return (
		<div className="pyo-panel pyo-panel-flex-wrap">
			<div className="pyo-panel-inner-title">자식 컴포넌트1 데이터1</div>

			<div className='pyo-panel-flex-inner'>
				이름 : {data.name} <br />
				전화버호 : {data.tell}
			</div>
		</div>
	);
};
`

	const sub2Html = `// sub2
export const PyoDevReactDataSub2 = ({data, dataChange}) => {
	return (
		<div className="pyo-panel pyo-panel-flex-wrap">
			<div className="pyo-panel-inner-title">자식 컴포넌트2 데이터2</div>

			<div className='pyo-panel-flex-inner'>
				<input
					type="text"
					name="name"
					className='pyo-input'
					value={data.name || ''}
					onChange={(e) => dataChange((prevData) => ({
						...prevData,
						name: e.target.value,
					}))}
					placeholder="데이터2 이름"
				/>
			</div>
			<div className='pyo-panel-flex-inner'>
				<input
					type="text"
					name="tell"
					className='pyo-input'
					value={data.tell || ''}
					onChange={(e) => dataChange((prevData) => ({
						...prevData,
						tell: e.target.value,
					}))}
					placeholder="데이터2 전화번호"
				/>
			</div>
			<div className='pyo-panel-flex-inner'>
				이름 : {data.name} <br />
				전화버호 : {data.tell}
			</div>
		</div>
	);
};
`
	const sub3Html = `// sub3
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
`

	return (
		<>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<Highlight className='javascript pyo-panel-code'>{parentstHmtl}</Highlight>
				<Highlight className='javascript pyo-panel-code'>{sub1Html}</Highlight>
				<Highlight className='javascript pyo-panel-code'>{sub2Html}</Highlight>
				<Highlight className='javascript pyo-panel-code'>{sub3Html}</Highlight>
			</div>
		</>
	);
};