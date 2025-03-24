import { useLocation } from "react-router-dom";

import { PyoNavButton } from "@/components/PyoButton";
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
			<div className="pyo-tab">
				<PyoNavButton to="/pyo-dev/react/plugin"><div className="pyo-icon-pin"></div>react-helmet</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin?type=swiper"><div className="pyo-icon-pin"></div>swiper</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin?type=datepicker"><div className="pyo-icon-pin"></div>datepicker</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin?type=editor"><div className="pyo-icon-pin"></div>editor</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin?type=chart" pyoClass={ getType === 'chart' && 'active' }><div className="pyo-icon-pin"></div>chart</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin?type=excel"><div className="pyo-icon-pin"></div>excel</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin?type=sortable"><div className="pyo-icon-pin"></div>sortable</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin?type=highlight"><div className="pyo-icon-pin"></div>highlight</PyoNavButton>
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