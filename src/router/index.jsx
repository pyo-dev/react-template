import { Outlet, useRoutes } from 'react-router-dom';
import { Layout } from '@/layout/Layout';
import { NotFound } from '@/pages/notFound/NotFound';
import { Main } from '@/pages/main/Index';
import { Login } from '@/pages/member/login/Login';
import { LeadermineMain } from '@/pages/leadermine/Index';
import { LeadermineDesign } from '@/pages/leadermine/design/Index';
import { LeadermineFilter } from '@/pages/leadermine/filter/Index';
import { LeadermineLoader } from '@/pages/leadermine/loader/Index';
import { LeadermineReactMain } from '@/pages/leadermine/react/Index';
import { LeadermineReactImg } from '@/pages/leadermine/react/img/Index';
import { LeadermineReactData } from '@/pages/leadermine/react/data/Index';
import { LeadermineReactBoard } from '@/pages/leadermine/react/board/Index';
import { LeadermineReactBoardCode } from '@/pages/leadermine/react/board/Code';
import { LeadermineReactBoardNoticeList } from '@/pages/leadermine/react/board/notice/List';
import { LeadermineReactBoardNoticeView } from '@/pages/leadermine/react/board/notice/View';
import { LeadermineReactBoardFaqList } from '@/pages/leadermine/react/board/faq/List';
import { LeadermineReactPopup } from '@/pages/leadermine/react/popup/Index';
import { LeadermineReactGnb } from '@/pages/leadermine/react/gnb/Index';
import { LeadermineReactPlugin } from '@/pages/leadermine/react/plugin/Index';
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
					path: 'leadermine',
					children: [
						{
							index: true,
							element: <LeadermineMain />,
						},
						{
							path: 'design',
							element: <LeadermineDesign />,
						},
						{
							path: 'design',
							element: <LeadermineDesign />,
						},
						{
							path: 'filter',
							element: <LeadermineFilter />,
						},
						{
							path: 'loader',
							element: <LeadermineLoader />,
						},
						{
							path: 'react',
							element: <LeadermineReactMain />,
							children: [
								{
									index: true,
									element: <LeadermineReactImg />,
								},
								{
									path: 'data',
									element: <LeadermineReactData />,
								},
								{
									path: 'board',
									element: <LeadermineReactBoard />,
									children: [
										{
											index: true,
											element: <LeadermineReactBoardCode />,
										},
										{
											path: 'notice',
											element: <Outlet />,
											children: [
												{
													index: true,
													element: <LeadermineReactBoardNoticeList />,
												},
												{
													path: ':pageNo',
													element: <LeadermineReactBoardNoticeList />,
												},
												{
													path: 'view/:viewNo',
													element: <LeadermineReactBoardNoticeView />,
												},
											]
										},
										{
											path: 'faq',
											element: <Outlet />,
											children: [
												{
													index: true,
													element: <LeadermineReactBoardFaqList />,
												},
												{
													path: ':pageNo',
													element: <LeadermineReactBoardFaqList />,
												},
											]
										},
									]
								},
								{
									path: 'popup',
									element: <LeadermineReactPopup />,
								},
								{
									path: 'gnb',
									element: <LeadermineReactGnb />,
								},
								{
									path: 'plugin',
									element: <LeadermineReactPlugin />,
								},
								{
									path: 'plugin/:pageId',
									element: <LeadermineReactPlugin />,
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