import { useLocation } from 'react-router-dom';

import { PyoNavButton } from "@/components/PyoButton";
import { PyoDevDesignIcon } from "@/pages/pyo-dev/design/Icon";
import { PyoDevDesignButton } from "@/pages/pyo-dev/design/Button";
import { PyoDevDesignTab } from "@/pages/pyo-dev/design/Tab";
import { PyoDevDesignPopup } from "@/pages/pyo-dev/design/Popup";
import { PyoDevDesignForm } from "@/pages/pyo-dev/design/form/Index";

export const PyoDevDesign = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const getType = params.get('type') || 'icon'; 

	return (
		<>
			<div className="pyo-panel-title">
				<div className="pyo-icon-box color-1"><div className="pyo-icon-smile color-white"></div></div>
				<div>
					<div className="title">DESIGN</div>
					<div className="des">pyo-dev 내부 디자인 에셋</div>
				</div>
			</div>
			<div className="pyo-tab">
				<PyoNavButton to="/pyo-dev/design"><div className="pyo-icon-pin"></div>아이콘</PyoNavButton>
				<PyoNavButton to="/pyo-dev/design?type=button"><div className="pyo-icon-all-menu-2"></div>버튼</PyoNavButton>
				<PyoNavButton to="/pyo-dev/design?type=tab"><div className="pyo-icon-link"></div>텝</PyoNavButton>
				<PyoNavButton to="/pyo-dev/design?type=popup"><div className="pyo-icon-i"></div>팝업</PyoNavButton>
				<PyoNavButton to="/pyo-dev/design?type=form" pyoClass={ getType === 'form' ? 'active' : '' }><div className="pyo-icon-note"></div>폼</PyoNavButton>
			</div>
			<div className='pyo-panel-guide'>
				<div className='pyo-icon-feel color-4'></div>
				해당 영역을 클릭하시면 해당 태그가 복사됩니다.
			</div>
			{getType === 'icon' && <PyoDevDesignIcon />}
			{getType === 'button' && <PyoDevDesignButton />}
			{getType === 'tab' && <PyoDevDesignTab />}
			{getType === 'popup' && <PyoDevDesignPopup />}
			{getType === 'form' && <PyoDevDesignForm />}
		</>
	);
};