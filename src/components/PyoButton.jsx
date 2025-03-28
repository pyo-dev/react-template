import { useNavigate, useLocation } from 'react-router-dom';

const PyoNavButton = ({ to, pyoClass = '', pyoParents = false, pyoEvent = false, children }) => {
	const navigate = useNavigate();
	const { pathname, search } = useLocation(); // 현재 경로와 쿼리 파라미터 사용
	const currentPath = `${pathname}${search}`;

	// 부모 경로 포함 여부에 따른 활성화 클래스 설정
	const isActive = pyoParents 
		? (pathname === "/" && to === "/") || (to !== "/" && pathname.includes(to)) 
		: to === currentPath;

	const handleClick = (event) => {
		event.preventDefault();
		pyoEvent ? pyoEvent() : navigate(to);
	};

	return (
		<button onClick={handleClick} className={`${isActive ? 'active' : ''} ${pyoClass}`}>
			{children}
		</button>
	);
};

export { PyoNavButton };
