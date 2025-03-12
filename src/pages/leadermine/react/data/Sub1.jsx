export const LeadermineReactDataSub1 = ({data}) => {
	return (
		<div className="lm-panel lm-panel-flex-wrap">
			<div className="lm-panel-inner-title">자식 컴포넌트1 데이터1</div>

			<div className='lm-panel-flex-inner'>
				이름 : {data.name} <br />
				전화버호 : {data.tell}
			</div>
		</div>
	);
};