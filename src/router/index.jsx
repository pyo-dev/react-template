import { Outlet, useRoutes } from 'react-router-dom';
import { Layout } from '@/layout/Layout';
import { NotFound } from '@/pages/notFound/NotFound';
import { Main } from '@/pages/main/Index';
import { Login } from '@/pages/member/login/Login';
import { PyoDevMain } from '@/pages/pyo-dev/Index';
import { PyoDevDesign } from '@/pages/pyo-dev/design/Index';
import { PyoDevFilter } from '@/pages/pyo-dev/filter/Index';
import { PyoDevLoader } from '@/pages/pyo-dev/loader/Index';
import { PyoDevReactMain } from '@/pages/pyo-dev/react/Index';
import { PyoDevReactImg } from '@/pages/pyo-dev/react/img/Index';
import { PyoDevReactData } from '@/pages/pyo-dev/react/data/Index';
import { PyoDevReactBoard } from '@/pages/pyo-dev/react/board/Index';
import { PyoDevReactBoardCode } from '@/pages/pyo-dev/react/board/Code';
import { PyoDevReactBoardNoticeList } from '@/pages/pyo-dev/react/board/notice/List';
import { PyoDevReactBoardNoticeView } from '@/pages/pyo-dev/react/board/notice/View';
import { PyoDevReactBoardFaqList } from '@/pages/pyo-dev/react/board/faq/List';
import { PyoDevReactPopup } from '@/pages/pyo-dev/react/popup/Index';
import { PyoDevReactGnb } from '@/pages/pyo-dev/react/gnb/Index';
import { PyoDevReactPlugin } from '@/pages/pyo-dev/react/plugin/Index';
import { CompanyMain } from '@/pages/company/Index';

const MyRouter = () => {
	let element = useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Main />,
				},
				{
					path: 'pyo-dev',
					children: [
						{
							index: true,
							element: <PyoDevMain />,
						},
						{
							path: 'design',
							element: <PyoDevDesign />,
						},
						{
							path: 'design',
							element: <PyoDevDesign />,
						},
						{
							path: 'filter',
							element: <PyoDevFilter />,
						},
						{
							path: 'loader',
							element: <PyoDevLoader />,
						},
						{
							path: 'react',
							element: <PyoDevReactMain />,
							children: [
								{
									index: true,
									element: <PyoDevReactImg />,
								},
								{
									path: 'data',
									element: <PyoDevReactData />,
								},
								{
									path: 'board',
									element: <PyoDevReactBoard />,
									children: [
										{
											index: true,
											element: <PyoDevReactBoardCode />,
										},
										{
											path: 'notice',
											element: <Outlet />,
											children: [
												{
													index: true,
													element: <PyoDevReactBoardNoticeList />,
												},
												{
													path: ':pageNo',
													element: <PyoDevReactBoardNoticeList />,
												},
												{
													path: 'view/:viewNo',
													element: <PyoDevReactBoardNoticeView />,
												},
											]
										},
										{
											path: 'faq',
											element: <Outlet />,
											children: [
												{
													index: true,
													element: <PyoDevReactBoardFaqList />,
												},
												{
													path: ':pageNo',
													element: <PyoDevReactBoardFaqList />,
												},
											]
										},
									]
								},
								{
									path: 'popup',
									element: <PyoDevReactPopup />,
								},
								{
									path: 'gnb',
									element: <PyoDevReactGnb />,
								},
								{
									path: 'plugin',
									element: <PyoDevReactPlugin />,
								},
								{
									path: 'plugin/:pageId',
									element: <PyoDevReactPlugin />,
								},
							],
						},
					],
				},
				{
					path: 'company',
					element: <CompanyMain />,
				},
			],
		},

		{
			path: 'login',
			element: <Login />,
		},
		
		{
			path: '*',
			element: <NotFound />,
		},
	]);
	return element;
};

export default MyRouter;