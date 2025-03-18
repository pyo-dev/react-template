import { useLocation } from 'react-router-dom';

import { LmNavButton } from "@/components/LmButton";
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
			<div className="lm-panel-title">
				<div className="lm-icon-box color-1"><div className="lm-icon-smile color-white"></div></div>
				<div>
					<div className="title">DESIGN</div>
					<div className="des">pyo-dev 내부 디자인 에셋</div>
				</div>
			</div>
			<div className="lm-tab">
				<LmNavButton to="/pyo-dev/design"><div className="lm-icon-pin"></div>아이콘</LmNavButton>
				<LmNavButton to="/pyo-dev/design?type=button"><div className="lm-icon-all-menu-2"></div>버튼</LmNavButton>
				<LmNavButton to="/pyo-dev/design?type=tab"><div className="lm-icon-link"></div>텝</LmNavButton>
				<LmNavButton to="/pyo-dev/design?type=popup"><div className="lm-icon-i"></div>팝업</LmNavButton>
				<LmNavButton to="/pyo-dev/design?type=form" lmClass={ getType === 'form' ? 'active' : '' }><div className="lm-icon-note"></div>폼</LmNavButton>
			</div>
			<div className='lm-panel-guide'>
				<div className='lm-icon-feel color-4'></div>
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