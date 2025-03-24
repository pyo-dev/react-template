import { useLocation } from "react-router-dom";
import { PyoNavButton } from "@/components/PyoButton";
import { ChartJs } from "./chartJs/Index";
import { Recharts } from "./recharts/Index";

export const PyoDevPluginChart = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getCate = params.get('cate') || 'recharts'; 



	return (
		<>
			<div className="pyo-tab">
				<PyoNavButton to="/pyo-dev/react/plugin?type=chart" pyoClass={ getCate === 'recharts' && 'active' }><div className="pyo-icon-pin"></div>recharts</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin?type=chart&cate=chartjs" pyoClass={ getCate === 'chartjs' && 'active' }><div className="pyo-icon-pin"></div>chart.js</PyoNavButton>
			</div>
			{getCate === 'recharts' && <Recharts />}
			{getCate === 'chartjs' && <ChartJs />}
		</>
	);
};