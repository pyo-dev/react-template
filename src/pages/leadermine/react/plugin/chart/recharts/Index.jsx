import { ReChartBar } from "./Bar";
import { ReChartLine } from "./Line";
import { ReChartPie } from "./Pie";

export const Recharts = () => {
	return (
		<>
			<ReChartPie />
			<ReChartBar />
			<ReChartLine />
		</>
	);
};