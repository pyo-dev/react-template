import { useState } from "react";
import { ReChartPiePreview } from "./PiePreview";
import { ReChartPieCode } from "./PieCode";

export const ReChartPie = () => {
	const [viewType, setViewType] = useState('preview')
	

	return (
		<>
			<div className="lm-panel lm-panel-flex-wrap">
				<button
					className={`lm-button color-1 s-s ${viewType !== 'preview' && 'line'}`}
					onClick={() => setViewType('preview')}
				>Preview</button>
				<button
					className={`lm-button color-1 s-s ${viewType !== 'code' && 'line'}`}
					onClick={() => setViewType('code')}
				>Code</button>
				{viewType === 'preview' && <ReChartPiePreview/>}
				{viewType === 'code' && <ReChartPieCode/>}
			</div>
		</>
	);
};
