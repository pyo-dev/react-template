import { useLocation } from "react-router-dom";

import { LmNavButton } from "@/components/LmButton";
import { PyoDevPluginSwiper } from "@/pages/pyo-dev/react/plugin/swiper/Index";
import { PyoDevPluginDatepicker } from "@/pages/pyo-dev/react/plugin/datepicker/Index";
import { PyoDevPluginChart } from "@/pages/pyo-dev/react/plugin/chart/Index";
import { PyoDevPluginExcel } from "@/pages/pyo-dev/react/plugin/excel/Index";
import { PyoDevPluginSortable } from "@/pages/pyo-dev/react/plugin/sortable/Index";
import { PyoDevPluginHighlight } from "@/pages/pyo-dev/react/plugin/highlight/Index";
import { PyoDevPluginEditor } from "@/pages/pyo-dev/react/plugin/editor/Index";
import { PyoDevPluginReactHelmet } from "@/pages/pyo-dev/react/plugin/react-helmet/Index";

export const PyoDevReactPlugin = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('type') || 'reacthelmet'; 

	return (
		<>
			<div className="lm-tab">
				<LmNavButton to="/pyo-dev/react/plugin"><div className="lm-icon-pin"></div>react-helmet</LmNavButton>
				<LmNavButton to="/pyo-dev/react/plugin?type=swiper"><div className="lm-icon-pin"></div>swiper</LmNavButton>
				<LmNavButton to="/pyo-dev/react/plugin?type=datepicker"><div className="lm-icon-pin"></div>datepicker</LmNavButton>
				<LmNavButton to="/pyo-dev/react/plugin?type=editor"><div className="lm-icon-pin"></div>editor</LmNavButton>
				<LmNavButton to="/pyo-dev/react/plugin?type=chart" lmClass={ getType === 'chart' && 'active' }><div className="lm-icon-pin"></div>chart</LmNavButton>
				<LmNavButton to="/pyo-dev/react/plugin?type=excel"><div className="lm-icon-pin"></div>excel</LmNavButton>
				<LmNavButton to="/pyo-dev/react/plugin?type=sortable"><div className="lm-icon-pin"></div>sortable</LmNavButton>
				<LmNavButton to="/pyo-dev/react/plugin?type=highlight"><div className="lm-icon-pin"></div>highlight</LmNavButton>
			</div>
			{getType === 'reacthelmet' && <PyoDevPluginReactHelmet />}
			{getType === 'swiper' && <PyoDevPluginSwiper />}
			{getType === 'datepicker' && <PyoDevPluginDatepicker />}
			{getType === 'editor' && <PyoDevPluginEditor />}
			{getType === 'chart' && <PyoDevPluginChart />}
			{getType === 'excel' && <PyoDevPluginExcel />}
			{getType === 'sortable' && <PyoDevPluginSortable />}
			{getType === 'highlight' && <PyoDevPluginHighlight />}
		</>
	);
};