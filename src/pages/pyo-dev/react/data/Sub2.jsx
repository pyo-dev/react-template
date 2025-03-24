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