import { Outlet, useLocation } from "react-router-dom";

import { LmNavButton } from "@/components/LmButton";

export const PyoDevReactMain = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('type') || 'icon'; 

	return (
		<>
			<div className="lm-panel-title">
				<div className="lm-icon-box color-4"><div className="lm-icon-star color-white"></div></div>
				<div>
					<div className="title">REACT</div>
					<div className="des">react 사용법 및 플러그인 모음</div>
				</div>
			</div>

			<div className="lm-tab">
				<LmNavButton to="/pyo-dev/react"><div className="lm-icon-pin"></div>이미지</LmNavButton>
				<LmNavButton to="/pyo-dev/react/data" lmParents={true}><div className="lm-icon-pin"></div>컴포넌트간 데이터 통신</LmNavButton>
				<LmNavButton to="/pyo-dev/react/board" lmParents={true}><div className="lm-icon-pin"></div>게시판</LmNavButton>
				<LmNavButton to="/pyo-dev/react/popup"><div className="lm-icon-pin"></div>팝업</LmNavButton>
				<LmNavButton to="/pyo-dev/react/gnb"><div className="lm-icon-pin"></div>메뉴</LmNavButton>
				<LmNavButton to="/pyo-dev/react/plugin" lmParents={true}><div className="lm-icon-pin"></div>플러그인</LmNavButton>
			</div>
			<Outlet />
		</>
	);
};