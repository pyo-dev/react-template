import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { LmNavButton } from "@/components/LmButton";
import {LeadermineReactDataSub1} from './Sub1';
import {LeadermineReactDataSub2} from './Sub2';
import {LeadermineReactDataSub3} from './Sub3';
import {LeadermineReactDataCode} from './Code';

export const LeadermineReactData = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('type') || '';

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
			<div className="lm-tab">
				<LmNavButton to="/leadermine/react/data"><div className="lm-icon-pin"></div>소스</LmNavButton>
				<LmNavButton to="/leadermine/react/data?type=example"><div className="lm-icon-pin"></div>미리보기</LmNavButton>
			</div>
			{getType ? (
				<>
					<div className='lm-panel lm-panel-flex-wrap'>
						<div className="lm-panel-inner-title">부모 컴포넌트 데이터1</div>
						<div className='lm-panel-flex-inner'>
							<input
								type="text"
								name="name"
								className='lm-input'
								value={prposData1.name || ''}
								onChange={handleChangeData1}
								placeholder="데이터1 이름"
							/>
						</div>
						<div className='lm-panel-flex-inner'>
							<input
								type="text"
								name="tell"
								className='lm-input'
								value={prposData1.tell || ''}
								onChange={handleChangeData1}
								placeholder="데이터1 전화번호"
							/>
						</div>
						<div className='lm-panel-flex-inner'>
							이름 : {prposData1.name} <br />
							전화버호 : {prposData1.tell}
						</div>
					</div>
					<div className='lm-panel lm-panel-flex-wrap'>
						<div className="lm-panel-inner-title">부모 컴포넌트 데이터2</div>
						<div className='lm-panel-flex-inner'>
							<input
								type="text"
								name="name"
								className='lm-input'
								value={prposData2.name || ''}
								onChange={handleChangeData2}
								placeholder="데이터2 이름"
							/>
						</div>
						<div className='lm-panel-flex-inner'>
							<input
								type="text"
								name="tell"
								className='lm-input'
								value={prposData2.tell || ''}
								onChange={handleChangeData2}
								placeholder="데이터2 전화번호"
							/>
						</div>
						<div className='lm-panel-flex-inner'>
							이름 : {prposData2.name} <br />
							전화버호 : {prposData2.tell}
						</div>
					</div>
					<LeadermineReactDataSub1 data={prposData1} />
					<LeadermineReactDataSub2 data={prposData2} dataChange={setPrposData2} />
					<LeadermineReactDataSub3 dataChange1={handleChangeData1} dataChange2={handleChangeData2} />
				</>
			) : (
				<LeadermineReactDataCode />
			)}
		</>
	);
};