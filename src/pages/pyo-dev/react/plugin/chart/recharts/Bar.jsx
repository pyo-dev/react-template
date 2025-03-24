import { useState } from "react";
import { ReChartBarCode } from "./BarCode";
import { ReChartBarPreview } from "./BarPreview";

export const ReChartBar = () => {
	const [viewType, setViewType] = useState('preview')
	

	return (
		<>
			<div className="pyo-panel pyo-panel-flex-wrap">
				<button
					className={`pyo-button color-1 s-s ${viewType !== 'preview' && 'line'}`}
					onClick={() => setViewType('preview')}
				>Preview</button>
				<button
					className={`pyo-button color-1 s-s ${viewType !== 'code' && 'line'}`}
					onClick={() => setViewType('code')}
				>Code</button>
				{viewType === 'preview' && <ReChartBarPreview/>}
				{viewType === 'code' && <ReChartBarCode/>}
			</div>
		</>
	);
};
