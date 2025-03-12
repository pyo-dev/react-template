import Highlight from 'react-highlight'
import { bannerImage1, bannerImage2 } from '@/assets/img';

export const LeadermineReactImg = () => {
	const importHmtl = `// @/assets/img/index.js
import bannerImage1 from '@/assets/img/banner-1.png';
import bannerImage2 from '@/assets/img/banner-2.png';

export { bannerImage1, bannerImage2 };	
`
	const returnHtml = `// page
import { bannerImage1, bannerImage2 } from '@/assets/img';

export const LeadermineReactImg = () => {
	return (
		<>
			<div className='lm-panel'>
				<Highlight className='javascript lm-panel-code'>{importHmtl}</Highlight>
			</div>
			<div className='lm-panel lm-sample-img-wrap'>
				<img src={bannerImage1} alt="배너이미지1"/>
				<img src={bannerImage2} alt="배너이미지2"/>
			</div>
		</>
	);
};
`

	return (
		<>
			<div className='lm-panel lm-panel-flex-wrap'>
				<Highlight className='javascript lm-panel-code'>{importHmtl}</Highlight>
				<Highlight className='javascript lm-panel-code'>{returnHtml}</Highlight>
			</div>
			<div className='lm-panel lm-sample-img-wrap'>
				<div className="lm-panel-inner-title">샘플</div>
				<img src={bannerImage1} alt="배너이미지1"/>
				<img src={bannerImage2} alt="배너이미지2"/>
			</div>
		</>
	);
};