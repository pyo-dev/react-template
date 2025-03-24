import { Outlet } from 'react-router-dom';
import { PyoNavButton } from "@/components/PyoButton";

export const PyoDevReactBoard = () => {

	return (
		<div>
			<div className="pyo-tab">
				<PyoNavButton to="/pyo-dev/react/board"><div className="pyo-icon-pin"></div>소스</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/board/notice" pyoParents={true}><div className="pyo-icon-pin"></div>Notice 미리보기</PyoNavButton>
				<PyoNavButton to="/pyo-dev/react/board/faq" pyoParents={true}><div className="pyo-icon-pin"></div>Faq 미리보기</PyoNavButton>
			</div>
			<Outlet/>
		</div>
	);
};
