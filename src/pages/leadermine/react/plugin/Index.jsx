import { useLocation } from "react-router-dom";

import { LmNavButton } from "@/components/LmButton";
import { LeaderminePluginSwiper } from "@/pages/leadermine/react/plugin/swiper/Index";
import { LeaderminePluginDatepicker } from "@/pages/leadermine/react/plugin/datepicker/Index";
import { LeaderminePluginChart } from "@/pages/leadermine/react/plugin/chart/Index";
import { LeaderminePluginExcel } from "@/pages/leadermine/react/plugin/excel/Index";
import { LeaderminePluginSortable } from "@/pages/leadermine/react/plugin/sortable/Index";
import { LeaderminePluginHighlight } from "@/pages/leadermine/react/plugin/highlight/Index";
import { LeaderminePluginEditor } from "@/pages/leadermine/react/plugin/editor/Index";
import { LeaderminePluginReactHelmet } from "@/pages/leadermine/react/plugin/react-helmet/Index";

export const LeadermineReactPlugin = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('type') || 'reacthelmet'; 

	return (
		<>
			<div className="lm-tab">
				<LmNavButton to="/leadermine/react/plugin"><div className="lm-icon-pin"></div>react-helmet</LmNavButton>
				<LmNavButton to="/leadermine/react/plugin?type=swiper"><div className="lm-icon-pin"></div>swiper</LmNavButton>
				<LmNavButton to="/leadermine/react/plugin?type=datepicker"><div className="lm-icon-pin"></div>datepicker</LmNavButton>
				<LmNavButton to="/leadermine/react/plugin?type=editor"><div className="lm-icon-pin"></div>editor</LmNavButton>
				<LmNavButton to="/leadermine/react/plugin?type=chart" lmClass={ getType === 'chart' && 'active' }><div className="lm-icon-pin"></div>chart</LmNavButton>
				<LmNavButton to="/leadermine/react/plugin?type=excel"><div className="lm-icon-pin"></div>excel</LmNavButton>
				<LmNavButton to="/leadermine/react/plugin?type=sortable"><div className="lm-icon-pin"></div>sortable</LmNavButton>
				<LmNavButton to="/leadermine/react/plugin?type=highlight"><div className="lm-icon-pin"></div>highlight</LmNavButton>
			</div>
			{getType === 'reacthelmet' && <LeaderminePluginReactHelmet />}
			{getType === 'swiper' && <LeaderminePluginSwiper />}
			{getType === 'datepicker' && <LeaderminePluginDatepicker />}
			{getType === 'editor' && <LeaderminePluginEditor />}
			{getType === 'chart' && <LeaderminePluginChart />}
			{getType === 'excel' && <LeaderminePluginExcel />}
			{getType === 'sortable' && <LeaderminePluginSortable />}
			{getType === 'highlight' && <LeaderminePluginHighlight />}
		</>
	);
};