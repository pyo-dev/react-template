import { Outlet, useLocation } from "react-router-dom";

import { PyoNavButton } from "@/components/PyoButton";

export const PyoDevReactMain = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('type') || 'icon'; 

	return (
		<>
			<div className="pyo-panel-title">
				<div className="pyo-icon-box color-4"><div className="pyo-icon-star color-white"></div></div>
				<div>
					<div className="title">REACT</div>
					<div className="des">react 사용법 및 플러그인 모음</div>
				</div>
			</div>

			<div className="pyo-tab">
				<PyoNavButton to="/pyo-dev/react"><div className="pyo-icon-pin"></div>이미지</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/data" pyoParents={true}><div className="pyo-icon-pin"></div>컴포넌트간 데이터 통신</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/board" pyoParents={true}><div className="pyo-icon-pin"></div>게시판</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/popup"><div className="pyo-icon-pin"></div>팝업</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/gnb"><div className="pyo-icon-pin"></div>메뉴</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/plugin" pyoParents={true}><div className="pyo-icon-pin"></div>플러그인</PyoNavButton>
			</div>
			<Outlet />
		</>
	);
};