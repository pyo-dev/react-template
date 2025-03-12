import { useLocation } from "react-router-dom";
import { LmNavButton } from "@/components/LmButton";
import { ChartJs } from "./chartJs/Index";
import { Recharts } from "./recharts/Index";

export const LeaderminePluginChart = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getCate = params.get('cate') || 'recharts'; 



	return (
		<>
			<div className="lm-tab">
				<LmNavButton to="/leadermine/react/plugin?type=chart" lmClass={ getCate === 'recharts' && 'active' }><div className="lm-icon-pin"></div>recharts</LmNavButton>
				<LmNavButton to="/leadermine/react/plugin?type=chart&cate=chartjs" lmClass={ getCate === 'chartjs' && 'active' }><div className="lm-icon-pin"></div>chart.js</LmNavButton>
			</div>
			{getCate === 'recharts' && <Recharts />}
			{getCate === 'chartjs' && <ChartJs />}
		</>
	);
};