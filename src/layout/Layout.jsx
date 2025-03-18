import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LayoutHeader } from '@/layout/Header';
import { LayoutAside } from '@/layout/Aside';

export const Layout = () => {
	let asideShow = false;
	return (
		<>
			<Helmet>
				<title>PYO-DEV TEMPLATE GUIDE</title>
			</Helmet>
			<div className='lmWrap'>
				<LayoutHeader />
				<div className='lmContents'>
					<Outlet />
				</div>
				{asideShow && <LayoutAside />}
			</div>
		</>
	);
};
