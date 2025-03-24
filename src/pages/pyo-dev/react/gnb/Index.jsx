import { useEffect, useState } from 'react';
import SampleSitemap from '@/axios/mockup/sitemap.json'
import { PyoNavButton } from "@/components/PyoButton";
import Highlight from 'react-highlight'

export const PyoDevReactGnb = () => {
	const [sitemap, setSitemap] = useState([]);
	const [childrenShow, setChildrenShow] = useState([])

	const getSitemap = () => {
		setSitemap(SampleSitemap);
		let showChild = new Array(SampleSitemap.length).fill(false);
		setChildrenShow(showChild);
	}

	const toggleShow = (index) => {
		setChildrenShow((prevData) => ({
			...prevData,
			[index]: !prevData[index],
		}));
	}

	useEffect(() => {
		getSitemap();
	}, []);

	const buttonHtml = `// @/components/PyoButton.jsx
import { useNavigate, useLocation } from 'react-router-dom';

const PyoNavButton = ({ to, pyoClass = '', pyoParents = false, pyoEvent = false, children }) => {
	const navigate = useNavigate();
	const { pathname, search } = useLocation(); // 현재 경로와 쿼리 파라미터 사용
	const currentPath = \`\${pathname}\${search}\`;

	// 부모 경로 포함 여부에 따른 활성화 클래스 설정
	const isActive = pyoParents 
		? (pathname === "/" && to === "/") || (to !== "/" && pathname.includes(to)) 
		: to === currentPath;

	const handleClick = (event) => {
		event.preventDefault();
		pyoEvent ? pyoEvent() : navigate(to);
	};

	return (
		<button onClick={handleClick} className={\`\${isActive ? 'active' : ''} \${pyoClass}\`}>
			{children}
		</button>
	);
};

export { PyoNavButton };
`

	const gnbHtml = `// 사용법
import { useEffect, useState } from 'react';
import SampleSitemap from '@/axios/mockup/sitemap.json'
import { PyoNavButton } from "@/components/PyoButton";

export const PyoDevReactGnb = () => {
	const [sitemap, setSitemap] = useState([]);
	const [childrenShow, setChildrenShow] = useState([])

	const getSitemap = () => {
		setSitemap(SampleSitemap);
		let showChild = new Array(SampleSitemap.length).fill(false);
		setChildrenShow(showChild);
	}

	const toggleShow = (index) => {
		setChildrenShow((prevData) => ({
			...prevData,
			[index]: !prevData[index],
		}));
	}

	useEffect(() => {
		getSitemap();
	}, []);

	return (
		<>
			{sitemap.map((item, index) => (
				<div key={index}>
					<PyoNavButton
						to="/pyo-dev/design"
						pyoClass={'pyo-button color-1'}
						pyoEvent={item.children?.length > 0 ? () => toggleShow(index) : false }
					>
						{item.title}
					</PyoNavButton>
					{
						item.children?.length > 0 &&
						childrenShow[index] &&
						<div>
							{item.children.map((sItem, sIndex) => (
								<div key={sIndex}>
									<PyoNavButton pyoClass={'pyo-button color-2 s-s'}>{sItem.title}</PyoNavButton>
								</div>
							))}
						</div>
					}
				</div>
			))}
		</>
	);
};
`

	return (
		<>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<Highlight className='javascript pyo-panel-code'>{buttonHtml}</Highlight>
			</div>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<Highlight className='javascript pyo-panel-code'>{gnbHtml}</Highlight>
			</div>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<div className='w-full'>
					{sitemap.map((item, index) => (
						<div key={index} style={{padding: '5px'}}>
							<PyoNavButton
								to="/pyo-dev/design"
								pyoClass={'pyo-button color-1'}
								pyoEvent={item.children?.length > 0 ? () => toggleShow(index) : false }
							>
								{item.title}
							</PyoNavButton>
							{
								item.children?.length > 0 &&
								childrenShow[index] &&
								<div style={{padding: '2px'}}>
									{item.children.map((sItem, sIndex) => (
										<div key={sIndex} style={{padding: '1px'}}>
											<PyoNavButton pyoClass={'pyo-button color-2 s-s'}>{sItem.title}</PyoNavButton>
										</div>
									))}
								</div>
							}
						</div>
					))}
				</div>
			</div>
		</>
	);
};