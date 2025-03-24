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