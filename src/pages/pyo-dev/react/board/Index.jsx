import { Outlet } from 'react-router-dom';
import { LmNavButton } from "@/components/LmButton";

export const PyoDevReactBoard = () => {

	return (
		<div>
			<div className="lm-tab">
				<LmNavButton to="/pyo-dev/react/board"><div className="lm-icon-pin"></div>소스</LmNavButton>
				<LmNavButton to="/pyo-dev/react/board/notice" lmParents={true}><div className="lm-icon-pin"></div>Notice 미리보기</LmNavButton>
				<LmNavButton to="/pyo-dev/react/board/faq" lmParents={true}><div className="lm-icon-pin"></div>Faq 미리보기</LmNavButton>
			</div>
			<Outlet/>
		</div>
	);
};
