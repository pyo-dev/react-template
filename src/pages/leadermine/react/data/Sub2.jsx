export const LeadermineReactDataSub2 = ({data, dataChange}) => {
	return (
		<div className="lm-panel lm-panel-flex-wrap">
			<div className="lm-panel-inner-title">자식 컴포넌트2 데이터2</div>

			<div className='lm-panel-flex-inner'>
				<input
					type="text"
					name="name"
					className='lm-input'
					value={data.name || ''}
					onChange={(e) => dataChange((prevData) => ({
						...prevData,
						name: e.target.value,
					}))}
					placeholder="데이터2 이름"
				/>
			</div>
			<div className='lm-panel-flex-inner'>
				<input
					type="text"
					name="tell"
					className='lm-input'
					value={data.tell || ''}
					onChange={(e) => dataChange((prevData) => ({
						...prevData,
						tell: e.target.value,
					}))}
					placeholder="데이터2 전화번호"
				/>
			</div>
			<div className='lm-panel-flex-inner'>
				이름 : {data.name} <br />
				전화버호 : {data.tell}
			</div>
		</div>
	);
};