import { useEffect, useState } from 'react';
import SampleSitemap from '@/axios/mockup/sitemap.json'
import { LmNavButton } from "@/components/LmButton";
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

	const buttonHtml = `// @/components/LmButton.jsx
import { useNavigate, useLocation } from 'react-router-dom';

const LmNavButton = ({ to, lmClass = '', lmParents = false, lmEvent = false, children }) => {
	const navigate = useNavigate();
	const { pathname, search } = useLocation(); // 현재 경로와 쿼리 파라미터 사용
	const currentPath = \`\${pathname}\${search}\`;

	// 부모 경로 포함 여부에 따른 활성화 클래스 설정
	const isActive = lmParents 
		? (pathname === "/" && to === "/") || (to !== "/" && pathname.includes(to)) 
		: to === currentPath;

	const handleClick = (event) => {
		event.preventDefault();
		lmEvent ? lmEvent() : navigate(to);
	};

	return (
		<button onClick={handleClick} className={\`\${isActive ? 'active' : ''} \${lmClass}\`}>
			{children}
		</button>
	);
};

export { LmNavButton };
`

	const gnbHtml = `// 사용법
import { useEffect, useState } from 'react';
import SampleSitemap from '@/axios/mockup/sitemap.json'
import { LmNavButton } from "@/components/LmButton";

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
					<LmNavButton
						to="/pyo-dev/design"
						lmClass={'lm-button color-1'}
						lmEvent={item.children?.length > 0 ? () => toggleShow(index) : false }
					>
						{item.title}
					</LmNavButton>
					{
						item.children?.length > 0 &&
						childrenShow[index] &&
						<div>
							{item.children.map((sItem, sIndex) => (
								<div key={sIndex}>
									<LmNavButton lmClass={'lm-button color-2 s-s'}>{sItem.title}</LmNavButton>
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
			<div className='lm-panel lm-panel-flex-wrap'>
				<Highlight className='javascript lm-panel-code'>{buttonHtml}</Highlight>
			</div>
			<div className='lm-panel lm-panel-flex-wrap'>
				<Highlight className='javascript lm-panel-code'>{gnbHtml}</Highlight>
			</div>
			<div className='lm-panel lm-panel-flex-wrap'>
				<div className='w-full'>
					{sitemap.map((item, index) => (
						<div key={index} style={{padding: '5px'}}>
							<LmNavButton
								to="/pyo-dev/design"
								lmClass={'lm-button color-1'}
								lmEvent={item.children?.length > 0 ? () => toggleShow(index) : false }
							>
								{item.title}
							</LmNavButton>
							{
								item.children?.length > 0 &&
								childrenShow[index] &&
								<div style={{padding: '2px'}}>
									{item.children.map((sItem, sIndex) => (
										<div key={sIndex} style={{padding: '1px'}}>
											<LmNavButton lmClass={'lm-button color-2 s-s'}>{sItem.title}</LmNavButton>
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