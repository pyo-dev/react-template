import Highlight from 'react-highlight'
import { bannerImage1, bannerImage2 } from '@/assets/img';

export const PyoDevReactImg = () => {
	const importHmtl = `// @/assets/img/index.js
import bannerImage1 from '@/assets/img/banner-1.png';
import bannerImage2 from '@/assets/img/banner-2.png';

export { bannerImage1, bannerImage2 };	
`
	const returnHtml = `// page
import { bannerImage1, bannerImage2 } from '@/assets/img';

export const PyoDevReactImg = () => {
	return (
		<>
			<div className='pyo-panel'>
				<Highlight className='javascript pyo-panel-code'>{importHmtl}</Highlight>
			</div>
			<div className='pyo-panel pyo-sample-img-wrap'>
				<img src={bannerImage1} alt="배너이미지1"/>
				<img src={bannerImage2} alt="배너이미지2"/>
			</div>
		</>
	);
};
`

	return (
		<>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<Highlight className='javascript pyo-panel-code'>{importHmtl}</Highlight>
				<Highlight className='javascript pyo-panel-code'>{returnHtml}</Highlight>
			</div>
			<div className='pyo-panel pyo-sample-img-wrap'>
				<div className="pyo-panel-inner-title">샘플</div>
				<img src={bannerImage1} alt="배너이미지1"/>
				<img src={bannerImage2} alt="배너이미지2"/>
			</div>
		</>
	);
};